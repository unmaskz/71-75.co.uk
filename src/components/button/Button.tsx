import React from 'react';
import Link from 'next/link';

import isExternalLink from '@/utils/external-check';
import { Props } from './Button.interface';
import styles from './Button.module.scss';

export default ({ to, children, size = '', role = '', className, block, type = 'button', onClick, ...props }: Props): JSX.Element => {
    const blockClass = block !== undefined ? styles.button___block : '';

    const getRoleClass = (role: string) => {
        switch (role) {
            case 'primary':
                return styles.button___primary;
            case 'secondary':
                return styles.button___secondary;
            case 'success':
                return styles.button___success;
            case 'warning':
                return styles.button___warning;
            case 'danger':
                return styles.button___danger;
            case 'text':
                return styles.button___text;
            default:
                return '';
        }
    };

    const getSizeClass = (size: string) => {
        switch (size) {
            case 'small':
                return styles.button___small;
            case 'large':
                return styles.button___large;
            default:
                return '';
        }
    };

    if (to !== undefined) {
        if (isExternalLink(to)) {
            return (
                <a className={`${styles.button} ${className} ${blockClass} ${getSizeClass(size)} ${getRoleClass(role)}`} href={to} onClick={onClick} target="_blank" rel="nofollow noreferrer noopener">
                    {children}
                </a>
            );
        }
        return (
            <Link href={to} className={`${styles.button} ${className} ${blockClass} ${getSizeClass(size)} ${getRoleClass(role)}`} onClick={onClick} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${styles.button} ${className} ${blockClass} ${getSizeClass(size)} ${getRoleClass(role)}`} onClick={onClick} type={type} {...props}>
            {children}
        </button>
    );
};
