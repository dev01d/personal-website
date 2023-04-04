import Image from 'next/image'

export default function Home() {
  var logoID = '/assets/logo.svg'
  return (
    <main>
      <div className="max-w-lg mx-auto mt-0">
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
