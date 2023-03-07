import { useState } from "react";
import useAction from "../../hooks/useAction";
import {
  deleteItem,
  updateItem,
  toggleItem,
  editItem,
} from "../../models/list/actions";
import Item from "./Item";

const ItemContainer = ({ item }) => {
  const [value, setValue] = useState(item.text);

  const handleChange = (e) => setValue(e.target.value);
  const handleToggle = useAction(toggleItem(item.id));
  const handleDelete = useAction(deleteItem(item.id));
  const handleEdit = useAction(editItem(item.id));
  const handleUpdate = useAction(updateItem({ id: item.id, text: value }));
  
  const handleSubmitItem = (e) => {
    e.preventDefault();
    if (!/\S/gm.test(value)) {
      handleDelete();
      return;
    }
    handleUpdate();
    handleEdit();
  };

  return (
    <Item
      onToggle={handleToggle}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onChange={handleChange}
      value={value}
      onSubmit={handleSubmitItem}
      {...item}
    />
  );
};

export default ItemContainer;
