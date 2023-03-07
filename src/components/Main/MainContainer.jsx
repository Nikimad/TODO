import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import { deleteCompleted } from "../../models/list/actions";
import { selectFilter } from "../../models/filter/selectors";
import {
  selectActiveCounter,
  selectCompletedCounter,
  selectVisibleItems,
  selectVisibleItemsCounter,
} from "../../models/list/selectors";
import Main from "./Main";

const MainContainer = () => {
  const currentFilter = useSelector(selectFilter);
  const items = useSelector(selectVisibleItems);
  const visibleCount = useSelector(selectVisibleItemsCounter);
  const activeCount = useSelector(selectActiveCounter);
  const completedCount = useSelector(selectCompletedCounter);

  const handleDeleteCompleted = useAction(deleteCompleted());

  return (
    <Main
      filter={currentFilter}
      items={items}
      isEmpty={visibleCount === 0}
      activeCount={activeCount}
      onDeleteCompleted={handleDeleteCompleted}
      isDisabled={completedCount === 0}
    />
  );
};

export default MainContainer;
