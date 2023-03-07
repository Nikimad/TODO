import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../models/filter/selectors";
import { setFilter } from "../../models/filter/actions";
import Filter from "./Filter";

const FilterContainer = ({ value }) => {
  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleSetFilter = () => dispatch(setFilter(value));

  return (
    <Filter setFilter={handleSetFilter} isDisabled={currentFilter === value}>
      {value}
    </Filter>
  );
};

export default FilterContainer;
