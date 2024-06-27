import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FiHeadphones, FiHelpCircle } from 'react-icons/fi'
import { IoLocateOutline } from 'react-icons/io5'

import { Title, TitleSm } from '../_components/common/title'

export const Contact = () => {
  return (
    <>
      <section className="bg-top contact">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" />
            <br />
            <Title
              title="The last digital agency you'll ever need!"
              className="title-bg"
            />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-details">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>

                <div className="box">
                  <IoLocateOutline size={30} className="icons" />
                  <h3>New York</h3>
                  <span>
                    990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022
                  </span>
                </div>

                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@dream-theme.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
              </ul>
            </div>

            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p>
                Got questions? Ideas? Fill out the form below to get our
                proposal.
              </p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input />
                  </div>

                  <div className="inputs">
                    <span>Email</span>
                    <input />
                  </div>

                  <div className="inputs">
                    <span>Your buget</span>
                    <input />
                  </div>

                  <div className="inputs">
                    <span>Timeframe</span>
                    <input />
                  </div>
                </div>
                <div className="inputs">
                  <span>Tell us a bit about your Project*</span>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
