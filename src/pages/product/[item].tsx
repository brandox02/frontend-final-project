import { Layout } from "../../components/structure/layout";
import Item, { ProductType } from "../../components/products/item";

const items = new Array<ProductType>({
  id: 1,
  name: "gura phone case",
  description: "A Gawr Gura phone case, damn gura is too smart ",
  img_cover:
    "https://i.pinimg.com/originals/71/96/cf/7196cfdf85e22579fe08e82385d4061a.png",
});

export const getStaticPaths = async () => {
  const paths = items.map((item) => {
    return {
      params: {
        item: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const props = items[context.params.item - 1];
  return {
    props: {
      ...props,
    },
  };
};

export default function Product(props: ProductType) {
  return (
    <Layout>
      <Item
        id={props.id}
        name={props.name}
        description={props.description}
        img_cover={props.img_cover}
      />
    </Layout>
  );
}
