import MyDetails from '@/components/account/my-account/MyAccount';
import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';

const ServicedOfficesPage: MyPage = (props: any) => {
    return (
        <>
            <h1>Serviced Offices</h1>
        </>
    );
};

export default ServicedOfficesPage;

ServicedOfficesPage.Layout = 'Main';
