'use client'
import Link from "next/link";
import courseData from "../data/musiccourses.json";
import { BackgroundGradient } from "./Ui/background-gradient";
//here we have to make our own datatype....  
interface course{
        id: number,
      title: string ,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean , 
}
function FeaturedCourses ()  {
  //here we used filter in case of mapping coz, we only have to access those courses whose isfeatured is true..
  const featuredcoursess = courseData.courses.filter((course:course) => course.isFeatured === true);
  return (
    <div className="py-12 bg-orange-950"> 
    <div className="text-center"><h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">Featured Courses</h2>
    <p className="mt-2 text-3xl leading-3 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the best...Melody means Peace.</p>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredcoursess.map((course:course)=>(
         <div key={course.id} className="flex justify-center">
               <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-3 mb-5 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 flex-grow-0 ">{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>
                  </Link>
                </div>
               </BackgroundGradient>
         </div>
        ))}
      </div>
    </div>
    <div className="mt-20 text-center">
      <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-500 text-neutral-700 bg-white hover:bg-gray-100 transition-all duratiom-200">
        View All Courses
      </Link>
    </div>
    </div>
   
  );
};

export default FeaturedCourses