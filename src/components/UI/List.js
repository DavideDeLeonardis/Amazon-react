const List = (props) => {
   const listItems = props.values.links.map((link, index) => (
      <li key={index} className={props.liClassName}>
         {props.showCheckbox && (
            <input className={props.inputClassName} type="checkbox" />
         )}
         <a href={link.href}>{link.text}</a>
      </li>
   ));

   return (
      <div className={props.containerListClassName}>
         <h4>{props.values.heading}</h4>
         <ul className={props.ulClassName}>{listItems}</ul>
      </div>
   );
};

export default List;
