import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WelcomeCard } from '@/app/(dashboard)/youth-dashboard/components/welcome-card'

describe('WelcomeCard', () => {
  it('renders user greeting', () => {
    render(<WelcomeCard />)
    expect(screen.getByText(/Hey Alex!/)).toBeInTheDocument()
  })

  it('displays current level', () => {
    render(<WelcomeCard />)
    expect(screen.getByText(/Level 7 Creator/)).toBeInTheDocument()
  })

  it('shows XP progress', () => {
    render(<WelcomeCard />)
    expect(screen.getByText('420')).toBeInTheDocument()
    expect(screen.getByText('/ 500 XP')).toBeInTheDocument()
  })

  it('displays achievement stats', () => {
    render(<WelcomeCard />)
    expect(screen.getByText('12 Badges')).toBeInTheDocument()
    expect(screen.getByText('5 Projects')).toBeInTheDocument()
    expect(screen.getByText('3 Day Streak')).toBeInTheDocument()
  })

  it('renders progress bar', () => {
    render(<WelcomeCard />)
    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('aria-valuenow', '84')
  })
})