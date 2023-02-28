import { useSelector, useDispatch } from "react-redux";
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
  const visibleCount = useSelector(selectVisibleItemsCounter)
  const activeCount = useSelector(selectActiveCounter);
  const completedCount = useSelector(selectCompletedCounter);

  const dispatch = useDispatch();
  const handleDeleteCompleted = () => dispatch(deleteCompleted());

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
