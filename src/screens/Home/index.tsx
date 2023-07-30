import React from 'react';

import teams from './data';

import { Search } from '@/components';
import { TeamCard } from './components';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <Search />
      <main className={styles.home}>
        <div className={styles.teams}>
          <div className={`${styles.team} ${styles['team-east']}`}>
            <p className={`${styles['conference-name']} ${styles['conference-east']}`}>
              Eastern Conference
            </p>
            <div className={styles['teams-wrapper']}>
              {teams
                .filter((team) => team.leagues.standard.conference === 'East')
                .map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
            </div>
          </div>
          <div className={`${styles.team} ${styles['team-west']}`}>
            <p className={`${styles['conference-name']} ${styles['conference-west']}`}>
              Western Conference
            </p>
            <div className={styles['teams-wrapper']}>
              {teams
                .filter((team) => team.leagues.standard.conference === 'West')
                .map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
