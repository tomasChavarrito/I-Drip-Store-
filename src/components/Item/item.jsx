import React, {useContext} from 'react'
import './item.css';
import {PhoneM} from '../props/props';
import { Link } from 'react-router-dom'
import {CartContext}  from '../../App';


const Item = ({dato}) => {




  return (
    
    <Link to={`/detalle/${dato.id}`}>
        <PhoneM
         name={dato.title}
         image={dato.image}
         />
    </Link>
         
  )
}


export default Item;