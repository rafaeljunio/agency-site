'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu4Line } from 'react-icons/ri'

import { TitleLogo } from './title'

export const Header = () => {
  const [activeLink, setActiveLink] = useState('/')
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo
                className={'logomin'}
                caption={'7'}
                title={'creative'}
              />
            </Link>
          </div>
          <nav
            className={open ? 'openMenu' : 'closeMenu'}
            onClick={() => setOpen(null)}
          >
            <Link
              className={activeLink === '/' ? 'activeLink' : 'none'}
              href="/"
            >
              Home
            </Link>
            <Link
              className={activeLink === '/agency' ? 'activeLink' : 'none'}
              href="/agency"
            >
              Agency
            </Link>
            <Link
              className={activeLink === '/team' ? 'activeLink' : 'none'}
              href="/team"
            >
              Team
            </Link>
            <Link
              className={activeLink === '/services' ? 'activeLink' : 'none'}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={activeLink === '/showcase' ? 'activeLink' : 'none'}
              href="/showcase"
            >
              Showcase
            </Link>
            <Link
              className={activeLink === '/blogs' ? 'activeLink' : 'none'}
              href="/blogs"
            >
              Blog
            </Link>
            <Link
              className={activeLink === '/contact' ? 'activeLink' : 'none'}
              href="/contact"
            >
              Contact
            </Link>
            <button className="button-primary">book a consultation</button>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  )
}
