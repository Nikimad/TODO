import "./Item.scss";
import { ReactComponent as Cross } from "../../assets/svg/icon-cross.svg";

const Item = ({
  onToggle,
  onDelete,
  text,
  completed,
  onSubmit,
  value,
  onChange,
  isEditing,
  onEdit,
}) => (
  <li className="todo-app__list-item" data-completed={completed}>
    <button
      className="todo-app__list-item__toggler border-grad-hover"
      onClick={onToggle}
    />
    {!isEditing ? (
      <button className="todo-app__list-item__text" onDoubleClick={onEdit}>
        {text}
      </button>
    ) : (
      <form className="todo-app__list-item__text" onSubmit={onSubmit}>
        <label className="todo-app__list-item__input-label">
          <input
            className="todo-app__list-item__input"
            type="text"
            onChange={onChange}
            onBlur={onSubmit}
            value={value}
            autoFocus
          />
        </label>
      </form>
    )}
    <button className="todo-app__list-item__delete" onClick={onDelete}>
      <Cross />
    </button>
  </li>
);

export default Item;
