import React from "react";
import "./style.css";

export default function ListItem(props) {
  return (
    props.list.map((item) => { 
      return (
      <li key={item.id}>{item.name}</li>
    )})
  )
}

export default function App(props) {
  const stuff = props.stuff;
  const listItems = <ListItem list={stuff} />;
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
