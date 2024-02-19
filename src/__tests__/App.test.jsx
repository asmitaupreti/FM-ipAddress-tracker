import { render, screen } from '../utils/test-utils'
import { describe, expect, test } from 'vitest'
import { HttpResponse, http } from 'msw'
import { server } from './mocks/server'
import App from '../App'

describe('Data on load', () => {
  test('vitest is loading properly', () => {
    const app = render(<App />)
    const title = app.getByText(/ip address tracker/i)
    expect(title).toBeInTheDocument()
  })

  test('api successfull scenario on load', async () => {
    render(<App />)
    const ip = await screen.findByText('212.218.13.67')
    expect(ip).toBeInTheDocument()
  })

  test('api error scenario on load', async () => {
    render(<App />)
    server.use(
      http.get('/.netlify/functions/api/', () => {
        return new HttpResponse(null, { status: 401 })
      })
    )
    expect(await screen.queryByText('212.218.13.67')).not.toBeInTheDocument()
  })
})
