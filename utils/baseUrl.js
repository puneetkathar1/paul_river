const baseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'production'
    ? 'https://paul-river.vercel.app'
    : 'http://localhost:3000'

export default baseUrl
