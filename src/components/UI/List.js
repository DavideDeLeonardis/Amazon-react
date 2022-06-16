import { Fragment } from "react";

const List = (props) => {
   const listItems = props.values.links.map((link, index) => (
      <li key={index} className={props.className}>
         <a href={link.href}>{link.text}</a>
      </li>
   ));

   return (
      <Fragment>
         <h4>{props.values.heading}</h4>
         <ul>{listItems}</ul>
      </Fragment>
   );
};

export default List;
