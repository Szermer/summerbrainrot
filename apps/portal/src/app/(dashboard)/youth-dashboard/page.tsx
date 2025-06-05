import { Header } from "@/components/layout/header"
import { WelcomeCard } from "./components/welcome-card"
import { ProgressCard } from "./components/progress-card"
import { QuickActions } from "./components/quick-actions"
import { AchievementBadges } from "./components/achievement-badges"
import { UpcomingActivities } from "./components/upcoming-activities"
import { TeamChat } from "./components/team-chat"
import { DailyChallenge } from "./components/daily-challenge"
import { LeaderboardCard } from "./components/leaderboard-card"

export default async function YouthDashboardPage() {
  return (
    <>
      <Header />

      <div className="space-y-6 p-4 md:p-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Your Summer Journey 🚀
          </h1>
          <p className="text-muted-foreground mt-2">
            Ready to create something amazing today?
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome & Daily Challenge */}
          <div className="space-y-6 lg:col-span-2">
            <WelcomeCard />
            <DailyChallenge />
          </div>

          {/* Progress Overview */}
          <div className="space-y-6">
            <ProgressCard />
            <LeaderboardCard />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Secondary Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Achievement Badges */}
          <AchievementBadges />

          {/* Upcoming Activities */}
          <UpcomingActivities />

          {/* Team Chat */}
          <TeamChat />
        </div>
      </div>
    </>
  )
}