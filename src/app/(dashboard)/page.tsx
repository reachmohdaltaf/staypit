"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative ">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 flex gap-10 pt-44">
        <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
      </div>

      {/* Foreground Content */}
      <main>
        <section className="min-h-screen flex flex-col md:flex-row justify-between  px-2 sm:px-6 lg:px-10">
          {/* Left Content */}
          <div className="w-full lg:w-[40%]  flex pt-10 md:pt-10 flex-col items-start  md:text-left">
            <h2
              className="text-7xl sm:text-7xl md:text-7xl xl:text-7xl mb-4 !leading-[114%]"
              style={{ fontWeight: "400" }}
            >
              Hotel, car &amp; experiences
            </h2>
            <span className="text-sm   sm:text-base md:text-lg pt-4 text-neutral-500 dark:text-neutral-400">
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels
            </span>
            <Button className="mt-6 px-4 py-3 sm:p-6 w-full sm:w-44">
              Search Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[60%] h-full hidden lg:flex justify-center md:justify-end pt-6 lg:pt-10">
            <Image
              src="/image.png"
              width={600}
              height={400}
              alt=""
              className="w-full max-w-md sm:max-w-lg lg:max-w-none"
            />
          </div>
        </section>

        <section className="h-screen flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            This is the next section
          </h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
