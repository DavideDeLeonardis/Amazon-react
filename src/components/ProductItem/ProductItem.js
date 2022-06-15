import { Link } from "react-router-dom";

const ProductItem = (props) => {
   const price = `$${props.price}`;
   // const price = `$${props.price.toFixed(2)}`;

   return (
      <li>
         <div>
            <span>{props.brand}</span>
            <br></br>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <img src={props.image} alt={props.name} />
         </div>
         <div>{price}€</div>
         <Link to={`/products/${props.name}`}>VEDI</Link>
         <hr />
      </li>
   );
};

export default ProductItem;
