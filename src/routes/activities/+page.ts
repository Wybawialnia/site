import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch('/cms/api/activities');
    if (res.ok) {
        const data = await res.json();
        return { data: data.classesData };
    } else {
        return { status: res.status, error: new Error('Could not load activities') };
    }

    
}) satisfies PageLoad;