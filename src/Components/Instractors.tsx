'use client'
import { WavyBackground } from "./Ui/wavy-background"
import { AnimatedTooltip } from "./Ui/animated-tooltip";
const instructors = [
    {
      id: 1,
      name: 'Shankar Mahadevan',
      designation: 'Vocal Coach',
      image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zFkLKuLAxQdlFDlPeSn7d8h38-vpRmRVOmNwFshTng&s",
    },
    {
      id: 2,
      name: 'john paul',
      designation: 'Guitar Instructor',
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qG-6g7ylzUX_UaAhVDI76p0itjQqbsqLSaolnYKjZXdE9ySDopCYgRCgsfKsTn63cKM&usqp=CAU"
    },
    {
      id: 3,
      name: 'Abd Sam',
      designation: 'Piano Teacher',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Tanmoy das',
      designation: 'Drumming Expert',
      image:
        "https://static.toiimg.com/photo/69305181.cms"
    },
  ];
function Instractors(){
  return (
    <div className="relative h-[40 rem] overflow-hidden flex items-center p-24 justify-center">
        <WavyBackground className="relative max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                 <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center text-bold">Meet Our Instractors..</h2>
                 <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide you make your future bright.</p>
                 <div className="flex flex-row items-center mb-10 justify-center w-full">
               <AnimatedTooltip items={instructors}/>
                 </div>
        </WavyBackground>
        
    </div>
  )
}

export default Instractors