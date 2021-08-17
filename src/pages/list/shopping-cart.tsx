import ItemCard from "../../components/item-card";
import { Layout } from "../../components/structure/layout";


export default function ShoppingCard(props) {
  return (
    <Layout>
      <h3 className="d-3">Shopping List</h3>
      <div style={{ display: "flex",gap:"1em" }}>
        <ItemCard
          name="phone cover"
          seller="mashu "
          img_url="https://i.pinimg.com/originals/71/96/cf/7196cfdf85e22579fe08e82385d4061a.png"
          fav={true}
        />
        <ItemCard
          name="phone cover"
          seller="mashu "
          img_url="https://www.senorcool.com/en/system/files/styles/artwork_case_phone_iphone7/private/senorcool_paisdelasmaquinas_evangelion_eva_kanji.png?itok=0P8u19ZE"
          fav={false}
        />
      </div>
    </Layout>
  );
}
