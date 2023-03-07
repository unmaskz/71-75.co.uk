import HomeLayout from '@/components/layouts/home/HomeLayout';
import MainLayout from '@/components/layouts/main/MainLayout';
import AccountLayout from '@/components/layouts/account/AccountLayout';

export const Layouts = {
  Home: HomeLayout,
  Main: MainLayout,
  Account: AccountLayout,
};

export type LayoutKeys = keyof typeof Layouts;
