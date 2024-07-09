import Link from "next/link";
import { Spotlight } from "../Ui/Spotlight";
import { Button } from "../Ui/moving-border";
const HeroSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
              <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
            <div className="p-4 relative z-10 w-full text-center">
                <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master The Art of Music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"> How beautiful would it be if our schools and our education program showed how music is a combination of many different cultures, and cultures are an expression of many kinds of music? There’s a lot for our students, not only from a musical perspective, but also from a global perspective and in showing them how they fit in as part of a bigger world. </p>

            </div>
            <div className="mt-4">
                <Link href={"/courses"}>
                <button
            
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <Button borderRadius="1.78rem">
                        Explore our courses..
                        </Button>
                    
                </button>
                     
                </Link>

            </div>

        </div>
    )
}

export default HeroSection