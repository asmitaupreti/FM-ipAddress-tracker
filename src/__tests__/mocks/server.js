import { setupServer } from 'msw/node'
import { handlers } from './handlers'

//This configures a Service Worker with the given request handlers
// on printing handlers, I see the sampleUrl printed
export const server = setupServer(...handlers)
