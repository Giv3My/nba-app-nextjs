import React from 'react';

import { Header } from '@/components/index';

export const HomeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
