import dynamic from 'next/dynamic';

import { TeamCardProps } from '.';

export const TeamCard = dynamic<TeamCardProps>(
  () => import('.'!).then((module) => module.TeamCard),
  {
    ssr: false,
  }
);
