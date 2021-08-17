import ListObject from "../../components/listObject";
import { Layout } from "../../components/structure/layout";

const favorite_items = [{}, {}, {}, {}, {}, {}, {}];

export default function Favorite() {
  return (
    <>
      <Layout>
        <h3 className="d-3">Favorite List</h3>
        <div className="favorite-list">
            {favorite_items.map((item, index:number)=>{
                return <ListObject name={"object "+index} key={index}/>
            })}
        </div>
      </Layout>
    </>
  );
}
