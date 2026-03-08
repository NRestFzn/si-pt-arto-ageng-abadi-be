import { CorsOptions } from 'cors'

export const allowedOrigins: string[] = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://si-pt-arto-ageng-abadi.vercel.app',
]

const allowedHeaders: string[] = [
  'Content-Type',
  'Authorization',
  'x-active-role',
  'x-lang',
  'accept-language',
  'x-request-id',
]

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders,
  optionsSuccessStatus: 200,
}
