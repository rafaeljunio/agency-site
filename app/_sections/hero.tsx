import { home } from '@/assets/data/dummydata'

import { Banner } from '../_components/banner'
import { BlogCard } from '../_components/blog-card'
import Brand from '../_components/brand'
import { Title, TitleLogo, TitleSm } from '../_components/common/title'
import { Expertise } from '../_components/expertise'
import { ShowCase } from '../_components/show-case'
import { Testimonial } from '../_components/testimonial'

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo className={'logobg'} caption={'7'} title={'creative'} />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" />
          </div>
        </div>
      </section>

      <div className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you'll ever need" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              assumenda doloremque non nostrum distinctio vel quidem tempora,
              hic doloribus. Doloremque, eos ex impedit ipsa natus dolor
              aspernatur facere provident fugit!
            </p>
          </div>

          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>

      <BlogCard />
    </>
  )
}
