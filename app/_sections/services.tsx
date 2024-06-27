import { expertise, teamdata } from '@/assets/data/dummydata'

import { Card } from '../_components/common/card'
import { Title, TitleSm } from '../_components/common/title'

export const Services = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" />
            <br />
            <Title
              title="The last digital agency you'll ever need!"
              className="title-bg"
            />
          </div>
          <div className="grid-2 py">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
