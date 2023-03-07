const isExternalLink = (link: string): boolean => {
    if (link.match('http') || link.match('mailto') || link.match('tel:') || link.match('.php')) {
        return true;
    }

    return false;
};

export default isExternalLink;
