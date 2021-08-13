import Header from "../header";
import LestMenu from "../left_menu";

const Layout = (props) => {
  return (
    <div id="layout">
      <Header />
      <LestMenu
        categoris={[
          { name: "Categoy 1", cover: "IMG_5200.jpg" },
          { name: "Categoy 1", cover: "IMG_5200.jpg" },
          { name: "Categoy 1", cover: "IMG_5200.jpg" },
        ]}
        visible={true}
      />
      {props.children}
    </div>
  );
};

export { Layout };
