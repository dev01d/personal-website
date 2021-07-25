import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

export default function Sidebar(props) {
  return (
    <Menu>
      <li>
        <Link href="/">
          <a className="menu-item">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="menu-item">About</a>
        </Link>
      </li>
    </Menu>
  )
}
