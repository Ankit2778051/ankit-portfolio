

import * as React from "react";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

import { educations } from "@/utils/data/educations";
import lottieFile from "../../../assets/lottie/study.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <section
      id="education"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <Image
        src="/section.svg"
        alt="Education Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      {/* Top Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      {/* Section Heading */}
      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]" />
          <span className="rounded-md bg-[#1a1443] px-5 py-2 text-xl text-white">
            Educations
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Lottie Animation */}
          <div className="flex items-start justify-center">
            <div className="h-3/4 w-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Cards */}
          <div className="flex flex-col gap-6">
            {educations?.map((education) => (
              <GlowCard
                key={education.id}
                identifier={`education-${education.id}`}
              >
                <div className="relative p-3 text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Card Background"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />

                  <div className="flex justify-center">
                    <p className="text-xs text-[#16f2b3] sm:text-sm">
                      {education.duration}
                    </p>
                  </div>

                  <div className="flex items-center gap-8 px-3 py-5">
                    <div className="text-violet-500 transition-transform duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>

                    <div>
                      <h3 className="mb-2 text-base font-medium uppercase sm:text-xl">
                        {education.title}
                      </h3>
                      <p className="text-sm sm:text-base">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;