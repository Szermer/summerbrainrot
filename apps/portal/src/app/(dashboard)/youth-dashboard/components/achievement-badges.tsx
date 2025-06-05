"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  Rocket, 
  Heart,
  Award,
  Flame
} from "lucide-react"

interface Achievement {
  id: string
  name: string
  description: string
  icon: any
  earned: boolean
  earnedDate?: string
  color: string
}

export function AchievementBadges() {
  const achievements: Achievement[] = [
    {
      id: "first-project",
      name: "First Project",
      description: "Complete your first project",
      icon: Rocket,
      earned: true,
      earnedDate: "2024-06-01",
      color: "text-orange-500",
    },
    {
      id: "team-player",
      name: "Team Player",
      description: "Join a team project",
      icon: Heart,
      earned: true,
      earnedDate: "2024-06-03",
      color: "text-pink-500",
    },
    {
      id: "week-streak",
      name: "7 Day Streak",
      description: "Log in 7 days in a row",
      icon: Flame,
      earned: true,
      earnedDate: "2024-06-05",
      color: "text-red-500",
    },
    {
      id: "code-master",
      name: "Code Master",
      description: "Complete 10 coding challenges",
      icon: Zap,
      earned: false,
      color: "text-yellow-500",
    },
    {
      id: "design-star",
      name: "Design Star",
      description: "Create 5 amazing designs",
      icon: Star,
      earned: false,
      color: "text-purple-500",
    },
    {
      id: "mentor",
      name: "Mentor",
      description: "Help 3 other participants",
      icon: Award,
      earned: false,
      color: "text-blue-500",
    },
  ]

  const earnedCount = achievements.filter(a => a.earned).length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            Achievements 🏆
          </span>
          <Badge variant="secondary">{earnedCount}/{achievements.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                achievement.earned
                  ? "border-orange-200 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950 dark:to-pink-950"
                  : "border-muted bg-muted/30 opacity-60"
              }`}
            >
              <achievement.icon
                className={`h-8 w-8 mb-1 ${
                  achievement.earned ? achievement.color : "text-muted-foreground"
                }`}
              />
              <span className="text-xs font-medium text-center">
                {achievement.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}