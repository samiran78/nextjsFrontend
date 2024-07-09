'use client'
import Link from "next/link"
import { HoverEffect } from "@/Components/Ui/card-hover-effect";
export const featuredWebinars = [
    {
        title: "Understanding Music Theory",
        description:
            "Dive deep into the fundamentals of music theory and enhance your musical skills.",
        slug: "understanding-music-theory",
        isFeatured: true,
    },
    {
        title: "The Art of Songwriting",
        description:
            "Learn the craft of songwriting from experienced musicians and songwriters.",
        slug: "the-art-of-songwriting",
        isFeatured: true,
    },
    {
        title: "Mastering Your Instrument",
        description:
            "Advanced techniques to master your musical instrument of choice.",
        slug: "mastering-your-instrument",
        isFeatured: true,
    },
    {
        title: "Music Production Essentials",
        description:
            "Get started with music production with this comprehensive overview.",
        slug: "music-production-essentials",
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: "Live Performance Techniques",
        description:
            "Enhance your live performance skills with expert tips and strategies.",
        slug: "live-performance-techniques",
        isFeatured: true,
    },
    {
        title: "Digital Music Marketing",
        description:
            "Learn how to promote your music effectively in the digital age.",
        slug: "digital-music-marketing",
        isFeatured: true,
    },
];
function UpcomingWebners() {
    return (
        <div className="p-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center ">
                    <h1 className="text-base text-orange-500 font-bold  tracking-wide uppercase">OUR FEATURED WEBINARS</h1>
                    <p className="text-3xl text-rose-100 font-extrabold  tracking-wide uppercase">Enhance your musicial journey!!</p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                    items={featuredWebinars.map(i=>(
                        {
                            title:i.title,
                            description:i.description,
                            slug:i.slug,
                            link:"/",
                        }
                  ))}
                    />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"}>
                        <button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Webinars</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default UpcomingWebners