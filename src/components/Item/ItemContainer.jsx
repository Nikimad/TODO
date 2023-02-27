import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  updateItemText,
  toggleItemCompletedStatus,
  toggleItemIsEditingStatus,
} from "../../features/list/listSlice";
import Item from "./Item";

const ItemContainer = ({ item }) => {
  const [value, setValue] = useState(item.text);
  const dispatch = useDispatch();
  const handleChange = (e) => setValue(e.target.value);
  const handleToggle = () => dispatch(toggleItemCompletedStatus(item.id));
  const handdleDelete = () => dispatch(deleteItem(item.id));
  const handleEdit = () => dispatch(toggleItemIsEditingStatus(item.id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S/gm.test(value)) {
      handdleDelete();
      return;
    }
    dispatch(updateItemText({ id: item.id, text: value }));
    handleEdit();
  };

  return (
    <Item
      onToggle={handleToggle}
      onEdit={handleEdit}
      onDelete={handdleDelete}
      onChange={handleChange}
      value={value}
      onSubmit={handleSubmit}
      {...item}
    />
  );
};

export default ItemContainer;
