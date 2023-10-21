import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { EXTERNAL_LINKS } from '@/constants/index.ts'

export const metadata: Metadata = {
  title: 'Betterpoker',
  description: 'The best poker in town!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        { children }

        <footer>
          <span>
            Color Scheme: <a href={ EXTERNAL_LINKS.DRACULA } target="_blank">Dracula</a>
          </span>
        </footer>
      </body>
    </html>
  )
}
