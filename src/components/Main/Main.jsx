import "./Main.css";
import Item from "../Item";

const Main = ({ items, onDeleteCompleted, isDisabled, activeCount }) => (
  <main className="container todo-app__main">
    <ul className="todo-app__list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
    <div className="todo-app__main-controls">
      <p className="todo-app__counter">
        {activeCount} {activeCount === 1 ? "Item left" : "Items left"}
      </p>
      <button
        className="todo-app__cleaner"
        onClick={onDeleteCompleted}
        disabled={isDisabled}
      >
        Clear Completed
      </button>
    </div>
  </main>
);

export default Main;
