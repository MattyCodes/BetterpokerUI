import type { Metadata } from 'next'
import '@/styles/globals.scss'
import ApplicationWrapper from '@/components/ApplicationWrapper'

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
      <ApplicationWrapper>
        { children }
      </ApplicationWrapper>
    </html>
  )
}
