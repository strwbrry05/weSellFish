import ContactMini from "./components/ContactMini";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MissionCard from "./components/MissionCard";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ContactMini />
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
      <Footer />
    </>
  );
}

export default App;
