import { createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        name: 'description',
        content:
          'O app que calcula quando seus remedios vao acabar, avisa antes e encontra a melhor opcao de compra com entrega.',
      },
      { title: 'DoseCerta - Nunca fique sem seus remedios' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700&family=DM+Sans:wght@300;400;500&display=swap',
      },
    ],
  }),
  component: () => (
    <html lang="pt-BR">
      <head />
      <body>
        <Outlet />
      </body>
    </html>
  ),
})
