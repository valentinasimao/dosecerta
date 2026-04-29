import type { Context } from '@netlify/functions'

export default async function handler(req: Request, context: Context) {
  // Only allow GET
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const url = new URL(req.url)
  const query = url.searchParams.get('q')

  if (!query) {
    return new Response(JSON.stringify({ error: 'Missing query parameter ?q=' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const apiKey = process.env.SCALESERP_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Search Google Shopping for the medication + comprar brasil
  const searchQuery = `${query} comprar farmacia`
  const scaleSerpUrl = new URL('https://api.scaleserp.com/search')
  scaleSerpUrl.searchParams.set('api_key', apiKey)
  scaleSerpUrl.searchParams.set('q', searchQuery)
  scaleSerpUrl.searchParams.set('search_type', 'shopping')
  scaleSerpUrl.searchParams.set('gl', 'br')
  scaleSerpUrl.searchParams.set('hl', 'pt')
  scaleSerpUrl.searchParams.set('google_domain', 'google.com.br')
  scaleSerpUrl.searchParams.set('num', '10')

  try {
    const response = await fetch(scaleSerpUrl.toString())
    const data = await response.json()

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'ScaleSerp error', detail: data }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Parse shopping results into clean format
    const results = (data.shopping_results || []).map((item: any) => ({
      title: item.title,
      price: item.price,
      price_raw: item.price_raw,
      store: item.source,
      link: item.link,
      thumbnail: item.thumbnail,
      delivery: item.delivery || null,
    }))

    return new Response(JSON.stringify({ results, query }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // cache 1h to save API calls
      },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch prices' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
