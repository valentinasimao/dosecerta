import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/buscar')({
  component: BuscarPage,
})

interface PriceResult {
  title: string
  price: string
  price_raw: number
  store: string
  link: string
  thumbnail: string | null
  delivery: string | null
}

function BuscarPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<PriceResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError('')
    setSearched(false)

    try {
      const res = await fetch(`/.netlify/functions/prices?q=${encodeURIComponent(query)}`)
      const data = await res.json()

      if (!res.ok) {
        setError('Erro ao buscar precos. Tente novamente.')
        setResults([])
      } else {
        setResults(data.results || [])
        setSearched(true)
      }
    } catch {
      setError('Erro de conexao. Tente novamente.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const sorted = [...results].sort((a, b) => (a.price_raw || 0) - (b.price_raw || 0))
  const cheapest = sorted[0]

  return (
    <div className="buscar-page">
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">Dose<span>Certa</span></a>
        <ul className="nav-links">
          <li><a href="/#funcoes">Funcoes</a></li>
          <li><a href="/#como">Como funciona</a></li>
          <li><a href="/#alertas">Alertas</a></li>
        </ul>
        <a href="/#cta" className="nav-cta">Criar conta gratis &rarr;</a>
      </nav>

      <div className="buscar-container">
        <div className="buscar-header">
          <div className="section-label">Comparador de precos</div>
          <h1 className="buscar-title">
            Encontre o menor preco<br />do seu <em>remedio.</em>
          </h1>
          <p className="buscar-sub">
            Digite o nome do remedio e veja os precos atuais em farmacias online com entrega.
          </p>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} className="buscar-form">
          <div className="buscar-input-row">
            <input
              type="text"
              className="buscar-input"
              placeholder="Ex: Omeprazol 20mg, Atenolol 25mg..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Buscando...' : 'Buscar precos'}
            </button>
          </div>
        </form>

        {/* Quick suggestions */}
        {!searched && !loading && (
          <div className="buscar-suggestions">
            <p className="suggestions-label">Buscas frequentes:</p>
            <div className="suggestions-row">
              {['Omeprazol 20mg', 'Atenolol 25mg', 'Metformina 850mg', 'Losartana 50mg', 'Sinvastatina 20mg'].map((s) => (
                <button
                  key={s}
                  className="suggestion-chip"
                  onClick={() => { setQuery(s) }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="buscar-error">{error}</div>
        )}

        {/* Loading */}
        {loading && (
          <div className="buscar-loading">
            <div className="loading-spinner" />
            <p>Buscando precos em farmacias...</p>
          </div>
        )}

        {/* Results */}
        {searched && !loading && (
          <div className="buscar-results">
            {results.length === 0 ? (
              <div className="buscar-empty">
                <p>Nenhum resultado encontrado para <strong>{query}</strong>.</p>
                <p>Tente um nome diferente ou mais especifico.</p>
              </div>
            ) : (
              <>
                <div className="results-header">
                  <span className="results-count">{results.length} resultados para <strong>{query}</strong></span>
                  <span className="results-sorted">Ordenado por menor preco</span>
                </div>

                <div className="results-list">
                  {sorted.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`result-card${i === 0 ? ' result-best' : ''}`}
                    >
                      {i === 0 && (
                        <div className="best-badge">🏅 Menor preco</div>
                      )}
                      <div className="result-left">
                        {item.thumbnail ? (
                          <img src={item.thumbnail} alt={item.title} className="result-thumb" />
                        ) : (
                          <div className="result-thumb-placeholder">💊</div>
                        )}
                        <div className="result-info">
                          <div className="result-title">{item.title}</div>
                          <div className="result-store">{item.store}</div>
                          {item.delivery && (
                            <div className="result-delivery">🚚 {item.delivery}</div>
                          )}
                        </div>
                      </div>
                      <div className="result-right">
                        <div className={`result-price${i === 0 ? ' result-price-best' : ''}`}>
                          {item.price}
                        </div>
                        <div className="result-cta">Ver oferta &rarr;</div>
                      </div>
                    </a>
                  ))}
                </div>

                {cheapest && (
                  <div className="savings-tip">
                    💡 Comprando na <strong>{cheapest.store}</strong> por <strong>{cheapest.price}</strong> voce paga o menor preco encontrado agora.
                  </div>
                )}

                <p className="results-disclaimer">
                  * Precos consultados em tempo real via Google Shopping. Podem variar. Sempre confirme no site da farmacia antes de comprar.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
