// // ProductCard es un componente que renderiza una tarjeta de un producto
// // con un titulo, una imagen y un precio
// // @param {string} titulo - el titulo del producto
// // @param {string} img - la url de la imagen del producto
// // @param {numer} precio- el precio del producto
// // @returns {jsx.Element} un JSX Element que renderiza la tarjeta del producto
import ICONS from './Icons/Icons';
import './ProductCard.css'
import styles from './ProductCard.module.css';
import { FaEye } from "react-icons/fa";

const ProductCard = (props) =>{  //tambien podria poner export al lado de const
    console.log(props)
    return (
      <div className="product-card">
        <h2 className="product-card-title">{props.titulo}</h2>
        <img className = "product-card-img" src='https://http2.mlstatic.com/D_NQ_NP_938585-MLU73121330750_122023-O.webp'/>
        <span className="product-card_price">Precio: $</span>
        {/* {<FaEye className='product-card_icon' />}  */}
        <ICONS.EYE className= 'product-card_icon' />
      </div>
    )
  } 

  //export default ProductCard 
  export {ProductCard}