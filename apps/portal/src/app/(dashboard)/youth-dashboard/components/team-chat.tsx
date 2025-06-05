"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Smile } from "lucide-react"

interface Message {
  id: string
  user: {
    name: string
    avatar: string
    role?: string
  }
  message: string
  time: string
  isOwn?: boolean
}

export function TeamChat() {
  const messages: Message[] = [
    {
      id: "1",
      user: {
        name: "Sarah Chen",
        avatar: "/avatars/avatar-2.png",
        role: "mentor",
      },
      message: "Great job on the landing page! The colors really pop 🎨",
      time: "10:30 AM",
    },
    {
      id: "2",
      user: {
        name: "Alex Johnson",
        avatar: "/avatars/avatar-1.png",
      },
      message: "Thanks! I used the color palette we discussed yesterday",
      time: "10:32 AM",
      isOwn: true,
    },
    {
      id: "3",
      user: {
        name: "Mike Rodriguez",
        avatar: "/avatars/avatar-3.png",
      },
      message: "Can someone help me with the responsive design? 🤔",
      time: "10:35 AM",
    },
    {
      id: "4",
      user: {
        name: "Sarah Chen",
        avatar: "/avatars/avatar-2.png",
        role: "mentor",
      },
      message: "Sure! Let's hop on a quick call. Check the #help channel",
      time: "10:36 AM",
    },
  ]

  return (
    <Card className="flex flex-col h-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Team Chat 💬</span>
          <Badge variant="secondary" className="text-xs">
            4 online
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3 mb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={msg.user.avatar} alt={msg.user.name} />
                <AvatarFallback>{msg.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className={`flex-1 ${msg.isOwn ? "text-right" : ""}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{msg.user.name}</span>
                  {msg.user.role && (
                    <Badge variant="secondary" className="text-xs">
                      {msg.user.role}
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <div
                  className={`inline-block p-3 rounded-lg text-sm ${
                    msg.isOwn
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            className="flex-1"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                console.log("Send message")
              }
            }}
          />
          <Button size="icon" variant="ghost">
            <Smile className="h-4 w-4" />
          </Button>
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}