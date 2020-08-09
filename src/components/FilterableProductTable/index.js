import React, { Fragment, useState, setState, useEffect } from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

import api from "api"

export const FilterableProductTable = () => {

const [products, setProducts] = useState([])


   useEffect(() => {
  (async () => {
    setProducts(await api.index())
  })()
}, [])


    return (
      <Fragment>
        <SearchBar />
        <ProductTable />
      </Fragment>
    )

}

