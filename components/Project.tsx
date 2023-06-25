import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


type Props = {
  project: Project
}



const Project = ({ project }: Props) => {


  return (
    <Link href={`/project/${project.id}`} className='flex flex-col p-3 transition-all duration-[.3s] grayscale hover:grayscale-0'>
      
      {/*------Image------*/}
      <Image src="/images/steve-johnson.jpg" alt='img' width={200} height={300} className='object-cover w-full' />
      
      {/*------Title------*/}
      <h1 className='mt-2'>{project.name}</h1>
      
      {/*------Languages------*/}
      <div className='flex mt-2'>
        { 
          project.languages?.map((language, index) => {
            return (
              <>
                <code className='text-[.8rem] text-gray-400'>{language}</code>
                { index !== project.languages.length - 1 && <span className='text-gray-400'>&nbsp;-&nbsp;</span> }
              </>
            )
          })
        }
      </div>

    </Link>
  )
}

export default Project