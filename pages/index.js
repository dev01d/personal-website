import Image from 'next/image'

export default function Home() {
  var logoID = '/assets/logo.svg'
  if (process.env.NEXT_PUBLIC_BUILD_ENV == 'static') {
    var logoID = `c_scale,w_600/logo.svg`
  }
  return (
    <main>
      <div className="max-w-lg mx-auto justify-center pt-28 mt-0">
        <Image
          src={logoID}
          alt="logo depicting the letters j and b"
          width={600}
          height={600}
        />
      </div>
    </main>
  )
}
