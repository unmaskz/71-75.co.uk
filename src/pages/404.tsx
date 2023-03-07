import { MyPage } from '@/interfaces/page.interface';

const NotFound: MyPage = (props: any) => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;

NotFound.Layout = 'Main';
