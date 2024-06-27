import Head from 'next/head'
import React from 'react'

import { Services } from '@/app/_sections/services'

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>Services - 7Creative</title>
      </Head>
      <Services />
    </div>
  )
}

export default ServicesPage
