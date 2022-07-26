import React, { useState } from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(props) {
  const [isOpen, setOpen] = useState(false)
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }
  const closeSideBar = () => {
    setOpen(false)
  }
  return (
    <Menu
      styles={styles}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      right
      customCrossIcon={
        <FontAwesomeIcon icon={faXmark} color={'#b8b7ad'} fixedWidth />
      }
    >
      <li id="page-wrap">
        <Link href="/">
          <a className="menu-item" onClick={closeSideBar}>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="menu-item" onClick={closeSideBar}>
            About
          </a>
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
    borderRadius: '20%',
  },
  bmCrossButton: {
    height: '56px',
    width: '285px',
  },
  bmCross: {
    height: '48px',
    width: '48px',
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
