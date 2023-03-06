import AppBar from '@/components/AppBar'
import Navbar from '@/components/Navbar'
import Providers from '@/app/Providers'
import '@/styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar />
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'IMDb clone',
  description: 'This is IMDb clone using nextJS',
}
