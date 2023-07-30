import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useWow } from '@/hooks';
import { Team } from '../../types';

import styles from './TeamCard.module.scss';

export interface TeamCardProps {
  team: Team;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  useWow();

  const conference = team.leagues.standard.conference.toLowerCase();

  return (
    <Link href={`/team/${team.id}`} className={styles['team-card-link']}>
      <div className={`${styles['team-card']} animate__animated wow animate__bounceInUp`}>
        <Image
          className={styles['team-logo']}
          src={team.logo}
          width={120}
          height={120}
          alt="team-logo"
        />
        <p className={`${styles['team-name']} ${styles[`team-name-${conference}`]}`}>
          {team.name}
        </p>
      </div>
    </Link>
  );
};
