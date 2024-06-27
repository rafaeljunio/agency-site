import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'

import { TitleLogo } from './title'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid-4">
          <div className="logo">
            <TitleLogo className={'logobg'} caption={'7'} title={'creative'} />
            <br />
            <span>Questions? Reach us</span>
            <span>Monday - Friday from 9 am to 6 pm</span>
            <br />
            <br />
            <h3>+1 001 234 5678</h3>
            <br />
            <button className="button-primary">Request for quote</button>
          </div>
          <ul>
            <h3>COMPANY</h3>
            <li>
              <Link href="/">About Agency</Link>
            </li>
            <li>
              <Link href="/">Our Team</Link>
            </li>
            <li>
              <Link href="/">Showcase</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Demo Design System</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <ul>
            <h3>SERVICES</h3>
            <li>
              <Link href="/">Web Design & Development</Link>
            </li>
            <li>
              <Link href="/">Branding & Creative Services</Link>
            </li>
            <li>
              <Link href="/">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/">E-commerce</Link>
            </li>
          </ul>

          <ul>
            <h3>CONNECT</h3>

            <div className="connect">
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="legal connect py">
          <div className="text">
            <span>2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="connect">
            <span>GORKCODER COMPANY</span>
            <span>&nbsp; | &nbsp;</span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
