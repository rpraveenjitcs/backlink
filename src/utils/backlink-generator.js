import {hosts} from './hosts';

export const generateBacklink = (url) => {
    const videoId = extractVideoId(url)
    const backlinks = [];
    hosts.forEach((host)=> {
        backlinks.push(host.concat(videoId));
    });
    return backlinks;
}

 const extractVideoId = (url) => {
    return (url.split('?v='))[1];
}