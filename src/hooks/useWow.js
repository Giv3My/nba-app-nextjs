import React from 'react';
import { WOW } from 'wowjs';

export const useWow = () => {
  React.useEffect(() => {
    new WOW({ live: false }).init();
  }, []);
};
