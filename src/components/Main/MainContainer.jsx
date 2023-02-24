import { useSelector, useDispatch } from "react-redux";
import { deleteCompleted } from "../../features/list/listSlice";
import {
  selectActiveCounter,
  selectCompletedCounter,
  selectVisibleItems,
} from "../../features/list/selectors/selectors";
import Main from "./Main";

const MainContainer = () => {
  const items = useSelector(selectVisibleItems);
  const activeCount = useSelector(selectActiveCounter);
  const completedCount = useSelector(selectCompletedCounter);

  const dispatch = useDispatch();
  const handleDeleteCompleted = () => dispatch(deleteCompleted());

  return (
    <Main
      items={items}
      activeCount={activeCount}
      onDeleteCompleted={handleDeleteCompleted}
      isDisabled={completedCount === 0}
    />
  );
};

export default MainContainer;
