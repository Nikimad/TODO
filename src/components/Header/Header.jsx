import "./Header.scss";

const Header = ({ onToggle, onSubmit, onClick, onBlur, onChange, value, isCompleted }) => (
  <header className="container todo-app__header">
    <h1 className="todo-app__heading">Todo</h1>
    <button className="todo-app__toggler" onClick={onToggle} />
    <form className="todo-app__form" onSubmit={onSubmit}>
      <label className="todo-app__form__submit-label">
        <input
          type="submit"
          className="todo-app__form__submit border-grad-hover"
          value=""
          data-completed={isCompleted}
          onClick={onClick}
        />
      </label>
      <label className="todo-app__form__input-label">
        <input
          type="text"
          className="todo-app__form__input"
          onChange={onChange}
          value={value}
          onBlur={onClick}
          placeholder="Create a new todo..."
        />
      </label>
    </form>
  </header>
);

export default Header;
