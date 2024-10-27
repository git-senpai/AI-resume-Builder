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
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-10 lg:p-16">
      <div className="max-w-6xl mx-auto bg-gray-700 rounded-xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
        <h2 className="font-bold text-5xl text-center text-gray-100 mb-4">
          My Resumes
        </h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          Create and manage your AI-powered resumes for your next career move
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AddResume />
          {resumeList.length > 0
            ? resumeList.map((resume, index) => (
                <ResumeCardItem
                  resume={resume}
                  key={index}
                  refreshData={GetResumesList}
                />
              ))
            : [1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="h-64 rounded-lg bg-gray-200 shadow animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
