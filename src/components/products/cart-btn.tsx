import { add_cart, rm_cart } from "../icons";

const CardIcon = (props: { cart: Boolean; setCart: (arg: any) => void }) => {
  return (
    <div
      className="shopping-cart-icon"
      style={props.cart ? { color: "#055052" } : {}}
      onClick={() => props.setCart(!props.cart)}
    >
      <button>{props.cart ? add_cart : rm_cart}</button>
    </div>
  );
};

export default CardIcon;
