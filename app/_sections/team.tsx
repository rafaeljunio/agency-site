import React from 'react'

import { teamdata } from '@/assets/data/dummydata'

import { Card } from '../_components/common/card'
import { Title, TitleSm } from '../_components/common/title'

export const Team = () => {
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
          <div className="grid-4 py">
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
