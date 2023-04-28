import React from 'react';
import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import styles from './Header.module.css';
import { CONSTANTS } from '../../constants';

function Header() {
  return (
    <ThemeContext.Consumer>
      {([theme, themeChange]) => {
        return (
          <UserContext.Consumer>
            {([user]) => {
              const className = classNames({
                [styles.light]: theme === CONSTANTS.THEMES.LIGHT,
                [styles.dark]: theme === CONSTANTS.THEMES.DARK,
              });
              return (
                <nav className={className}>
                  <h1>Header</h1>
                  <img
                    style={{
                      width: '150px',
                      height: '150px',
                      marginLeft: 'auto',
                    }}
                    src={user.avatar}
                    alt=""
                  />
                  <button
                    style={{ width: '100px', height: '30px' }}
                    onClick={themeChange}
                  >
                    ChangeTheme
                  </button>
                </nav>
              );
            }}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Header;
