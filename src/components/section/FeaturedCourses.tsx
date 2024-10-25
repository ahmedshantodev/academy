"use client";
import { BackgroundGradient } from "../ui/background-gradient";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import course_data from "../../data/courses_data.json";
import Link from "next/link";

const FeaturedCourses = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: Boolean;
    image: string;
  }

  const courses = course_data.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <BackgroundBeamsWithCollision>
      <section className="py-10 sm:py-0 md:py-16 sm:pb-5 lg:pb-0 relative z-20 container px-4 sm:px-0">
        <div className="text-center">
          <p className="text-[#29837d] font-bold text-sm lg:text-lg">FEATURED COURSES</p>

          <h1 className="mt-2 md:mt-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 font-bold tracking-tight text-white">
            Learn With the Best
          </h1>
        </div>

        <div className="flex flex-wrap gap-5 xl:gap-10 mt-5 md:mt-7 lg:mt-10 xl:mt-16">
          {courses.map((course: Course, index) => (
            <div key={course.id} className="w-full sm:w-[48%] lg:w-[31%]">
              <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-7 bg-white dark:bg-zinc-900">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[200px] xl:h-[300px] object-cover rounded-t-[10px]"
                />

                <p className="text-base sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {course.description}
                </p>

                <Link href={`/courses/${course.slug}`}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center courses-center space-x-1 bg-black mt-4 text-xs sm:text-sm font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] sm:text-sm px-2 py-0 sm:py-1 sm:px-3 text-white">
                      {course.price}
                    </span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>

        <div className="text-center mt-7 md:mt-14">
          <Link href={"/"} className="inline-block w-[180px] md:w-[250px] mx-auto">
            <BackgroundGradient>
              <button className="w-full bg-[#18181b] text-white py-2 md:py-3 rounded-[20px] text-sm md:text-lg">
                Explore Courses
              </button>
            </BackgroundGradient>
          </Link>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default FeaturedCourses;
