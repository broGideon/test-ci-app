import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
})

describe('App', () => {
  it('renders app title', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Vite + React' })).toBeInTheDocument()
  })

  it('increments counter on click', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
