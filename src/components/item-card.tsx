import { useState } from "react";
import FavoriteIcon from "../components/products/favorite-btn"

type Item = {
  name: string;
  seller: string;
  img_url: string;
  fav: boolean;
};

export default function ItemCard(props: Item) {
  const [fav, setFavorite] = useState(props.fav);

  return (
    <div className="item-card">
      <figure>
        <img src={props.img_url} alt="" />
        <FavoriteIcon favorite={fav} setFavorite={setFavorite} />
      </figure>
      <div className="content">
        <span className="name">{props.name}</span>
        <span className="vendor">{props.seller}</span>
      </div>
    </div>
  );
}
