import dynamic from "next/dynamic";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Carrusel(props: { options: any; img: Array<string> }) {
  return (
    (
      <Splide
        options={{
          rewind: true,
          gap: "2rem",
          perPage: 3,
        }}
      >
        {props.img.map((item: any, index) => {
          return (
            <SplideSlide key={index}>
              <img src={item.url} alt={"Image " + index} />
            </SplideSlide>
          );
        })}
      </Splide>
    ) >
    (
      <SplideSlide>
        <img
          src="https://alternativanerd.com.br/wp-content/uploads/2019/03/810ccR3YiuIJtufm2uxS7EIEFKc-850x450.jpg"
          alt="Image 1"
        />
      </SplideSlide>
    )
  );
}
