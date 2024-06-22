import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import DoctorCard from "../DoctorCard/DoctorCard";
import Contact from "../Contacts/Contact";


const Doctors = () => {
  return (
    <div className="my-16 container mx-auto md:px-32">
      <SectionTitle />
      <div className="grid md:grid-cols-3 gap-5 pb-20">
        <DoctorCard/>
        <DoctorCard/>
        <DoctorCard/>
      </div>
      <Contact/>
    </div>
  );
};

export default Doctors;
