import "./Wrapper.scss";

const Wrapper = ({ theme, children }) => (
  <div className="todo-app__wrapper" data-theme={theme}>
    {children}
  </div>
);

export default Wrapper;
