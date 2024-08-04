import Contact from "@/components/Landing/Sections/Contacts";
import Inserts from "@/components/Landing/Sections/Inserts";
import IntroductionSection from "@/components/Landing/Sections/Introduction";
import Services from "@/components/Landing/Sections/Services";

const Landing = () => {
  return (
    <div>
      <IntroductionSection />
      <Services />
      <Inserts />
      <Contact />
    </div>
  );
};

export default Landing;
