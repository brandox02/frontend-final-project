import { useState } from "react";
import CardIcon from "./cart-btn";
import Cover from "./cover";
import FavoriteIcon from "./favorite-btn";

export type Item = {
  id: number;
  name: string;
  description: string;
  fav?: boolean;
  img_cover: string;
};

export default function Item(props: Item) {
  const [fav, setFavorite] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <section className="product-item">
      <Cover image={props.img_cover} />
      <div className="p-2">
        <h3 className="fs-2">{props.name}</h3>
        <p className="mt-4">{props.description}</p>
      </div>
      <div className="d-flex justify-content-end p-5 fs-3">
        <span>
          <CardIcon cart={cart} setCart={setCart} />
        </span>
        <span>
          <FavoriteIcon favorite={fav} setFavorite={setFavorite} />
        </span>
      </div>
    </section>
  );
}
