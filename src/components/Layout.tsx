import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container flex mx-auto max-w-5xl items-center justify-center min-h-screen px-4">
        <main className="flex-1">
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Layout
