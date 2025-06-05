"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Trophy, 
  Clock, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Circle
} from "lucide-react"

export function DailyChallenge() {
  const challenge = {
    title: "Build a Color Palette Generator",
    description: "Create a web app that generates random color palettes. Users should be able to save their favorite combinations!",
    difficulty: "Medium",
    xpReward: 150,
    timeLimit: "3 hours",
    progress: 40,
    steps: [
      { id: 1, text: "Set up the HTML structure", completed: true },
      { id: 2, text: "Add CSS styling", completed: true },
      { id: 3, text: "Implement color generation logic", completed: false },
      { id: 4, text: "Add save functionality", completed: false },
    ],
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card className="border-2 border-purple-200 dark:border-purple-900">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              Daily Challenge 🎯
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Complete today's challenge to earn bonus XP!
            </p>
          </div>
          <Badge className={getDifficultyColor(challenge.difficulty)}>
            {challenge.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
            <p className="text-sm text-muted-foreground">
              {challenge.description}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{challenge.timeLimit}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">+{challenge.xpReward} XP</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">{challenge.progress}%</span>
            </div>
            <Progress value={challenge.progress} className="h-2 mb-3" />
            
            <div className="space-y-2">
              {challenge.steps.map((step) => (
                <div key={step.id} className="flex items-center gap-2 text-sm">
                  {step.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className={step.completed ? "line-through text-muted-foreground" : ""}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Continue Challenge
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}