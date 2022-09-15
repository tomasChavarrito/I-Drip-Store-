import Item from '../Item/item'
import React from 'react'

export const ItemList = ({data = []}) => {
  return (
    data.map(PhoneFile => <Item key={PhoneFile.id}  dato={PhoneFile} />)
    )
}

export default ItemList;