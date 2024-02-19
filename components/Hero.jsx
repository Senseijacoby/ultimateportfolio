"use client";

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";

import DevImg from "./DevImg";
import { Download, Send } from "lucide-react";

import SocialsInfo from "./SocialsInfo";
import { Button } from "./ui/button";
import Link from "next/link";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text content  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              web Developer
            </div>
            <h1 className="h1 mb-4">hello my name is Kuntakinte</h1>
            <p className="subtitle mx-auto xl:mx-0 max-w-[490px]">
              Brief description of my professional journey, and what I engage in
              professionally.
            </p>

            {/* Button items */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/Contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send className="text-primary" size={18} />
                </Button>
              </Link>

              <Button variant="secondary" className="gap-x-2">
                Download CV
                <Download className="text-primary" size={18} />
              </Button>
            </div>
            {/* socialinfo */}
            <SocialsInfo
              containerStyles="flex xl:mx-0 gap-x-6 mx-auto"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* image  */}
          <div className="hidden xl:flex relative ">
            {/* badge#1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              endCountNum={5}
              badgeText="Years Of Experience"
              icon={<RiBriefcase4Fill />}
            />
            {/* badge#2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              endCountNum={5}
              endCountText="+K"
              badgeText="Finished Projects"
              icon={<RiTodoFill />}
            />
            {/* badge#3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              endCountNum={9}
              endCountText="+K"
              badgeText="Happy Clients"
              icon={<RiTeamFill />}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.jpg"
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/3 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
