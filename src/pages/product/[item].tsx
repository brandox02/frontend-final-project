import { Layout } from "../../components/structure/layout";
import Item, { Item as IItem } from "../../components/products/item";

export const getStaticPaths = async () => {
  let items = await fetch("https://amadisfinal.azurewebsites.net/api/productoes", {
    headers: new Headers({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImJyYW5kb3hAZXhhbXBsZS5jb20iLCJleHAiOjE2NjE1NjIwNzF9.EAqArNXKhbcydQel82L30e5rQbkf4Lc0SqIb1xkUwC8',
    })
  });
  const items_json = await items.json() ;
  const paths = [].map((item) => {
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
  let items = await fetch("https://amadisfinal.azurewebsites.net/api/productoes", {
    method: "POST",
    body: JSON.stringify({ "id": context.params.item }),
    headers: new Headers({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImJyYW5kb3hAZXhhbXBsZS5jb20iLCJleHAiOjE2NjE1NjIwNzF9.EAqArNXKhbcydQel82L30e5rQbkf4Lc0SqIb1xkUwC8',
    })
  });
  const props = await items.json();
  return {
    props: {
      ...props,
    },
  };
};

export default function Product(props: IItem) {
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
