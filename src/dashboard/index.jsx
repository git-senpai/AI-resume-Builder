import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        console.log(resp.data.data);
        setResumeList(resp.data.data);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-10 md:px-20 lg:px-32" style={{
          backgroundImage: "url('dashboard_bg.jpg')", // Update with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <div
        className="max-w-4xl mx-auto  rounded-lg shadow-lg p-8 relative overflow-hidden"
      >
        <div className="bg-white bg-opacity-50 rounded-lg p-6">
          {" "}
          {/* Added an overlay for readability */}
          <h2 className="font-bold text-4xl text-center text-blue-700">
            My Resume
          </h2>
          <p className="text-center text-black mt-2 mb-6 font-bold">
            Start Creating your AI resume for your next job role
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
            <AddResume />
            {resumeList.length > 0
              ? resumeList.map((resume, index) => (
                  <ResumeCardItem
                    resume={resume}
                    key={index}
                    refreshData={GetResumesList}
                  />
                ))
              : [1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="h-[280px] rounded-lg bg-slate-200 shadow animate-pulse"
                  ></div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
