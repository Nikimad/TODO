import "./Filter.scss";

const Filter = ({ setFilter, isDisabled, children }) => (
  <button className="todo-app__filter" onClick={setFilter} disabled={isDisabled}>
    {children}
  </button>
);

export default Filter;
