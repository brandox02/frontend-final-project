import CartAside from "../../components/cartAside";
import ItemCard from "../../components/item-card";
import { Layout } from "../../components/structure/layout";

export default function ShoppingCard(props) {
  return (
    <Layout>
      <div className="shopping-list">
        <div>
          <h3 className="d-3">Shopping List</h3>
          <div style={{ display: "flex", gap: "1em" }}>
            <ItemCard
              id={1}
              name="phone cover"
              description="mashu "
              img_cover="https://i.pinimg.com/originals/71/96/cf/7196cfdf85e22579fe08e82385d4061a.png"
              fav={true}
            />
            <ItemCard
              id={2}
              name="phone cover"
              description="mashu "
              img_cover="https://ih1.redbubble.net/image.1890480909.1051/icr,iphone_12_soft,back,a,x600-pad,600x600,f8f8f8.jpg"
              fav={false}
            />
          </div>
        </div>
        <CartAside />
      </div>
    </Layout>
  );
}
