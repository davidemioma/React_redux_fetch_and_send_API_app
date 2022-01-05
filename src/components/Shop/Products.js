import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMIE_DATA = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "This is a first product - amazing!",
  },

  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "This is a Second product - amazing!",
  },
];

const items = DUMMIE_DATA.map((item) => (
  <ProductItem
    key={item.id}
    id={item.id}
    title={item.title}
    price={item.price}
    description={item.description}
  />
));

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default Products;
