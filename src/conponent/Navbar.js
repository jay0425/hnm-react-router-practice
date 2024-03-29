import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Login from '../page/Login';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ['여성', 'Divided', '남성', '신생사/유아', '아동', 'H&M Home', 'sale', '지속가능성'];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
    setAuthenticate(false);
  };
  const goToHome = () => {
    navigate('/');
  };
  const search = (event) => {
    if (event.key === 'Enter') {
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
      </div>

      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          {authenticate ? (
            <div className="login" onClick={goToLogin}>
              로그아웃
            </div>
          ) : (
            <div className="login">로그인</div>
          )}
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
          alt="hnm 로고 이미지"
          onClick={goToHome}
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
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
