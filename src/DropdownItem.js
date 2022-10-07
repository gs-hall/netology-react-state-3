export default function DropdownItem({item, onClick, isActive}) {
  return (
    <li className={isActive ? 'active':null}>
      <a href="#" onClick={onClick}>{item}</a>
    </li>
  );
}