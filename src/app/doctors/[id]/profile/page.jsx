"use client";
import PageCover from "@/components/PageCover/PageCover";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiLocationOn } from "react-icons/ci";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import axios from "axios";

const DoctorProfile = ({ params }) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const getDoctor = async () => {
      const id = await params.id;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors/${id}`
      );
      setDoctor(res.data.result);
    };
    getDoctor();
  }, [params.id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 w-full h-full pb-20">
      <PageCover />
      <div className="container mx-auto md:px-32">
        <div className="grid md:grid-cols-5 bg-white my-20 p-5 rounded-md gap-10">
          <div className="md:col-span-2">
            <Image
              className=""
              src={doctor.profile_image}
              height={200}
              width={400}
              alt="tablet"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-between gap-2">
            <h1 className="text-2xl font-semibold">{doctor.name}</h1>
            <p>{doctor.qualifications}</p>
            <div className="flex items-center">
              <Rating
                style={{ maxWidth: 120 }}
                readOnly
                value={doctor.rating}
              />
              <span>({doctor.reviews_count})</span>
            </div>
            <div className="flex items-center gap-3">
              <CiLocationOn />
              <div>{doctor.location.address}</div>
            </div>
            <div className="">
              <div className="md:w-1/2 grid grid-cols-3 md:grid-cols-6 gap-1 my-10">
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
              </div>
            </div>
            <div className="space-x-3 my-5 flex justify-center items-center md:justify-start">
              <Button
                variant="bordered"
                color="warning"
                size="sm"
                className="border-1"
              >
                Dental Filling
              </Button>
              <Button
                variant="bordered"
                color="warning"
                size="sm"
                className="border-1"
              >
                Teeth Whitening
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-md">
          <Tabs
            color="warning"
            variant="solid"
            radius="none"
            size="lg"
            aria-label="Dynamic tabs"
            items={doctor.otherInfo}
            className="w-full mx-auto grid grid-cols-1"
          >
            {item => (
              <Tab key={item.id} title={item.label}>
                <div>
                  {item.id === "overview" && (
                    <div>
                      <div className="my-10">
                        <h2 className="text-2xl my-10 font-semibold">
                          About Me
                        </h2>
                        <p>
                          {item.overView.about}
                          {item.overView.about}
                        </p>
                      </div>
                      <div className="grid md:grid-cols-4">
                        <div className="md:col-span-2 space-y-3">
                          <h2 className="text-xl font-semibold">Education</h2>
                          <ul className="list-disc ml-5 space-y-3">
                            {item.overView.education.map((edu, index) => (
                              <>
                                <li key={index}>
                                  {edu.institution} ({edu.years}) - {edu.degree}
                                </li>
                                <li key={index}>
                                  {edu.institution} ({edu.years}) - {edu.degree}
                                </li>
                                <li key={index}>
                                  {edu.institution} ({edu.years}) - {edu.degree}
                                </li>
                              </>
                            ))}
                          </ul>
                          <h2 className="text-xl font-semibold my-10">
                            Work Experience
                          </h2>
                          <ul className="list-disc space-y-3 ml-5">
                            {item.overView.work_experience.map((exp, index) => (
                              <>
                                {" "}
                                <li key={index}>
                                  {exp.institution} ({exp.years}) -{" "}
                                  {exp.position}
                                </li>
                                <li key={index}>
                                  {exp.institution} ({exp.years}) -{" "}
                                  {exp.position}
                                </li>
                                <li key={index}>
                                  {exp.institution} ({exp.years}) -{" "}
                                  {exp.position}
                                </li>
                              </>
                            ))}
                          </ul>
                          <h3 className="text-xl font-semibold">
                            Specializations
                          </h3>
                          <ul className="ml-5 list-disc space-y-3">
                            {item.overView.specializations.map(
                              (spec, index) => (
                                <li key={index}>{spec}</li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="md:col-span-2 space-y-3">
                          <h3 className="text-xl font-semibold mt-4 md:mt-0">Awards</h3>
                          <ul className="list-disc ml-5 space-y-3">
                            {item.overView.awards.map((award, index) => (
                              <>
                                <p>{award.date}</p>
                                <li key={index}>
                                  {award.name} - {award.description} (
                                </li>
                                <p>{award.date}</p>
                                <li key={index}>
                                  {award.name} - {award.description} (
                                </li>
                                <p>{award.date}</p>
                                <li key={index}>
                                  {award.name} - {award.description} (
                                </li>
                                <p>{award.date}</p>
                                <li key={index}>
                                  {award.name} - {award.description} (
                                </li>
                              </>
                            ))}
                          </ul>

                         
                        </div>
                      </div>
                    </div>
                  )}
                  {item.id === "review" && <div>Review</div>}
                  {item.id === "location" && (
                    <div>
                      <p>
                        <strong>Address:</strong> {item?.location?.address}
                      </p>
                      <p>
                        <strong>Phone:</strong> {item?.location?.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {item?.location?.email}
                      </p>
                      <p>
                        <strong>Map:</strong>{" "}
                        <a
                          href={item.location.map}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Map
                        </a>
                      </p>
                    </div>
                  )}

                  {item.id === "bussiness" && (
                    <div>
                      <h3>Business Hours</h3>
                      <ul>
                        {Object.entries(item.business_hours).map(
                          ([day, hours], index) => (
                            <li key={index}>
                              <strong>
                                {day.charAt(0).toUpperCase() + day.slice(1)}:
                              </strong>{" "}
                              {hours}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
