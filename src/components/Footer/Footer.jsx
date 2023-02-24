import "./Footer.css";
import Filter from "../Filter";

const Footer = () => (
  <footer className="container todo-app__footer">
    <div className="todo-app__filters">
      <Filter value="all" />
      <Filter value="active" />
      <Filter value="completed" />
    </div>
  </footer>
);

export default Footer;
