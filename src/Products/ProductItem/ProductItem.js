const ProductItem = (props) => {
   return (
      <li>
         <div>
            <span>{props.brand}</span>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <img src={props.image} alt={props.name} />
         </div>
         <div>{props.price}€</div>
         <hr />
      </li>
   );
};

export default ProductItem;
