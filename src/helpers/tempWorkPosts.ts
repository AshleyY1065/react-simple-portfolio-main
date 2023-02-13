import IWorkPost from "../models/IWorkPost";
import NucampImage from '../assets/work/Nucamp.png';
import PinataPowerImage from '../assets/work/pinatapower.png';
import InstagramDBCloneImage from '../assets/work/instagramdbclone.png';
import GoogleMapsImage from '../assets/work/googlemaps.jpg';
import MosaicStudioScreenImage from '../assets/work/mosaicstudioscreen.png';

export const tempWorkPosts: IWorkPost[] = [
    {
        title: 'NuCamp - Camping Website',
        description: 'Website for discovering and reserving camping sites. Explore our growing database of curated campsites and leave your own reviews!',
        imageUrl: NucampImage,
        websiteUrl: 'https://courageous-semolina-6a02a8.netlify.app/',
    },
    {
        title: 'The Mosaic Studio - Web application development',
        description: 'Revenue Management Labs is a company that develops and executes pricing strategies for its customers.',
        imageUrl: MosaicStudioScreenImage,
        websiteUrl: 'https://tinyurl.com/tmsacm',
        
    },
    {
        title: 'Instagram Database Clone',
        description: 'SQL project that duplicates the database structure of Instagram and is used to perform data analysis to extract insights for real-world business-related questions and scenarios. This project can be valuable for businesses looking to understand their target audience and make informed decisions based on data.',
        imageUrl: InstagramDBCloneImage,
        websiteUrl: 'https://tinyurl.com/igdbclone',
    },
    {
        title: 'City Locations – Django app plug-in',
        description: 'A Django app written in Python that can be used to include city locations easily. This efficient module can be added to any existing project, which optimizes scalability',
        imageUrl: GoogleMapsImage,
        websiteUrl: 'https://tinyurl.com/cityloc',
    },
    {
        title: 'Pinata Power - E-commerce website for pinata business',
        description: 'Pinata Power is static site for a small pinata business built with HTML & CSS',
        imageUrl: PinataPowerImage,
        websiteUrl: 'https://m01.com',
    },
];
