import Accounting from "../assets/Accounting.png";
import ProductManagement from "../assets/ProductManagement.png";
import Legal from "../assets/Legal.png";
import WebAndMobileDevelopment from "../assets/WebAndMobileDevelopment.png";
import ArchitecturalDesign from "../assets/ArchitecturalDesign.png";
import Research from "../assets/Research.png";
import WritingAndEditing from "../assets/WritingAndEditing.png";
import StrategyConsulting from "../assets/StrategyConsulting.png";
import ProjectManagement from "../assets/ProjectManagement.png";
import RiskAnalysis from "../assets/RiskAnalysis.png";
import DigitalMarketing from "../assets/DigitalMarketing.png";
import GraphicsDesign from "../assets/GraphicsDesign.png";
// import React from 'react'

const boxesData = [
  { name: "Accounting", icon: Accounting },
  { name: "Product Management", icon: ProductManagement },
  { name: "Legal", icon: Legal },
  { name: "Web & Mobile Development", icon: WebAndMobileDevelopment },
  { name: "Architectural Design", icon: ArchitecturalDesign },
  { name: "Research", icon: Research },
  { name: "Writing And Editing", icon: WritingAndEditing },
  { name: "Strategy Consulting", icon: StrategyConsulting },
  { name: "Project Management", icon: ProjectManagement },
  { name: "Risk Analysis", icon: RiskAnalysis },
  { name: "Digital Marketing", icon: DigitalMarketing },
  { name: "Graphics Design", icon: GraphicsDesign },
];

export default function Service() {
  return (
    <div className="font-Inter">
      <div className="lg:w-[66%] mx-10 lg:mx-auto py-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-blackText">
          Services curated for <span className="font-medium italic">You</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 py-20">
          {boxesData.map((list, boxIndex) => (
            <div
              key={boxIndex}
              className="flex flex-col sm:flex-row justify-center sm:justify-start items-center"
            >
              <img src={list.icon} alt="Accounting" />
              <p className="text-xs bg-bgBlue py-1 px-2 rounded-full text-center">
                {list.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
