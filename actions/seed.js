"use server";

import { db } from "@/lib/prisma";
import { subDays } from "date-fns";

const ACCOUNT_ID = "bae2e69b-e622-4c73-bf5d-5c616f2370e2";
const USER_ID = "96f067b0-b2ab-49f3-9ce7-887fe2b41877";

const CATEGORIES = {
  INCOME: [
    { name: "salary", range: [50000, 120000] },
    { name: "freelance", range: [10000, 30000] },
    { name: "investments", range: [5000, 20000] },
    { name: "other-income", range: [1000, 10000] },
  ],
  EXPENSE: [
    { name: "housing", range: [10000, 25000] },
    { name: "transportation", range: [1000, 5000] },
    { name: "groceries", range: [5000, 12000] },
    { name: "utilities", range: [2000, 5000] },
    { name: "entertainment", range: [1000, 5000] },
    { name: "food", range: [1000, 5000] },
    { name: "shopping", range: [2000, 10000] },
    { name: "healthcare", range: [1000, 10000] },
    { name: "education", range: [5000, 20000] },
    { name: "travel", range: [5000, 30000] },
  ],
};

function getRandomAmount(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

function getRandomCategory(type) {
  const categories = CATEGORIES[type];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const amount = getRandomAmount(category.range[0], category.range[1]);
  return { category: category.name, amount };
}

export async function seedTransactions() {
  try {

    const transactions = [];
    let totalBalance = 0;

    for (let i = 90; i >= 0; i--) {
      const date = subDays(new Date(), i);

      const transactionsPerDay = Math.floor(Math.random() * 3) + 1;

      for (let j = 0; j < transactionsPerDay; j++) {

        const type = Math.random() < 0.4 ? "INCOME" : "EXPENSE";
        const { category, amount } = getRandomCategory(type);

        const transaction = {
          id: crypto.randomUUID(),
          type,
          amount,
          description: `${
            type === "INCOME" ? "Received" : "Paid for"
          } ${category}`,
          date,
          category,
          status: "COMPLETED",
          userId: USER_ID,
          accountId: ACCOUNT_ID,
          createdAt: date,
          updatedAt: date,
        };

        totalBalance += type === "INCOME" ? amount : -amount;
        transactions.push(transaction);
      }
    }

    await db.$transaction(async (tx) => {

      await tx.transaction.deleteMany({
        where: { accountId: ACCOUNT_ID },
      });

      await tx.transaction.createMany({
        data: transactions,
      });

      await tx.account.update({
        where: { id: ACCOUNT_ID },
        data: { balance: totalBalance },
      });
    });

    return {
      success: true,
      message: `Created ${transactions.length} transactions`,
    };
  } catch (error) {
    console.error("Error seeding transactions:", error);
    return { success: false, error: error.message };
  }
}