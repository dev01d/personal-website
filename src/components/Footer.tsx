import dynamic from 'next/dynamic'
const Social = dynamic(() => import('@/components/Social'))

function Footer() {
  return (
    <footer className="my-4">
      <Social />
    </footer>
  )
}

export default Footer
