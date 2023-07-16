import React from "react";
import Image from "next/image";
import WorkTogether from "./myProjects/workTogether";
import Project from "./myProjects/project";

export default function MyProjects() {
  return (
    <div className="my-projects-container">
      <div className="content">
        <div className="top-flex-row">
          <p className="title">My Projects.</p>
          <p className="description">
            I have built innovative mobile, Web2, and Web3 applications across
            multiple industries, mastering the art of creating user-friendly
            solutions.
          </p>
        </div>
        <div className="projects-container">
          <Project
            title="Isekai Meta"
            role={"Co-founder & CTO"}
            src="/assets/projects/isekaiMeta.png"
          />
          <Project
            title="Voleious"
            role={"Founder"}
            src="/assets/projects/voleious.png"
          />
          <Project
            title="DigiSevn Delivery"
            role={"Mobile Developer"}
            src="/assets/projects/digiSevn.png"
          />
          <Project
            title="onBoard"
            role={"Full-Stack Developer"}
            src="/assets/projects/onBoard.png"
          />
        </div>
        <WorkTogether />
      </div>
    </div>
  );
}
