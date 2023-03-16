import SignIn from '@/components/auth/login/Login';
import PageHeading from '@/components/page-heading/PageHeading';

const SignInPage = (props: any) => {
    return (
        <>
            <PageHeading heading="Login" />
            <SignIn />
        </>
    );
};

export default SignInPage;

SignInPage.Layout = 'Main';
