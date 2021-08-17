import { useState } from "react";
import { favorite_null, favorite } from "./icons";

type Item = {
  name: string;
  seller: string;
  img_url: string;
  fav: boolean;
};

const FavoriteIcon = (props: { favorite: Boolean; setFavorite:(arg:any)=>void }) => {
  return (
    <div className="favorite-icon"
    onClick={() => props.setFavorite(!props.favorite)}>
      <span>{props.favorite ? favorite : favorite_null}</span>
    </div>
  );
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
