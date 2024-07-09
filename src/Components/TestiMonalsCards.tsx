'use client'
import { InfiniteMovingCards } from "./Ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Samiran Royy',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Raj Mondal',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my skills for playing violin to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Maithili CHAKROBORTY.',
      title: 'Violin Student',
    },
    {
      quote:
        'As a vocalist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Ankit ghosh',
      title: 'Vocal Student',
    },
    {
      quote:
        'The production courses here opened for enrich the power of melody of guiters!',
      name: 'Abhijit Bala',
      title: 'Lead Guiterist',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Imon Pal',
      title: 'Music Production Student',
    },
  ];

function TestiMonalsCards () {
  return (
    <div className="h-[40 rem] p-14 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl bold text-center font-bold mb-8 z-10">Hear Our Harmony: Voices of success</h2>
      <div>
        <div>
          <InfiniteMovingCards items={musicSchoolTestimonials} direction="right" speed="slow"/>
        </div>
      </div>
    </div>
  )
}

export default TestiMonalsCards

// Noticie: the grid poperty have to set it can't activate by default. we have to install  mini-svg-data-uri from Grid-background-dot .