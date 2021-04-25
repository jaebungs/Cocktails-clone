import React from 'react';
import { configs } from '../configs/index';
import styled from '../styles/navbar.module.scss';

const Nav = () => {
  return (
    <nav className={styled.homePageContainer}>
      <div className={styled.navbarItemsContainer}>
        <h1 className={styled.navbarTitle}>
          <a href="/">Mymy Cocktails</a>
        </h1>
        {configs.navs.map((route, index) => (
          <div key={index} className={styled.navbarItem}>
            <a item={route} href={route.href}>
              {route.name}
            </a>
          </div>
        ))}
      </div>

      <div className={styled.navbarRightContainer}>
        <a className={styled.navbarLogin} href="/login" item="login">
          login
        </a>
      </div>
    </nav>
  );
};

export default Nav;
