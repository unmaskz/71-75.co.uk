import { SignUp } from '@clerk/nextjs';
import { MyPage } from '@/interfaces/page.interface';

const Register: MyPage = (props: any) => {
    return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
};

export default Register;

Register.Layout = 'Main';
