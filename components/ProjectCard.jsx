'use client'
import Link from "next/link"
import {Github,Link2Icon}from 'lucide-react'
import { Card,CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"
const ProjectCard = ({project}) => {
  return (
    <Card className="relative overflow-hidden group">
        <CardHeader className="p-0">
          {/* image */}
          <div className="relative w-full h-[300px] flex justify-center items-center bg-tertiary dark:bg-secondary/40  xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
            <Image
            className="absolute bottom-0 shadow-2xl"
             src={project.image}
             width={247}
             height={250}
              alt=''
              priority
               />
               {/* buttons */}
               <div className="flex gap-x-4">
                <Link
                href={project.link}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                >
                <Link2Icon className="text-white"/>
                </Link>
                 <Link
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                >
                <Github className="text-white"/>
                </Link>
               </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
            <Badge className="mb-2 text-sm uppercase font-medium absolute top-4 left-5">
              {project.category}
            </Badge>
            <h4>
                {project.name}
            </h4>
            <p>
                {project.description}
            </p>
        </div>
    </Card>
  )
}

export default ProjectCard