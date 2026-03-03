import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./pages/navbar.jsx";
import About from "./pages/about.jsx";
import Footer from "./pages/footer.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Careers from "./pages/careers.jsx";
import ApplyNow from "./pages/applyNow.jsx";
import Contact from "./pages/contactUs.jsx";
import ProjectDetail from "./components/portfolio/pdfView.jsx";
import Services from "./pages/services.jsx";
import Industries from "./pages/industries.jsx";
import Blog from "./pages/blog.jsx";
import SingleBlog from "./components/blog/singleBlog.jsx";
import SoftwareDevelopment from "./components/services/softwareDevelopment.jsx";
import Fintech from "./components/industries/fintech.jsx";
import Retail from "./components/industries/retail.jsx";
import HealthCare from "./components/industries/healthCare.jsx";
import InformationTech from "./components/industries/informationTech.jsx";
import PropTech from "./components/industries/propTech.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PrivacyPolicy from "./components/privacyPolicyandFAQ/PrivacyPolicy.jsx";
import FAQ from "./components/privacyPolicyandFAQ/faq.jsx";
import "./App.css";

import AIProductDevelopment from "./components/services/AIProductDevelopment.jsx";
import BlockchainProductDevelopment from "./components/services/BlockchainProductDevelopment.jsx";
import WebMobileDevelopment from "./components/services/WebMobileDevelopment.jsx";
import AIAutomation from "./components/services/AIAutomation.jsx";
import WhiteLabelAI from "./components/services/WhiteLabelAI.jsx";
import CustomCompanyGPT from "./components/services/CustomCompanyGPT.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <div className="snap-scroll-root pt-24 px-0 sm:px-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply-now" element={<ApplyNow />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route
            path="/services/development-service"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/services/ai-product-development"
            element={<AIProductDevelopment />}
          />
          <Route
            path="/services/blockchain-product-development"
            element={<BlockchainProductDevelopment />}
          />
          <Route
            path="/services/web-mobile-development"
            element={<WebMobileDevelopment />}
          />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/white-label-ai" element={<WhiteLabelAI />} />
          <Route
            path="/services/custom-company-gpt"
            element={<CustomCompanyGPT />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/fintech" element={<Fintech />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/health-care" element={<HealthCare />} />
          <Route path="/information-tech" element={<InformationTech />} />
          <Route path="/proptech" element={<PropTech />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
