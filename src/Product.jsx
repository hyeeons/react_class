import Item from "./Item";

function Product() {
  const ProductsArr = [
    { name: "상품1", price: 1000 },
    { name: "상품2", price: 2000 },
    { name: "상품3", price: 3000 },
  ];
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {ProductsArr.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Product;

{
  /* <li>
  <strong>{ProductsArr[0].name}</strong>
  <span>{ProductsArr[0].price}</span>
</li>
<li>
  <strong>{ProductsArr[1].name}</strong>
  <span>{ProductsArr[1].price}</span>
</li>
<li>
  <strong>{ProductsArr[2].name}</strong>
  <span>{ProductsArr[2].price}</span>
</li> */
  // {배열이름.map()}
}
