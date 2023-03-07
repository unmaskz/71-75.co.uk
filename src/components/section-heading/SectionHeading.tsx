import React from 'react';

import Markdown from '@/components/markdown/Markdown';
import { Props } from './SectionHeading.interface';
import styles from './SectionHeading.module.scss';

const SectionHeading = ({ heading, subheading, content, alignment = "left" }: Props): JSX.Element => {
    const getAlignmentStyle = (alignment: string): string => {
        switch (alignment) {
            case 'left': return styles.sectionHeading___left;
            case 'right': return styles.sectionHeading___right;
            case 'center': return styles.sectionHeading___center;
            default: return '';
        }
    }

    return (
        <div className={`${styles.sectionHeading} ${getAlignmentStyle(alignment)}`}>
            <h2><Markdown children={heading} /></h2>
            { subheading && <h3><Markdown children={subheading} /></h3> }
            { content && <Markdown children={content} container /> }
        </div>
    );
};

export default SectionHeading;