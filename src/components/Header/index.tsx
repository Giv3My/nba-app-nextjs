import Link from 'next/link';
import Image from 'next/image';

import logo from '@img/logo.png';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.linkLogo}>
          <Image src={logo} width={150} height={120} alt="logo" />
        </div>
      </Link>
      <div className={styles['east-color']}></div>
      <div className={styles['west-color']}></div>
    </header>
  );
};
