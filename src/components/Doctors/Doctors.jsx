"use client"
import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import DoctorCard from "../DoctorCard/DoctorCard";
import Contact from "../Contacts/Contact";
import axios from "axios";


const Doctors = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors`
      );
      setDoctors(res.data.res);
    };
    getDoctors();
  }, []);

  console.log(doctors);
  return (
    <div className="my-16 container mx-auto md:px-32">
      <SectionTitle />
      <div className="grid md:grid-cols-3 gap-5 pb-20">
        {
          doctors.map((doctor)=>{
           return <DoctorCard key={doctor._id} doctor={doctor}/>

          })
        }

      </div>
      <Contact/>
    </div>
  );
};

export default Doctors;
