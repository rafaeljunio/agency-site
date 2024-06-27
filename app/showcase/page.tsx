import Head from 'next/head'
import React from 'react'

import { Showcase } from '@/app/_sections/showcase'

const ShowcasePage = () => {
  return (
    <>
      <Head>
        <title>Showcase - 7Creative</title>
      </Head>
      <Showcase />
    </>
  )
}

export default ShowcasePage
