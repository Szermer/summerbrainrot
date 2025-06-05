"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Zap, Trophy, Target } from "lucide-react"

export function WelcomeCard() {
  const userName = "Alex" // This would come from auth context
  const currentLevel = 7
  const currentXP = 420
  const nextLevelXP = 500
  const progressPercentage = (currentXP / nextLevelXP) * 100

  return (
    <Card className="border-2 border-orange-200 dark:border-orange-900">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-4 border-orange-400">
              <AvatarImage src="/avatars/avatar-1.png" alt={userName} />
              <AvatarFallback>{userName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                Hey {userName}! <span className="text-3xl">👋</span>
              </h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                Level {currentLevel} Creator
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
              <Zap className="h-5 w-5" />
              <span className="text-2xl font-bold">{currentXP}</span>
              <span className="text-sm text-muted-foreground">/ {nextLevelXP} XP</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Progress to Level {currentLevel + 1}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950 dark:to-pink-950">
              <Trophy className="h-8 w-8 mx-auto mb-1 text-orange-600" />
              <p className="text-sm font-medium">12 Badges</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <Target className="h-8 w-8 mx-auto mb-1 text-blue-600" />
              <p className="text-sm font-medium">5 Projects</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <Sparkles className="h-8 w-8 mx-auto mb-1 text-green-600" />
              <p className="text-sm font-medium">3 Day Streak</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}