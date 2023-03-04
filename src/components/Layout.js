import AppBar from './AppBar'
import Navbar from './Navbar'
import Providers from './Providers'

const Layout = ({ children }) => {
  return (
    <>
      <Providers>
        <Navbar />
        <AppBar />
        {children}
      </Providers>
    </>
  )
}

export default Layout
