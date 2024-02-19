"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import ProjectCard from "./ProjectCard";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { projectsData } from "@/lib/constants";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto ">
        {/* texts detail */}
        <div className="bg-pink-100 max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col items-center justify-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="mb-8 subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos?
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] bg-pink-100"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              // 1024: {
              //   slidesPerView: 3,
              // },
            }}
            spaceBetween={30}
            modules={Pagination}
            pagination={{
              clickable: true,
            }}
          >
            {/* initials 4 projects */}
            {projectsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
