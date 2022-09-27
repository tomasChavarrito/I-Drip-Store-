import {ItemCount} from '../ItemCount/index'
import ItemList from '../ItemList/itemList';
import React, {useState, useEffect} from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import  ItemDetail  from '../ItemDetail/ItemDetail';

const PhoneFile = [
    {id: 1,
         image:"/iphone13.png", 
         title: "Iphone 13",
         marca:'Apple',
         dato:'Procesador A15 Bionic - Pantalla OLED Super Retina 6,1" - Bateria de 4000 mAh - Camaras de 12mp Gran Angular - Ram 12gb - SSD 1TB',
         price:1600,
         category:'apple'}, 


    {id: 2,
         image:"/IPH14.jpg",
         title:"Iphone 14 ~Nuevo~",
         marca:'Apple',
         dato:'Procesador A16 Bionic - Pantalla OLED Super Retina 6,5" - Bateria de 4700 mAh - Camaras de 18mp Gran Angular - Ram 12gb - SSD 1TB',
         price:2000,
         category:'apple'},


    {id: 3,
         image:"/samsungS22.jpg",
         title:"Samsung Galaxy S22 Ultra",
         marca:'Samsung',
         dato:'Procesador Octa.Core - Pantalla OLED Super Retina 6,8" - Bateria de 6000 mAh - Camaras de 108mp Gran Angular - Ram 12gb - SSD 1TB',
         price:1200,
         category:'samsung'},


    {id: 4,
         image:"/SamsungNote20.jpg",
         title:"Samsung Galaxy Note 20",
         marca:'Samsung',
         dato:'Procesador Octa.Core - Pantalla OLED Super Retina 6,6" - Bateria de 52000 mAh - Camaras de 98mp Gran Angular - Ram 12gb - SSD 1TB',
         price:1100,
         category:'samsung'},


    {id: 5,
         image:"/motoG200.jpg",
         title:"Moto G 200",
         marca:'Motorola',
         dato:'Procesador Octa.Core2 - Pantalla OLED Super Retina 5,7" - Bateria de 3500 mAh - Camaras de 60mp Gran Angular - Ram 8gb - SSD 256gb',
         price:1000,
         category:'motorola'},


    {id: 6,
         image:"/motorolaEdge30.jpg",
         title:"Moto Edge 30",
         marca:'Motorola',
         dato:'Procesador Octa.Core2 - Pantalla OLED Super Retina 5,9" - Bateria de 4100 mAh - Camaras de 72mp Gran Angular - Ram 8gb - SSD 512gb',
         price:1150,
         category:'motorola'},
];

export const ItemDetailContainer = (texto) => {

    const [data, setData] = useState([]);

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(PhoneFile)
            }, 2000);
        });
            getData.then(res => setData(res.find(PhoneFile => PhoneFile.id === parseInt(detalleId))));    
        }, [])
  
    return (
        <>
        <ItemDetail  data={data}/>
        </>
            
  )
}

export default ItemDetailContainer; 