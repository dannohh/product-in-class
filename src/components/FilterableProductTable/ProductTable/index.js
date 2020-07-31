import React from 'react'
import PropTypes from "prop-types"


import { ProductCatagoryRow } from './ProductCatagoryRow'
import { ProductRow } from './ProductRow'

export const ProductTable = ({ products }) => {
const renderProductRow = () =>
products.map(({name, price}, i) => <ProductRow name={name} price={price}/>
)


return (
 <table>
    <thead>
      <tr>

      </tr>
    </thead>
 </table>
)
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
}

