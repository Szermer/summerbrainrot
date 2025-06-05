"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Rocket, 
  Users, 
  BookOpen, 
  Video, 
  MessageSquare, 
  Calendar,
  Code,
  Palette
} from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: Rocket,
      label: "Start New Project",
      color: "bg-gradient-to-br from-orange-500 to-pink-500",
      onClick: () => console.log("Start project"),
    },
    {
      icon: Code,
      label: "Code Challenge",
      color: "bg-gradient-to-br from-blue-500 to-purple-500",
      onClick: () => console.log("Code challenge"),
    },
    {
      icon: Users,
      label: "Join Team",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      onClick: () => console.log("Join team"),
    },
    {
      icon: BookOpen,
      label: "Learn",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      onClick: () => console.log("Learn"),
    },
    {
      icon: Video,
      label: "Watch Tutorial",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      onClick: () => console.log("Watch tutorial"),
    },
    {
      icon: MessageSquare,
      label: "Ask for Help",
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
      onClick: () => console.log("Ask for help"),
    },
    {
      icon: Calendar,
      label: "View Schedule",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      onClick: () => console.log("View schedule"),
    },
    {
      icon: Palette,
      label: "Design Lab",
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
      onClick: () => console.log("Design lab"),
    },
  ]

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions ⚡</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            className="h-24 flex-col gap-2 hover:scale-105 transition-transform"
            onClick={action.onClick}
          >
            <div className={`p-2 rounded-lg ${action.color}`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  )
}