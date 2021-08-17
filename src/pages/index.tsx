import React from "react";
import { Layout } from "../components/structure/layout";
import StaticSlide from "../components/staticSlide";
import ProductCard, { ProductDisplay } from "../components/productCard";
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';

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
              <ProductCard img={"https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"}/>
              <ProductCard img={"https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"}/>
              <ProductCard img={"https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"}/>
              <ProductCard img={"https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"}/>
              <ProductCard img={"https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"}/>
              <ProductCard img={"https://images-na.ssl-images-amazon.com/images/I/51dEP2Nz2VL._SY445_SX342_QL70_ML2_.jpg"}/>

            </ProductDisplay>
            <p style={{ margin: "2rem 1rem", fontSize: "2em" }}>
              <b>Explore designs picked for you</b>
            </p>
            <div className="carrusel-item">
              <Splide
                options={{
                  rewind: true,
                  gap: "2rem",
                  perPage: 3              
                }}
              >
                <SplideSlide>
                  <img
                    src="https://alternativanerd.com.br/wp-content/uploads/2019/03/810ccR3YiuIJtufm2uxS7EIEFKc-850x450.jpg"
                    alt="Image 1"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://somoskudasai.com/wp-content/uploads/2020/11/portada_love-live-nijigasaki-23.jpg"
                    alt="Image 2"
                  />
                </SplideSlide>
              </Splide>
            </div>
            <p style={{ margin: "2rem 1rem", fontSize: "2em" }}>
              <b>Explore designs picked for you</b>
            </p>
            <div className="carrusel">
              <Splide
                options={{
                  rewind: true,
                  gap: "2rem",
                }}
              >
                <SplideSlide>
                  <img
                    src="https://alternativanerd.com.br/wp-content/uploads/2019/03/810ccR3YiuIJtufm2uxS7EIEFKc-850x450.jpg"
                    alt="Image 1"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://somoskudasai.com/wp-content/uploads/2020/11/portada_love-live-nijigasaki-23.jpg"
                    alt="Image 2"
                  />
                </SplideSlide>
              </Splide>
            </div>
          </main>
        </Layout>
      </div>
    );
  }
}
export default Index;
