import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders the application', () => {
    render(<App />)

    expect(document.body).toBeInTheDocument()
  })
})