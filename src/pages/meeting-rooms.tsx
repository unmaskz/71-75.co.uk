import MyDetails from '@/components/account/my-details/MyDetails';
import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';

const MeetingRoomsPage: MyPage = (props: any) => {
    return (
        <>
            <h1>Meeting Rooms</h1>
        </>
    );
};

export default MeetingRoomsPage;

MeetingRoomsPage.Layout = 'Main';
