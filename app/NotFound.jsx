'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { FileQuestion, MoveLeft, Home } from 'lucide-react'

const NotFound = () => {
  
  const router = useRouter()

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
        <div className="mb-6 p-4 bg-muted rounded-full animate-bounce">
          <FileQuestion className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-8xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
          404
        </h1>
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
          Page not found
        </h2>
        <p className="text-muted-foreground max-w-[500px] mb-8 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => router.back()}
            className="group hover:bg-secondary/80 transition-all"
          >
            <MoveLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          <Link href="/">
            <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound