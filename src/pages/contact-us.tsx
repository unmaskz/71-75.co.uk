import Head from 'next/head';

import { MyPage } from '@/interfaces/page.interface';
import { getDirectusClient } from '@/lib/directus';

const ContactUsPage: MyPage = (props: any) => {
    return (
        <>
            <h1>Contact Us</h1>
        </>
    );
};

export default ContactUsPage;

ContactUsPage.Layout = "Main";