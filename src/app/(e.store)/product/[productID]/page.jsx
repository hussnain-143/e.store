import React from 'react'

import Product from '@/Components/Product'

const page = async ({ params }) => {

    const { productID } = await params;

  return (
    <>
      <Product params={productID} />
    </>
  )
}

export default page