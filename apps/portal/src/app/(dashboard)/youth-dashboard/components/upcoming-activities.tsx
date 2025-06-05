"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Video } from "lucide-react"

interface Activity {
  id: string
  title: string
  type: "workshop" | "challenge" | "meeting" | "social"
  time: string
  duration: string
  participants?: number
  icon: any
}

export function UpcomingActivities() {
  const activities: Activity[] = [
    {
      id: "1",
      title: "Web Design Workshop",
      type: "workshop",
      time: "Today, 2:00 PM",
      duration: "1 hour",
      participants: 12,
      icon: Video,
    },
    {
      id: "2",
      title: "Code Challenge: Build a Game",
      type: "challenge",
      time: "Tomorrow, 10:00 AM",
      duration: "2 hours",
      participants: 25,
      icon: Calendar,
    },
    {
      id: "3",
      title: "Team Standup",
      type: "meeting",
      time: "Tomorrow, 3:00 PM",
      duration: "30 mins",
      participants: 5,
      icon: Users,
    },
    {
      id: "4",
      title: "Pizza & Project Showcase",
      type: "social",
      time: "Friday, 5:00 PM",
      duration: "2 hours",
      participants: 40,
      icon: Calendar,
    },
  ]

  const getTypeColor = (type: Activity["type"]) => {
    switch (type) {
      case "workshop":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "challenge":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "meeting":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "social":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Upcoming Activities 📅
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="mt-1">
                <activity.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-medium leading-tight">
                    {activity.title}
                  </h4>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${getTypeColor(activity.type)}`}
                  >
                    {activity.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </span>
                  <span>{activity.duration}</span>
                  {activity.participants && (
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {activity.participants}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}