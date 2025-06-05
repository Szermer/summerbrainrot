# ADR-0015: Youth Dashboard with Gamification

## Status
Accepted

## Context
The Summer Brain Rot program targets participants aged 12-17, requiring an age-appropriate interface that maintains engagement while teaching professional skills. The existing admin-style dashboards from the shadcn template are too complex and business-oriented for young users.

Research shows that gamification elements significantly improve engagement and learning retention in educational platforms for this age group. We need a dashboard that feels more like a game or social platform while still delivering serious educational content.

## Decision
We will implement a dedicated Youth Dashboard with gamification elements as the primary interface for program participants. This dashboard will:

1. **Use gamification mechanics** including XP, levels, badges, and leaderboards
2. **Provide visual progress tracking** with skill trees and achievement systems
3. **Simplify navigation** with large, colorful quick action buttons
4. **Include social features** like team chat and activity feeds
5. **Feature daily challenges** to maintain engagement
6. **Display information visually** using progress bars, charts, and icons

### Key Components:
- **WelcomeCard**: Personalized greeting with level, XP, and stats
- **DailyChallenge**: Rotating challenges with step-by-step guidance
- **ProgressCard**: Visual skill progression with unlockable content
- **QuickActions**: Grid of colorful action buttons
- **AchievementBadges**: Visual badge collection system
- **TeamChat**: Safe, moderated messaging interface
- **LeaderboardCard**: Weekly rankings with trend indicators
- **UpcomingActivities**: Event calendar with activity types

## Consequences

### Positive
- **Increased Engagement**: Gamification elements motivate continued participation
- **Age-Appropriate Design**: Interface matches expectations of target demographic
- **Clear Progress Visualization**: Users can easily see their advancement
- **Social Learning**: Peer interaction enhances learning experience
- **Reduced Complexity**: Simplified navigation reduces cognitive load
- **Mobile-First**: Responsive design works well on devices youth commonly use

### Negative
- **Dual Maintenance**: Must maintain both youth and standard dashboards
- **Feature Parity**: Some advanced features may need youth-friendly alternatives
- **Moderation Requirements**: Social features require content moderation
- **Gaming Addiction Concerns**: Need to balance engagement with healthy usage
- **Parent/Guardian Visibility**: May need separate parent dashboard for oversight

## Technical Implementation

### Architecture
```
apps/portal/src/app/(dashboard)/youth-dashboard/
├── page.tsx                    # Main dashboard page
└── components/
    ├── welcome-card.tsx        # User greeting and stats
    ├── progress-card.tsx       # Skill progression
    ├── quick-actions.tsx       # Action grid
    ├── achievement-badges.tsx  # Badge collection
    ├── upcoming-activities.tsx # Event calendar
    ├── team-chat.tsx          # Messaging interface
    ├── daily-challenge.tsx    # Challenge card
    └── leaderboard-card.tsx   # Rankings display
```

### Data Model Extensions
```typescript
interface UserProfile {
  // Existing fields...
  
  // Gamification fields
  level: number
  xp: number
  badges: Badge[]
  streak: number
  skills: SkillProgress[]
  completedChallenges: string[]
}

interface Badge {
  id: string
  name: string
  description: string
  earnedDate: Date
  icon: string
}

interface SkillProgress {
  skillId: string
  name: string
  level: number
  progress: number
  unlocked: boolean
}
```

### Design Patterns
- **Bright Colors**: Orange, pink, blue, purple gradients
- **Large Touch Targets**: Minimum 44px for interactive elements
- **Visual Feedback**: Hover states, transitions, and animations
- **Clear Typography**: Larger fonts with good contrast
- **Emoji Usage**: Strategic use for visual interest
- **Progress Indicators**: Bars, circles, and percentages

## Future Considerations

1. **Parental Controls**: Dashboard for parents to monitor progress
2. **Mentor Integration**: Special features for mentor-student interaction
3. **Offline Mode**: Cache progress for intermittent connectivity
4. **Achievements API**: Standardized achievement system across platform
5. **Analytics**: Track engagement metrics while respecting privacy
6. **Accessibility**: Ensure WCAG compliance for inclusive design

## Related Decisions
- [ADR-0001: Monorepo Structure](./0001-monorepo-structure.md) - Youth dashboard within portal app
- [ADR-0004: Template Pattern Restoration](./0004-template-pattern-restoration.md) - Maintains template structure
- [ADR-0008: Citrus Design System](./0008-citrus-design-system.md) - Extends citrus theme with youth-friendly colors
- [ADR-0009: Firebase Authentication System](./0009-firebase-authentication-system.md) - Uses existing auth for age verification

## References
- [Gamification in Education Research](https://www.researchgate.net/publication/gamification-education)
- [Youth UX Design Patterns](https://www.nngroup.com/articles/usability-of-websites-for-teenagers/)
- [COPPA Compliance Guidelines](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)