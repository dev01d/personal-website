import Menu from 'react-burger-menu/lib/menus/slide'
import Link from 'next/link'

export default function Sidebar(props) {
  return (
    <Menu styles={styles} right>
      <li id="page-wrap">
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

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
    float: 'right',
  },
  bmBurgerBars: {
    background: '#000',
    borderRadius: '15%',
  },
  bmCrossButton: {
    height: '36px',
    width: '36px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'rgb(43, 43, 43)',
    padding: '2.5em 1.5em 0',
    fontSize: '3em',
    textAlign: 'center',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    marginBottom: '30px',
    color: '#d1d1d1',
    transition: 'color 0.1s',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
  focus: {
    outline: 'none',
  },
}
