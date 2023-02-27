import "./Main.css";
import Item from "../Item";

const Main = ({
  items,
  onDeleteCompleted,
  isDisabled,
  activeCount,
  filter,
  isEmpty,
}) => (
  <main className="container todo-app__main">
    {isEmpty ? (
      <p className="todo-app__list-plug">
        No {filter === "all" ? "" : filter} tasks
      </p>
    ) : (
      <ul className="todo-app__list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    )}
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
