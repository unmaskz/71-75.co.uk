import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  size?: string;
  role?: string;
  block?: boolean;
  className?: string;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}
