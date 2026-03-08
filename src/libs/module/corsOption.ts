import { CorsOptions } from 'cors'

export const allowedOrigins: string[] = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://si-pt-arto-ageng-abadi.vercel.app',
]

const normalizedAllowedOrigins = allowedOrigins.map((item) =>
  item.toLowerCase().replace(/\/$/, '')
)

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
    const normalizedOrigin = origin?.toLowerCase().replace(/\/$/, '')
    const isAllowed =
      !normalizedOrigin || normalizedAllowedOrigins.includes(normalizedOrigin)

    callback(null, isAllowed)
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders,
  optionsSuccessStatus: 200,
}
