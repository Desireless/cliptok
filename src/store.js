import { readable, writable } from 'svelte/store';


export const videoStatus = writable('idle');
export const videoURL = writable(null);
export const videoInfo = writable({
    secure_url: '',
    url: '',
    filename: '',
    framerate: '',
    format: '',
    duration: '',
    width: '',
    height: '',
    public_id: '',
});
export const videoTransformed = writable(null);
export const videoTypeSelected = writable('valorant_kills');
