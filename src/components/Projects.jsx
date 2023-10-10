import { useFetchProjects } from '../utils/fetchProjects';

const Projects = () => {
    const { isLoading, projects } = useFetchProjects();

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section className="projects">
            <div className="title">
                <h2>Projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                {projects.map((project) => {
                    const { title, url, img, id } = project;
                    return (
                        <a href={url} key={id} target='_blank' rel="noreferrer" className='project'>
                            <img src={img} alt={title} className='img' />
                            <h5>{title}</h5>
                        </a>
                    )
                })}
            </div>
        </section >
    )
}

export default Projects