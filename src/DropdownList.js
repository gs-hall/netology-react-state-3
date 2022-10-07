import DropdownItem from './DropdownItem';
import React, {useState} from 'react';

export default function DropdownList({items, isOpen}) {
  const [activeItem, setActiveItem] = useState(null);
  if (!isOpen) {return};
  const itemElements = items.map((item, index) => (
    <DropdownItem
      key={index}
      item={item}
      onClick={() => setActiveItem(index)}
      isActive={activeItem === index}
      />
  ));
  return (
    <ul className="dropdown">
      {itemElements}
    </ul>
  );
}