import Contact from "@/components/Landing/Sections/Contacts";
import IntroductionSection from "@/components/Landing/Sections/Introduction";
import Services from "@/components/Landing/Sections/Services";

const Landing = () => {
  return (
    <div>
      <IntroductionSection />
      <Services />
      <Contact />
    </div>
  );
};

export default Landing;
