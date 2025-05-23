"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/ThreeDCardEffect";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-0 md:gap-16 mt-10">
        {projects.map((item) => (
          <CardContainer
            className="rounded-lg flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <CardBody>
              <CardBody className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[33vh] mb-5 lg:mb-10">
                <Link href={item.link} target="_blank" about={item.title}>
                  <CardItem
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </CardItem>

                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </Link>
              </CardBody>

              <CardItem>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
              </CardItem>
              <CardItem>
                <p
                  className="md:text-xl lg:font-normal font-light text-sm line-clamp-3"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
              </CardItem>
              <div className="flex items-center justify-between mt-7 mb-3">
                <CardItem className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </CardItem>

                <CardItem className="flex justify-center items-center gap-3">
                  <a
                    className="flex md:text-xl text-sm text-purple"
                    href={`${item.link}`}
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <a
                    className="flex md:text-xl text-sm text-purple"
                    href={`${item.githubLink}`}
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
