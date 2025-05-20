import React from "react";
import Hero from "../components/Hero";
import MissionCard from "../components/MissionCard";
import ContactMini from "../components/ContactMini";
import RecentPictures from "../components/RecentPictures";
import Map from "../components/Map";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ContactMini />
      <div className="mb-[5em] mt-[2em] md:mt-10 lg:mt-10 lg:mb-10 gap-[10px] md:flex md:flex-wrap lg:w-4xl lg:m-auto">
        <MissionCard
          title="Our Mission"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.Lorem ipsum dolor sit amet consectetur adipiscing elit."
        />
        <MissionCard
          title="Our Purpose"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.Lorem ipsum dolor sit amet consectetur adipiscing elit."
        />
        <MissionCard
          title="Our Promise"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.Lorem ipsum dolor sit amet consectetur adipiscing elit."
        />
      </div>
      <RecentPictures />
      <Map />
    </>
  );
};

export default HomePage;
