import React from 'react';

import { Props } from './YouTubeVideo.interface';

const YouTubeVideo = ({ id, children, width, height }: Props) => (
    <iframe src={`https://www.youtube.com/embed/${id}`} width={width} height={height}>
        {children}
    </iframe>
);

export default YouTubeVideo;
