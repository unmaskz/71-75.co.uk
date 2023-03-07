import { SignIn } from '@clerk/nextjs';

const SignInPage = (props: any) => {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
};

export default SignInPage;

SignInPage.Layout = 'Main';
