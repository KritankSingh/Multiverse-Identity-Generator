"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface PersonaProps {
  persona: {
    id: number
    name: string
    universe: string
    description: string
    backstory: string
    icon: React.ReactNode
    color: string
  }
}

export function PersonaCard({ persona }: PersonaProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false })

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    })
  }

  const handleMouseLeave = () => {
    setRipple((prev) => ({ ...prev, show: false }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      layout
      className={`${isExpanded ? "md:col-span-2 xl:col-span-3 z-10" : ""}`}
    >
      <Card
        className={`relative overflow-hidden cursor-pointer h-full border-0 shadow-xl ${
          isExpanded ? "bg-black" : "bg-black/60"
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ripple effect */}
        {ripple.show && !isExpanded && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={`absolute bg-gradient-radial ${persona.color} rounded-full w-4 h-4 pointer-events-none`}
            style={{
              left: ripple.x,
              top: ripple.y,
              transformOrigin: "center center",
            }}
          />
        )}

        {/* Card background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-20`}></div>

        <CardContent className={`relative z-10 p-5 ${isExpanded ? "p-6 md:p-8" : ""}`}>
          {isExpanded && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-gray-800/50 z-20"
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(false)
              }}
            >
              <X className="h-5 w-5" />
            </Button>
          )}

          <motion.div layout className="flex flex-col h-full">
            {!isExpanded ? (
              <>
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-full bg-gradient-to-br ${persona.color} mr-3`}>{persona.icon}</div>
                  <div className="text-sm text-gray-400">{persona.universe} Universe</div>
                </div>

                <h3 className="text-xl font-bold mb-2">{persona.name}</h3>

                <p className="text-gray-300 text-sm mb-4">{persona.description}</p>

                <div className="mt-auto">
                  <Button
                    variant="ghost"
                    className="text-xs text-gray-400 hover:text-white p-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsExpanded(true)
                    }}
                  >
                    View Backstory →
                  </Button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-full bg-gradient-to-br ${persona.color} mr-3`}>{persona.icon}</div>
                  <div className="text-sm text-gray-400">{persona.universe} Universe</div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold">{persona.name}</h2>

                <p className="text-gray-300">{persona.description}</p>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-200">Backstory</h3>
                  <p className="text-gray-300 leading-relaxed">{persona.backstory}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
