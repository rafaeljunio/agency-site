import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'

import { showcase } from '@/assets/data/dummydata'

import { Card } from './common/card'
import { Title } from './common/title'

export const ShowCase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
          <div className="hero-content grid-3 py">
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className="card links">
            <Link href="/">
              VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
