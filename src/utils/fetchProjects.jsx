import { createClient } from 'contentful'
import { useState, useEffect } from 'react';

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master',
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
});

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({content_type: 'projects'});
            const projects = response.items.map((item) => {
                const {title, url, image} = item.fields;
                const id = item.sys.id;
                const img = image.fields.file.url;
                // console.log(title, url, img, id);
                return {title, url, img, id}
            })
            setProjects(projects);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    },[]);

    return {isLoading, projects}
}