import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserForm from '../component/userForm'

describe('Random Component', () => {
  it('renders correctly', () => {
    render(<UserForm />)
    screen.debug() // Logs the DOM structure
    const element = screen.getByText('Random Component')
    expect(element).toBeInTheDocument()
  })
})