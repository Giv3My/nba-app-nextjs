import { NextPage } from 'next';
import Head from 'next/head';

import { HomeLayout } from '@/layouts/HomeLayout';
import { Home } from '@/screens';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NBA App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeLayout>
        <Home />
      </HomeLayout>
    </>
  );
};

export default HomePage;
