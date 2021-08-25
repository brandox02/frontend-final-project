import { favorite, favorite_null } from "../icons";

const FavoriteIcon = (props: {
  favorite: Boolean;
  setFavorite: (arg: any) => void;
}) => {
  return (
    <div
      className="favorite-icon"
      onClick={() => props.setFavorite(!props.favorite)}
      style={props.favorite ? { color: "#FF3D68" } : {}}
    >
      <button>{props.favorite ? favorite : favorite_null}</button>
    </div>
  );
};

export default FavoriteIcon;
