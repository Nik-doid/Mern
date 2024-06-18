import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserNavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
      </ul>
    </nav>
  );
}

export default UserNavBar;
