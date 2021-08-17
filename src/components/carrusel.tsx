import { Splide, SplideSlide } from "splide-nextjs/react-splide";

export default function Carrusel(props: { perPage: number; children }) {
  return (
    <div className="carussel">
      <Splide
        options={{
          rewind: true,
          gap: "2rem",
          perPage: props.perPage,
        }}
      >
        {props.children.map((item, key) => {
          return <SplideSlide key={key}>{item}</SplideSlide>;
        })}
      </Splide>
    </div>
  );
}
