"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Zap, Skull, Cherry, Palmtree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generatePersona } from "@/lib/generate-persona"
import { PersonaCard } from "@/components/persona-card"
import { useToast } from "@/hooks/use-toast"

export default function MultiverseIdentityGenerator() {
  const [name, setName] = useState("")
  const [traits, setTraits] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [personas, setPersonas] = useState<
    Array<{
      id: number
      name: string
      universe: string
      description: string
      backstory: string
      icon: React.ReactNode
      color: string
    }>
  >([])

  const { toast } = useToast()

  const universes = [
    { name: "Sci-Fi", icon: <Zap className="h-5 w-5" />, color: "from-blue-500 to-purple-600" },
    { name: "Fantasy", icon: <Sparkles className="h-5 w-5" />, color: "from-emerald-500 to-teal-700" },
    { name: "Noir", icon: <Skull className="h-5 w-5" />, color: "from-gray-700 to-gray-900" },
    { name: "Anime", icon: <Cherry className="h-5 w-5" />, color: "from-pink-500 to-rose-600" },
    { name: "Prehistoric", icon: <Palmtree className="h-5 w-5" />, color: "from-amber-500 to-yellow-600" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to generate personas",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setPersonas([])

    // Generate personas one by one with a slight delay for animation effect
    for (let i = 0; i < universes.length; i++) {
      const universe = universes[i]
      setTimeout(() => {
        const newPersona = generatePersona(name, traits, universe.name)
        setPersonas((prev) => [
          ...prev,
          {
            id: i,
            name: newPersona.name,
            universe: universe.name,
            description: newPersona.description,
            backstory: newPersona.backstory,
            icon: universe.icon,
            color: universe.color,
          },
        ])

        if (i === universes.length - 1) {
          setIsGenerating(false)
        }
      }, i * 600)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Multiverse Identity Generator
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover alternate versions of yourself across 5 different universes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-gray-900/60 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="traits" className="text-gray-200">
                  Your Traits (optional)
                </Label>
                <Textarea
                  id="traits"
                  value={traits}
                  onChange={(e) => setTraits(e.target.value)}
                  placeholder="Describe yourself (personality, interests, appearance...)"
                  className="bg-gray-900/60 border-gray-700 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating Personas...
                  </span>
                ) : (
                  "Generate Multiverse Personas"
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {personas.map((persona) => (
                  <PersonaCard key={persona.id} persona={persona} />
                ))}
              </AnimatePresence>

              {personas.length === 0 && !isGenerating && (
                <div className="col-span-full flex flex-col items-center justify-center h-full min-h-[300px] bg-black/30 rounded-xl border border-purple-500/20 p-8">
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                      <Sparkles className="h-10 w-10 text-purple-400" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-center">
                    Enter your name and traits to discover your multiverse identities
                  </p>
                </div>
              )}

              {isGenerating && personas.length < 5 && (
                <div className="col-span-full flex items-center justify-center h-full min-h-[300px]">
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-ping"></div>
                      <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
                      </div>
                    </div>
                    <p className="text-purple-300">Searching the multiverse...</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
