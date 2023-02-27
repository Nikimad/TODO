import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "../../features/theme/themeSlice";
import { addItem, toggleAll } from "../../features/list/listSlice";
import {
  selectActiveCounter,
  selectCompletedCounter,
} from "../../features/list/selectors/selectors";
import Header from "./Header";

const HeaderContainer = () => {
  const [value, setValue] = useState("");
  const completedCount = useSelector(selectCompletedCounter);
  const activeCount = useSelector(selectActiveCounter);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTheme());
  
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S/gm.test(value)) {
      if (e.type === "submit") dispatch(toggleAll());
      return;
    }
    setTimeout(() => dispatch(addItem(value)), 100);
    setValue("");
  };

  return (
    <Header
      onToggle={handleToggle}
      onSubmit={handleSubmit}
      onChange={handleChange}
      value={value}
      isCompleted={completedCount > 0 && activeCount === 0}
    />
  );
};

export default HeaderContainer;
