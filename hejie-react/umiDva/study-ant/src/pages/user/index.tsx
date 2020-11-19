import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div className={styles.pageUser}>
      <Link to="/">后退</Link>
      <h1 className={styles.title}>用户页面</h1>
    </div>
  );
};
