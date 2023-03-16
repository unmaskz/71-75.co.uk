import SignUp from '@/components/auth/login/Login';
import PageHeading from '@/components/page-heading/PageHeading';

const SignUpPage = (props: any) => {
    return (
        <>
            <PageHeading heading="Register" />
            <SignUp />;
        </>
    );
};

export default SignUpPage;

SignUpPage.Layout = 'Main';
