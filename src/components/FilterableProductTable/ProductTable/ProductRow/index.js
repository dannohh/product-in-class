import React from 'react'
import PropTypes from 'prop-types'

export const ProductRow = ({name, price}) => (
<tr>
<td>{name}</td>
<td>{price}</td>
</tr>)

ProductRow.prototypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
}
