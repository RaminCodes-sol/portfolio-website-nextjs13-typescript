import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'



type Props = {
  params: {
    projectId: string
  }
}


/*--------Get-Project-Details--------*/
const getProjectDetails = async (projectId: string) => {
  const response = await fetch(`http://localhost:4000/projects/${projectId}`)
  return response.json()
}


/*--------Generate-Metadata--------*/
export const generateMetadata = async ({ params: { projectId }}: Props): Promise<Metadata> => {
  const projectData:Promise<Project> = getProjectDetails(projectId)
  const project = await projectData
  
  return {
    title: `${project.name}`
  }
}


/*--------Project-Page--------*/
const page = async ({ params: { projectId }}: Props) => {
  const projectDetaisData:Promise<Project> = getProjectDetails(projectId)
  const projectDetails = await projectDetaisData


  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-[500px] mt-10 flex flex-col items-center'>

        {/*-----Image-----*/}
        <Image src='/images/steve-johnson.jpg' alt='img' width={200} height={200} className='w-full' />

        {/*-----Name-----*/}
        <h1 className='text-2xl mt-2'>{projectDetails.name} Project</h1>

        {/*-----Languages-----*/}
        <div className='flex mt-2'>
          { 
            projectDetails.languages?.map((language, index) => {
              return (
                <>
                  <code className='text-[.8rem] text-gray-400'>{language}</code>
                  { index !== projectDetails.languages.length - 1 && <span className='text-gray-400'>&nbsp;-&nbsp;</span> }
                </>
              )
            })
          }
        </div>

        {/*-----Description-----*/}
        <p className='text-center mt-1'>{projectDetails.description}</p>

      </div>
    </div>
  )
}

export default page