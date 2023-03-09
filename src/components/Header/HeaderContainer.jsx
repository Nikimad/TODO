import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import { useState } from "react";
import { toggleTheme } from "../../models/theme/actions";
import { addItem, toggleAll } from "../../models/list/actions";
import {
  selectActiveCounter,
  selectCompletedCounter,
} from "../../models/list/selectors";
import { anyNonWhitespace } from "../../utils/regexps";
import Header from "./Header";

import throttle from "lodash/throttle";

const HeaderContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const completedCount = useSelector(selectCompletedCounter);
  const activeCount = useSelector(selectActiveCounter);

  const handleToggle = useAction(toggleTheme());

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleToggleAll = useAction(toggleAll());

  const handleAddItem = useAction(addItem(inputValue));

  const handleAddOrToggleAll = (e) => {
    if (!anyNonWhitespace.test(inputValue) && e.type === "blur") return;
    if (!anyNonWhitespace.test(inputValue)) return handleToggleAll();
    handleAddItem();
    setInputValue("");
  };

  const throttledhandleAddOrToggleAll = throttle(handleAddOrToggleAll, 100, {
    leading: false,
  });

  return (
    <Header
      onToggle={handleToggle}
      onSubmit={handleSubmit}
      onClick={throttledhandleAddOrToggleAll}
      onChange={handleInputChange}
      value={inputValue}
      isCompleted={completedCount > 0 && activeCount === 0}
    />
  );
};

export default HeaderContainer;
