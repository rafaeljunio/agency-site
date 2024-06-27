import Head from 'next/head'
import React from 'react'

import { Banner } from '@/app/_components/banner'
import { Title, TitleSm } from '@/app/_components/common/title'
import { blogdata } from '@/assets/data/dummydata'

const BlogPost = ({ params }: { params: { id: string } }) => {
  const post = blogdata.find((post) => post.id === parseInt(params.id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS" />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt="cover"
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Phasellus at magna - elit tristique lacinia." />
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sit numquam rem architecto incidunt vero tempore doloremque
                nihil asperiores ratione quia, dolores maxime dolor ab.
                Repellendus, excepturi laborum? Sapiente, velit.
              </p>
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sit numquam rem architecto incidunt vero tempore doloremque
                nihil asperiores ratione quia, dolores maxime dolor ab.
                Repellendus, excepturi laborum? Sapiente, velit.
              </p>
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sit numquam rem architecto incidunt vero tempore doloremque
                nihil asperiores ratione quia, dolores maxime dolor ab.
                Repellendus, excepturi laborum? Sapiente, velit.
              </p>
            </div>
          </div>

          <Banner />

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Integer a justo vitae arcu fermetum..." />
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sit numquam rem architecto incidunt vero tempore doloremque
                nihil asperiores ratione quia, dolores maxime dolor ab.
                Repellendus, excepturi laborum? Sapiente, velit.
              </p>
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sit numquam rem architecto incidunt vero tempore doloremque
                nihil asperiores ratione quia, dolores maxime dolor ab.
                Repellendus, excepturi laborum? Sapiente, velit.
              </p>
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sit numquam rem architecto incidunt vero tempore doloremque
                nihil asperiores ratione quia, dolores maxime dolor ab.
                Repellendus, excepturi laborum? Sapiente, velit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
