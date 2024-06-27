import React from 'react'

import { BlogCard } from '../_components/blog-card'
import { Title, TitleSm } from '../_components/common/title'

export const Blog = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="BLOG" />
            <br />
            <Title
              title="A team of smart & passinate creatives"
              className="title-bg"
            />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}
