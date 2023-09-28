import React from "react";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPencilAlt,
  FaSnapchatGhost,
  FaTools,
  FaTwitter,
} from "react-icons/fa";

import ProfileInfoCard from "@/components/molecules/ProfileInfoCard";
import CalenderMolecule from "@/components/molecules/CalenderMolecule";
import ScheduleAtom from "@/components/atoms/ScheduleAtom";
import FeedQuestion from "@/components/atoms/FeedQuestion";

const Profile = () => {
  return (
    <>
      {/* Header */}
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>

      {/* Profile Card */}
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <section className="p-4 flex flex-col">
          <div className="flex flex-col">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80"
                  alt="bruce-mars"
                  size="xl"
                  className="rounded-full shadow-md shadow-blue-gray-500/40 h-24 w-24"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    Kaviru Happuarachchi
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                  >
                    CEO kode
                  </Typography>
                </div>
              </div>
              <div className="w-96">
                <Tabs value="app">
                  <TabsHeader>
                    
                    <Tab value="settings">
                      <FaTools className="-mt-1 mr-2 inline-block h-5 w-5" />
                      Settings
                    </Tab>
                  </TabsHeader>
                </Tabs>
              </div>
            </div>

            {/* Profile Info Card */}
            <div className="md:flex justify-between mb-20">
              <ProfileInfoCard
                title="Profile Information"
                description="I am a software engineering undergraduate at University of Colombo School of Computing. I have a passion for teaching and I have been teaching for the past 3 years. I have been teaching students for the past 3 years and I have been able to help them achieve their goals. I have been teaching students for the past 3 years and I have been able to help them achieve their goals."
                details={{
                  "first name": "Kaviru Happuarachchi",
                  Highlight: "I'm a IS undergraduate at UCSC",
                  mobile: "(+94) 71 1234 123",
                  email: "kaviru@gmail.com",
                  location: "Sri Lanka",
                  social: (
                    <div className="flex items-center gap-4">
                      <a href="#">
                        {" "}
                        <FaFacebook fill="#3b5998" className="h-5 w-5" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <FaTwitter fill="#3b5998" className="h-5 w-5" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <FaInstagram fill="#3b5998" className="h-5 w-5" />{" "}
                      </a>
                    </div>
                  ),
                }}
              />
              <div className=" pl-6">
                <ScheduleAtom/>
              </div>
            </div>
          </div>

          {/* Answers */}
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Answers
            </Typography>
            <FeedQuestion
              name="Kaviru"
              uName="ksrx"
              date="2"
              questionTitle="How to patch KDE on FreeBSD"
              questionDescription="Description DescriptionDescriptionDescriptionDescript ionDescriptionDescriptionDescri ptionDescriptionDescriptionDescription Description Description Description Description Description "
              tag1="#Python"
              tag2="#JavaScript"
            />
            <FeedQuestion
              name="Kaviru"
              uName="ksrx"
              date="2"
              questionTitle="How to patch KDE on FreeBSD"
              questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescript ionDescriptionDescriptionDescrip tionDescriptionDescription Description Description Description Description Description "
              tag1="#Python"
              tag2="#JavaScript"
            />
            <FeedQuestion
              name="Kaviru"
              uName="ksrx"
              date="2"
              questionTitle="How to patch KDE on FreeBSD"
              questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescri ptionDescriptionDescriptionDes criptionDescriptionDescription Description Description Description Description Description "
              tag1="#Python"
              tag2="#JavaScript"
            />
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Answering Every Question
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              something here
            </div>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Profile;
