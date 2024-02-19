'use client'
import React, { useState } from 'react'
import { Tabs,TabsList,TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'
import { projectsData } from '@/lib/constants'
import { TabsContent } from '@radix-ui/react-tabs'

const uniqueCategories = [
  'all projects',
  ... new Set(projectsData.map((item) => item.category)),
]

export default function Projects ()  {
  const [categories,setCategories] =useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const selectedProjects = projectsData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  });
  return (
   <section className='min-h-screen pt-12'>
     <div className='container mx-auto'>
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My projects</h2>
      {/* tabs */}
      <Tabs
      className='mb-24 xl:mb-48'
       defaultValue={category}
       >
         <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
          {categories.map((category,index)=>{
            return (
              <TabsTrigger
              value={category}
               key={index} 
               className='w-[162px] capitalize md:w-auto'
               onClick={() => setCategory(category)}
               >
                {category}
              </TabsTrigger>
            )
          })}
         </TabsList>
         {/* tabs content */}
         <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {selectedProjects.map((project,index)=>{
            return <TabsContent>
              <ProjectCard project={project} key={index} />
            </TabsContent>
          })}
         </div>

      </Tabs>
     </div>
   </section>
  )
}

