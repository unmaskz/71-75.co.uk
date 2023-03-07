import Head from 'next/head';

import { MyPage } from '@/interfaces/page.interface';
import { getDirectusClient } from '@/lib/directus';

const AboutUsPage: MyPage = (props: any) => {
  return (
    <>
      <h1>About Us</h1>
    </>
  );
};

export default AboutUsPage;

AboutUsPage.Layout = 'Main';
