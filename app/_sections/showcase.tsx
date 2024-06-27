import { showcase, teamdata } from '@/assets/data/dummydata'

import { Card } from '../_components/common/card'
import { Title, TitleSm } from '../_components/common/title'

export const Showcase = () => {
  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SHOWCASE" />
            <br />
            <Title
              title="A team of smart & passinate creatives"
              className="title-bg"
            />
          </div>
          <div className="grid-3 py">
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div className="py btn">
            <button className="secondary-button">View More</button>
          </div>
        </div>
      </section>
    </>
  )
}
