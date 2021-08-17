import { github, favorite } from "./icons";
const Footer = (props) => {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="d1">
          <b>λ</b> Amadis Ecommers!
          <p style={{margin:"0.5em"}}>{github}</p>
        </div>
        <div className="d2">
          © 2020-2021 Itla & Joseph Estevez <br />
          <span>
            Made with
            <span
              style={{ color: "#FF3D68", fontSize: "0.7em", margin: "0.5em" }}
            >
              {favorite}
            </span>
            in Dominican Republic
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
