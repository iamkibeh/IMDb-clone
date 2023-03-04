import Navbar from './Navbar'
import Providers from './Providers'

const Layout = ({ children }) => {
  return (
    <>
      <Providers>
        <Navbar />
        {children}
      </Providers>
    </>
  )
}

export default Layout
