"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>FIREBASE</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>MySQL</li>
        <li>PowerBI</li>
        <li>EXCEL</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="text-white-500">Punjab Engineering College (Deemed to be University), Chandigarh</span>
          <br />
          <span className="text-gray-500">~Bachelor of Technology (B.Tech), Electrical Engineering</span>
          <br />
          <span className="text-gray-500">~2021-2025</span>
        </li>
        <li>
          <span className="text-white-500">Government Model Senior Secondary School, Chandigarh</span>
          <br />
          <span className="text-gray-500">~12th CBSE, Non-Medical (2021)</span>
          <br />
          <span className="text-gray-500">~95.4%</span>
        </li>
        <li>
          <span className="text-white-500">DAV Senior Secondary Public School, Panchkula</span>
          <br />
          <span className="text-gray-500">~10th CBSE (2019)</span>
          <br />
          <span className="text-gray-500">~95.2%</span>
        </li>
      </ul>
    ),
  }
  ,
  {
    title: "Certifications/Social-service",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Crash Course on Python by Google, Coursera</li>
        <li>SQL for Data Science, Coursera</li>
        <li>NSS CHANDIGARH,2 YEARS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
        I am driven to make impactful contributions. Throughout my academic journey, I've secured top scores, achieving 95.2% in Class 10 and 95.4% in Class 12, showcasing my commitment to excellence. I am honing my skills and knowledge to tackle real-world challenges effectively. My internship at Mondelēz International further enriched my Real World experience, where I spearheaded projects such as motor identification and the development of a digital platform for engineers. I possess strong analytical abilities and excellent communication skills. Moreover, I excel in delivering compelling presentations, leveraging my exceptional presentation capabilities to effectively convey ideas and solutions. I am eager to leverage my skills and experiences to drive innovation and make a positive impact.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;