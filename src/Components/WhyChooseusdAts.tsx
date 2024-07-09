"use client";
import React from "react";
import { StickyScroll } from "../Components/Ui/sticky-scroll-reveal";
import Image from "next/image";
const musicschoolevent = [
    {
      title: "Concerts",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Gig Concerts..
        </div>
      ),
    },
    {
      title: "Film Screenings",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
          <p>Analog Film NYC: Wings of Desire (1987) on April 16 at 9:15 PM, Purple Noon (1960) on April 17 at 1:00 PM 
</p>
        </div>
      ),
    },
    {
      title: "Language and Music Fusion",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Language and Music Fusion..
        </div>
      ),
    },
    {
      title: "Collaborative Projects",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          coke studio jamming seasons
        </div>
      ),
    },
  ];

function WhyChooseusdAts(){
  return (
    <div>
        <StickyScroll content={musicschoolevent} />
    </div>
  )
}

export default WhyChooseusdAts