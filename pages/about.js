import Header from '../src/components/Header'
import dynamic from 'next/dynamic'
const AboutJson = dynamic(() => import('../src/components/AboutJson'))
const Social = dynamic(() => import('../src/components/Social'))

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col min-w-xl md:min-w-l max-w-xl mx-auto justify-center min-h-screen py-0">
          <div className="mt-14">
            <AboutJson />
          </div>
          <Social />
        </div>
      </main>
    </>
  )
}
