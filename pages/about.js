import Header from '../src/components/Header'
import AboutJson from '../src/components/AboutJson'
import Social from '../src/components/Social'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col min-w-xl md:min-w-l max-w-xl mx-auto justify-center min-h-screen py-0">
          <AboutJson />
          <Social />
        </div>
      </main>
    </>
  )
}
