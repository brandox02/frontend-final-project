import { Layout } from "../../components/structure/layout";
import Item, { ProductType } from "../../components/products/item";

export const getStaticPaths = async () => {
  let items = await fetch("http://127.0.0.1:3000/api/products");
  const items_json = await items.json();
  const paths = items_json.map((item) => {
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
  let items = await fetch("http://127.0.0.1:3000/api/products/", {
    method: "POST",
    body: JSON.stringify({ "id": context.params.item }),
  });
  const props = await items.json();
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
