import Header from '../src/components/Header'
import Image from 'next/image'
import Social from '../src/components/Social'

export default function Home() {
  // ? Reference build enviroment variables to deliver corect assets
  const BUILD_ENV = process.env.NEXT_PUBLIC_BUILD_ENV
  if (BUILD_ENV == 'static') {
    var logoID = `c_scale,w_600/logo.svg`
  } else {
    var logoID = '/assets/logo.svg'
  }
  console.log(BUILD_ENV)
  console.log(logoID)
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
