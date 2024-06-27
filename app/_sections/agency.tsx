import { Banner } from '../_components/banner'
import Brand from '../_components/brand'
import { Title, TitleSm } from '../_components/common/title'
import { Testimonial } from '../_components/testimonial'

export const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" />
            <br />
            <Title
              title="The last digital agency you'll ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital" />
              <p className="desc-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                at soluta nostrum atque nemo, unde necessitatibus eveniet. Illo
                molestiae deleniti et a, nemo minima ab? Omnis fugiat numquam
                mollitia laudantium.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>

                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>

                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>

            <div className="left w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="img"
                className="round"
                width={'100%'}
              />
            </div>
          </div>

          <div className="content flex1">
            <div className="left w-40">
              <img
                src="/images/s2.jpg"
                alt="img"
                className="round"
                width={'100%'}
              />
            </div>

            <div className="left w-60 ml py">
              <TitleSm title="Turning your business ideas into smart digital" />
              <br />
              <p className="misson-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                at soluta nostrum atque nemo, unde necessitatibus eveniet. Illo
                molestiae deleniti et a, nemo minima ab? Omnis fugiat numquam
                mollitia laudantium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
    </>
  )
}
