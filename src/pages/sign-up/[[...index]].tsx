import { SignUp } from '@clerk/nextjs';

const SignUpPage = (props: any) => {
    return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
};

export default SignUpPage;

SignUpPage.Layout = 'Main';
