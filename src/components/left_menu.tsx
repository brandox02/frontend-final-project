export type Category = {
  name: string;
  cover: string;
};

interface MenuProps {
  categoris: Array<Category>;
  visible: Boolean;
  changeVisible: any
}

const CategoryContainer = (props: Category) => {
  console.log(props.name);

  return (
    <div className="category container">
      <img src={props.cover} alt="" />
      <span>{props.name}</span>
      {arrow}
    </div>
  );
};

const LeftMenu = (props: MenuProps) => {
  const hidden_menu=(e:any)=>{
    console.log(props.visible)
    props.changeVisible(false)
  }
  return (
    <>
      <aside
        id="Left-menu"
        className={"left-menu " + (!props.visible ? "hidden-menu" : "")}
      >
        <div className="display">
          <span className="d1">Hi the Menu is Here!</span>
          <br />
          <span style={{ fontSize: "0.8em" }}>
            <b>Log In</b> or <b>Log Up</b>
          </span>
        </div>
        {props.categoris.map((item: any, index: number) => (
          <CategoryContainer
            name={item.name}
            cover="/IMG_5200.jpg"
            key={index}
          />
        ))}
      </aside>
      {props.visible ? <div className="background" onClick={e => hidden_menu(e)}/> : ""}
    </>
  );
};

const arrow = (
  <div style={{ marginLeft: "auto" }}>
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
  </div>
);
export default LeftMenu;
