import sanityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'mzfn4utv',
    dataset: 'production',
    apiVersion: '2022-08-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client)

// Access to the URLS where the images are stored
export const urlFor = (source) => builder.image(source);