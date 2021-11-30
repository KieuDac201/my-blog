import React from "react";
import Link from "next/link";
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <a className={styles.logo}>Dac Blog</a>
        </Link>
        <div className={styles.search}>
          <input type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path></svg>
        </div>
        <button className="btn">Create Post</button>
        <div className={styles.notiIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aq9x4o1pvbpxyyztrmei07gdfrx9p6bx" ><title id="aq9x4o1pvbpxyyztrmei07gdfrx9p6bx">Notifications</title>
            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
