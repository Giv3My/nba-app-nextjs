import React from 'react';
import Image from 'next/image';

import { Cross } from '@/assets/icons';
import searchIcon from '@img/loupe.png';
import styles from './Search.module.scss';

export const Search = () => {
  const [search, setSearch] = React.useState('');
  const searchRef = React.useRef<HTMLInputElement>(null);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const onClearClick = () => {
    setSearch('');
    searchRef.current?.focus();
  };

  return (
    <div className="flex center">
      <div className={styles['input-wrapper']}>
        <div className={styles['search-player']}>
          <Image
            className={styles['search-icon']}
            src={searchIcon}
            width={24}
            height={24}
            alt="search-icon"
          />
          <input
            type="text"
            ref={searchRef}
            value={search}
            onChange={onSearchChange}
            placeholder="Search player..."
          />
          {search && <Cross className={styles['clear-icon']} onClick={onClearClick} />}
        </div>
      </div>
    </div>
  );
};
