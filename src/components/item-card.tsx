import { useState } from "react";
import FavoriteIcon from "../components/products/favorite-btn";
import { Item } from "./products/item";
import Link from "next/link";

export default function ItemCard(props: Item) {
  const [fav, setFavorite] = useState(props.fav);

  return (
    <div className="item-card">
      <figure>
        <img src={props.img_cover} alt="" />
        <FavoriteIcon favorite={fav} setFavorite={setFavorite} />
      </figure>
      <div className="content">
        <span className="name">
          <Link href={"/product/" + props.id}>{props.name}</Link>
        </span>
        <span className="vendor">{props.description}</span>
      </div>
    </div>
  );
}
