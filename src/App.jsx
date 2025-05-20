import ContactMini from "./components/ContactMini";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Hero from "./components/Hero";
import Map from "./components/Map";
import MissionCard from "./components/MissionCard";
import Navigation from "./components/Navigation";
import RecentPictures from "./components/RecentPictures";
import "./index.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
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
      {/* <Products title="Our Fresh Products" number={6} />
      <Products title="Our Frozen Products" number={24} /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
