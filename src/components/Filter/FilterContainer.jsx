import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../features/list/selectors/selectors";
import { setFilter } from "../../features/list/listSlice";
import Filter from "./Filter";

const FilterContainer = ({ value }) => {
  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setFilter(value));

  return (
    <Filter onClick={handleClick} isDisabled={currentFilter === value}>
      {value}
    </Filter>
  );
};

export default FilterContainer;
