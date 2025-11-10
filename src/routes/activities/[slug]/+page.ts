import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {

    console.log('Loading activity with slug:', params.slug);

	const res = await fetch(`/cms/api/activities?activity=${params.slug}`);
    const data = await res.json();

	if (res.ok) {
		return { data };
	} else {
		throw error(404, 'Wybrane zajęcia nie istnieją');
	}
};