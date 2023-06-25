import React from 'react'
import Project from './Project'




/*-------Get-Projects-------*/
const getProjects = async () => {
    const response = await fetch('http://localhost:4000/projects', {cache: "no-store"})
    return response.json()

}


/*-------Projects-Component-------*/
const Projects = async () => {
  const projectsData:Promise<Project[]> = getProjects()
  const projects = await projectsData


  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-3">

      <h1 className='text-2xl'>Peojects</h1>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          projects?.map(project => React.Children.toArray(<Project project={project} />) )
        }
      </div>

    </div>
  )
}

export default Projects