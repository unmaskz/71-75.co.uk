import { ReactNode, CSSProperties } from 'react';

export interface Props {
    id?: any;
    children: ReactNode;
    className?: string;
    container?: boolean;
    style?: CSSProperties;
    colour?: string;
}
