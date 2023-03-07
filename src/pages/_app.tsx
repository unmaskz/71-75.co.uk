import dynamic from 'next/dynamic';
import { Noto_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import 'bootstrap/scss/bootstrap.scss';
import '@/styles/main.scss';

import { Layouts } from '@/components/layout/Layout';
import { MyAppProps } from '@/interfaces/page.interface';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const DynamicContextProvider = dynamic(
  () =>
    import('@clerk/nextjs/dist/client/index').then((mod) => mod.ClerkProvider),
  {
    ssr: false,
  },
);

const privatePages: Array<string> = ['/account', '/bookings'];

const publicPages: Array<string> = [
  '/',
  '/serviced-offices',
  '/serviced-offices[...index]]',
  '/meeting-rooms',
  '/about-us',
  '/contact-us',
  '/sign-in/[[...index]]',
  '/sign-up/[[...index]]',
  '/404',
];

export default function App({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const isPublicPage = publicPages.includes(router.pathname);
  const isPrivatePage = privatePages.includes(router.pathname);
  const Layout = Layouts[Component.Layout] ?? ((page) => page);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${notoSans.style.fontFamily};
          }
        `}
      </style>
      <DynamicContextProvider
        appearance={{
          variables: {
            colorPrimary: '#f63470',
            colorSuccess: '#2ecc71',
            colorWarning: '#f39c12',
            colorDanger: '#e74c3c',
            fontFamily: 'Noto Sans',
            fontSize: '1.125rem',
          },
        }}
        {...pageProps}
      >
        <Layout>
          {isPublicPage ? (
            <Component {...pageProps} />
          ) : (
            <>
              <SignedIn>
                <Component {...pageProps} />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          )}
        </Layout>
      </DynamicContextProvider>
    </>
  );
}
