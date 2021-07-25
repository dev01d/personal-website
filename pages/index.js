import Header from '../src/components/Header'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import Social from '../src/components/Social'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div
          id="page-wrap"
          className="flex flex-col max-w-lg mx-auto justify-center min-h-screen py-0 mt-0"
        >
          <div>
            <Image
              src={logo}
              alt="logo depicting the letters j and b"
              width={600}
              height={600}
            />
          </div>
          <Social />
        </div>
      </main>
    </>
  )
}
