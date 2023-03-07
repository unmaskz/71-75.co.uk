import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';

import { YouTubeVideo } from './components';
import { Props } from './Markdown.interface';

const Markdown = ({ children, container }: Props): JSX.Element => {
    if (container) {
        return (
            <ReactMarkdown
                children={children}
                remarkPlugins={[remarkDirective, remarkDirectiveRehype]}
                components={{
                    'youtube-video': YouTubeVideo
                } as any}
            />
        );
    }

    return (
        <ReactMarkdown
            children={children}
            unwrapDisallowed={true}
            disallowedElements={['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
            remarkPlugins={[remarkDirective, remarkDirectiveRehype]}
            components={{
                'youtube-video': YouTubeVideo
            } as any}
        />
    );
};

export default Markdown;
