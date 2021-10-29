import Header from '../src/components/Header'
import Image from 'next/image'
import Social from '../src/components/Social'

export default function Home() {
  var logoID = '/assets/logo.svg'
  if (process.env.NEXT_PUBLIC_BUILD_ENV == 'static') {
    var logoID = `c_scale,w_600/logo.svg`
  }
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col max-w-lg mx-auto justify-center min-h-screen py-0 mt-0">
          <div>
            <Image
              src={logoID}
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
