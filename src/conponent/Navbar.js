import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생사/유아', '아동', 'H&M Home', 'sale', '지속가능성'];
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
          alt="hnm 로고 이미지"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
