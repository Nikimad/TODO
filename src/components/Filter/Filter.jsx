import "./Filter.css";

const Filter = ({ onClick, isDisabled, children }) => (
  <button className="todo-app__filter" onClick={onClick} disabled={isDisabled}>
    {children}
  </button>
);

export default Filter;
