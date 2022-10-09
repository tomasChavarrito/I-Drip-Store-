import {ItemCount} from '../ItemCount/index'
import ItemList from '../ItemList/itemList';
import React, {useState, useEffect} from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import './itemListC.css'


export const ItemListCointainer = (texto) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Phones');


        if (categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData (res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else   {
            getDocs(queryCollection)
                .then(res => setData (res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
        

    }, [categoriaId])


    return (
        <div className="imagenes">
            <ItemList  data={data}/>
        </div>
  )
}

export default ItemListCointainer;