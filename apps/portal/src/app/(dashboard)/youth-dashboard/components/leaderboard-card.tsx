"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, TrendingUp } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  user: {
    name: string
    avatar: string
    level: number
  }
  xp: number
  trend: "up" | "down" | "same"
  isCurrentUser?: boolean
}

export function LeaderboardCard() {
  const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      user: { name: "Emma Wilson", avatar: "/avatars/avatar-4.png", level: 12 },
      xp: 2450,
      trend: "same",
    },
    {
      rank: 2,
      user: { name: "James Park", avatar: "/avatars/avatar-5.png", level: 11 },
      xp: 2320,
      trend: "up",
    },
    {
      rank: 3,
      user: { name: "Sofia Garcia", avatar: "/avatars/avatar-6.png", level: 10 },
      xp: 2180,
      trend: "up",
    },
    {
      rank: 7,
      user: { name: "Alex Johnson", avatar: "/avatars/avatar-1.png", level: 7 },
      xp: 1420,
      trend: "up",
      isCurrentUser: true,
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-orange-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            Leaderboard 🏅
          </span>
          <Badge variant="secondary" className="text-xs">
            This Week
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                entry.isCurrentUser
                  ? "bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950 dark:to-pink-950 border border-orange-200 dark:border-orange-800"
                  : ""
              }`}
            >
              <div className="w-8 flex justify-center">
                {getRankIcon(entry.rank)}
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
                <AvatarFallback>{entry.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{entry.user.name}</span>
                  {entry.isCurrentUser && (
                    <Badge variant="secondary" className="text-xs">
                      You
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  Level {entry.user.level}
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">{entry.xp.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground">XP</span>
                </div>
                {entry.trend === "up" && (
                  <TrendingUp className="h-3 w-3 text-green-500 ml-auto" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}