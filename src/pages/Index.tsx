import Hero from "@/components/Hero";
import ProjectDescription from "@/components/ProjectDescription";
import BusinessModel from "@/components/BusinessModel";
import InvestmentConditions from "@/components/InvestmentConditions";
import InvestmentForm from "@/components/InvestmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectDescription />
      <BusinessModel />
      <InvestmentConditions />
      <InvestmentForm />
      <Footer />
    </div>
  );
};

export default Index;
