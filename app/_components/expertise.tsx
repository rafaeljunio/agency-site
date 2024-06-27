import { expertise, home } from '@/assets/data/dummydata'

import { Title } from './common/title'
import { Card } from './common/card'

export const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="Our expertise" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            assumenda doloremque non nostrum distinctio vel quidem tempora, hic
            doloribus. Doloremque, eos ex impedit ipsa natus dolor aspernatur
            facere provident fugit!
          </p>
        </div>

        <div className="hero-content grid-4">
          {expertise.map((item, i) => (
            <div className="box" key={i}>
              <Card data={item} key={item.i} caption='learn more'/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
