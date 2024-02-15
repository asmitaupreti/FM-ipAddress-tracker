import { render, screen } from '../utils/test-utils'
import { describe, expect, test } from 'vitest'
import App from '../App'

describe('Vitest working', () => {
  test('vitest is loading properly', () => {
    const app = render(<App />)
    const title = app.getByText(/ip address tracker/i)
    expect(title).toBeInTheDocument()
  })

  test('api successfull senario', async () => {
    render(<App />)
    const ip = await screen.findByText('212.218.13.67')
    expect(ip).toBeInTheDocument()
  })
})
