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
    <div className="relative">
      {/* Background Blobs */}
      <div className="absolute  inset-0 -z-10 flex gap-10 pt-44">
        <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
      </div>

      {/* Foreground Content */}
      <main>
        <section className="min-h-screen flex justify-between px-6">
          <div className="w-[40%] flex pt-14 flex-col">
            <h2
              className=" text-4xl  mb-4 md:text-5xl xl:text-7xl !leading-[114%]"
              style={{ fontWeight: "400" }}
            >
              Hotel, car &amp; experiences
            </h2>
            <span className="text-base md:text-lg pt-8  text-neutral-500 dark:text-neutral-400">
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels
            </span>
            <Button size={""} className="mt-6  p-6 w-44">
              Search Now
            </Button>
          </div>
          <div className="w-[60%] h-full flex justify-end pt-10">
            <Image src={"/image.png"} width={600} height={400} alt="" />
          </div>
        
        </section>

        <section className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">This is the next section</h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
