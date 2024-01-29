function Item(props) {
  return (
    <li>
      <li>
        <strong>{props.item.name}</strong>
        <span>{props.item.price}</span>
      </li>
    </li>
  );
}

export default Item;
