import {ItemCount} from '../ItemCount/index'
import ItemList from '../ItemList/itemList';
import React, {useState, useEffect} from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const PhoneFile = [
    {id: 1,
         image:"/iphone13.png",
         title: "Iphone 13",
         marca:'Apple',
         dato:'Movie',
         price:1600,
         category:'apple'},


    {id: 2,
         image:"/IPH14.jpg",
         title:"Iphone 14 ~Nuevo~",
         marca:'Apple',
         dato:'Music',
         price:2000, 
         category:'apple'},


    {id: 3,
         image:"/samsungS22.jpg",
         title:"Samsung Galaxy S22 Ultra",
         marca:'Samsung', 
         dato:'Sports',
         price:1200,  
         category:'samsung'},


    {id: 4,
         image:"/SamsungNote20.jpg",  
         title:"Samsung Galaxy Note 20",
         marca:'Samsung', 
         dato:'VideoGame',
         price:1100,  
         category:'samsung'},


    {id: 5, 
         image:"/motoG200.jpg", 
         title:"Moto G 200",
         marca:'Motorola', 
         dato:'Sponsors',
         price:1000,  
         category:'motorola'},


    {id: 6,
         image:"/motorolaEdge30.jpg", 
         title:"Moto Edge 30",
         marca:'Motorola', 
         dato:'Sponsors',
         price:1150, 
         category:'motorola'},
];

export const ItemListCointainer = (texto) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(PhoneFile)
            }, 2000);
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(PhoneFile => PhoneFile.category === categoriaId)));    
        } else   {
            getData.then(res => setData(res))
        }
        

    }, [categoriaId])


    return (
        <>
            <ItemList  data={data}/>
        </>
  )
}

export default ItemListCointainer;