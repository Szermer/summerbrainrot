"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Lock } from "lucide-react"

interface SkillProgress {
  name: string
  progress: number
  level: number
  locked: boolean
}

export function ProgressCard() {
  const skills: SkillProgress[] = [
    { name: "Web Development", progress: 75, level: 3, locked: false },
    { name: "Design Thinking", progress: 60, level: 2, locked: false },
    { name: "Business Basics", progress: 45, level: 2, locked: false },
    { name: "Team Leadership", progress: 30, level: 1, locked: false },
    { name: "Advanced Coding", progress: 0, level: 0, locked: true },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Your Skills 🎯
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {skill.locked ? (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  ) : skill.progress === 100 ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className={`text-sm font-medium ${skill.locked ? 'text-muted-foreground' : ''}`}>
                    {skill.name}
                  </span>
                </div>
                {!skill.locked && (
                  <span className="text-xs text-muted-foreground">
                    Level {skill.level}
                  </span>
                )}
              </div>
              <Progress 
                value={skill.locked ? 0 : skill.progress} 
                className={`h-2 ${skill.locked ? 'opacity-50' : ''}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}