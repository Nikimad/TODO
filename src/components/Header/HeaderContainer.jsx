import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import { useState } from "react";
import { toggleTheme } from "../../models/theme/actions";
import { addItem, toggleAll } from "../../models/list/actions";
import {
  selectActiveCounter,
  selectCompletedCounter,
} from "../../models/list/selectors";
import Header from "./Header";
import throttle from "lodash/throttle";

const HeaderContainer = () => {
  const [value, setValue] = useState("");
  const completedCount = useSelector(selectCompletedCounter);
  const activeCount = useSelector(selectActiveCounter);

  const handleToggle = useAction(toggleTheme());
  
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleToggleAll = useAction(toggleAll());

  const handleAddItem = useAction(addItem(value));

  const handleAddOrToggleAll = (e) => {
    if (!/\S/gm.test(value) && e.type === "blur") return;
    if (!/\S/gm.test(value)) return handleToggleAll();
    handleAddItem();
    setValue("");
  };

  const throttledhandleAddOrToggleAll = throttle(handleAddOrToggleAll, 100, { leading: false });

  return (
    <Header
      onToggle={handleToggle}
      onSubmit={handleSubmit}
      onClick={throttledhandleAddOrToggleAll}
      onChange={handleChange}
      value={value}
      isCompleted={completedCount > 0 && activeCount === 0}
    />
  );
};

export default HeaderContainer;
