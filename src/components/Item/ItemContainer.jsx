import { useState } from "react";
import useAction from "../../hooks/useAction";
import {
  deleteItem,
  updateItem,
  toggleItem,
  editItem,
} from "../../models/list/actions";
import Item from "./Item";
import { anyNonWhitespace } from "../../utils/regexps";

const ItemContainer = ({ item }) => {
  const [itemValue, setItemValue] = useState(item.text);

  const handleItemChange = (e) => setItemValue(e.target.value);
  const handleToggle = useAction(toggleItem(item.id));
  const handleDelete = useAction(deleteItem(item.id));
  const handleEdit = useAction(editItem(item.id));
  const handleUpdate = useAction(updateItem({ id: item.id, text: itemValue }));
  
  const handleSubmitItem = (e) => {
    e.preventDefault();
    if (!anyNonWhitespace.test(itemValue)) {
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
      onChange={handleItemChange}
      value={itemValue}
      onSubmit={handleSubmitItem}
      {...item}
    />
  );
};

export default ItemContainer;
