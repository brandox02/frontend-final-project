export const ProductDisplay = (props) => {
  return <section className="product-display">{props.children}</section>;
};

export default function ProductCard(props:{img:string}) {
  return (
    <article className="item-card">
      <img
        src={props.img}
        alt=""
      />
    </article>
  );
}
