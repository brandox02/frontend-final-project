import React, { useState } from "react";
import { Layout } from "../components/structure/layout";
import StaticSlide from "../components/staticSlide";
import ProductCard, { ProductDisplay } from "../components/productCard";
import Carrusel from "../components/carrusel";
import ItemCard from "../components/item-card";

const link_0 =
  "https://i.pinimg.com/originals/71/96/cf/7196cfdf85e22579fe08e82385d4061a.png";
const link_1 =
  "https://ih1.redbubble.net/image.1890480909.1051/icr,iphone_12_soft,back,a,x600-pad,600x600,f8f8f8.jpg";

const product_array = new Array<number>(1, 2, 3, 4, 5, 8, 9, 0);
const items_array = new Array<string>(
  link_0,
  link_1,
  link_0,
  link_1,
  link_0,
  link_1,
  link_0,
  link_1,
  link_0,
  link_1
);

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <StaticSlide />
          <main style={{ maxWidth: "1300px", margin: "auto" }}>
            <p style={{ margin: "2rem 1rem", fontSize: "2em" }}>
              <b>Shop Recomender</b>
            </p>
            <ProductDisplay>
              {product_array.map((item, key) => (
                <ProductCard
                  img={
                    "https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"
                  }
                  key={key}
                />
              ))}
            </ProductDisplay>
            <p style={{ margin: "2rem 1rem", fontSize: "2em" }}>
              <b>Explore designs picked for you</b>
            </p>
            <Carrusel perPage={0}>
              {items_array.map((item, index) => (
                <ItemCard
                  name="phone cover"
                  seller="mashu "
                  img_url={item}
                  fav={true}
                  key={index}
                />
              ))}
            </Carrusel>

            <p style={{ margin: "2rem 1rem", fontSize: "2em" }}>
              <b>Explore designs picked for you</b>
            </p>
            <Carrusel perPage={1}>
              <img
                className="cover-img"
                src="https://alternativanerd.com.br/wp-content/uploads/2019/03/810ccR3YiuIJtufm2uxS7EIEFKc-850x450.jpg"
                alt="Image 1"
              />
              <img
                className="cover-img"
                src="https://somoskudasai.com/wp-content/uploads/2020/11/portada_love-live-nijigasaki-23.jpg"
                alt="Image 2"
              />
            </Carrusel>
          </main>
        </Layout>
      </div>
    );
  }
}
export default Index;
