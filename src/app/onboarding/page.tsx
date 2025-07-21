import Image from "next/image";
import React from "react";

function OnboardingPage() {
  return (
    <div className="px-10 sm:px-20 lg:px-30 flex max-md:flex-col h-full min-h-screen ">
      <div className="flex flex-col justify-start  space-y-8 mt-10">
        <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%]">
          Hotel, car &amp; experiences
        </h2>
        <div className="max-w-2xl">
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </span>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-3 text-lg font-medium w-fit transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
          Start your search
        </button>
      </div>
      <div className=" md:w-[50%] py-3">
        <Image src={"/images.png"} alt="Onboarding Image" height={600} width={600} />
      </div>
    </div>
  );
}

export default OnboardingPage;
