import { useState } from "react";
import Header from "../header";
import LeftMenu from "../left_menu";
import Footer from "../footer";

const Layout = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div id="layout">
      <Header 
        menuState={menu}
        setMenu={setMenu}
      />
      <LeftMenu
        categoris={[
          { name: "Categoy 1", cover: "IMG_5200.jpg" },
          { name: "Categoy 1", cover: "IMG_5200.jpg" },
          { name: "Categoy 1", cover: "IMG_5200.jpg" },
        ]}
        visible={menu}
        changeVisible={setMenu}
      />
      {props.children}
      <Footer/>
    </div>
  );
};

export { Layout };
