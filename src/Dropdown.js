import DropdownList from './DropdownList';
import React, {useState} from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);
  const items = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
  ];

  return (
    <div className="container">
      <div className="dropdown-wrapper open">
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList items={items} isOpen={isOpen}/>
      </div>
    </div>
  );
}