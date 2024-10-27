// import Header from "@/components/custom/Header";
// import { Button } from "@/components/ui/button";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import ResumePreview from "@/dashboard/resume/components/ResumePreview";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import GlobalApi from "./../../../../service/GlobalApi";
// import { RWebShare } from "react-web-share";

// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const { resumeId } = useParams();

//   useEffect(() => {
//     GetResumeInfo();
//   }, []);
//   const GetResumeInfo = () => {
//     GlobalApi.GetResumeById(resumeId).then((resp) => {
//       console.log(resp.data.data);
//       setResumeInfo(resp.data.data);
//     });
//   };

//   const HandleDownload = () => {
//     window.print();
//   };

//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       <div id="no-print">
//         <Header />

//         <div className="my-10 mx-10 md:mx-20 lg:mx-36">
//           <h2 className="text-center text-2xl font-medium">
//             Congrats! Your Ultimate AI generates Resume is ready !{" "}
//           </h2>
//           <p className="text-center text-gray-400">
//             Now you are ready to download your resume and you can share unique
//             resume url with your friends and family{" "}
//           </p>
//           <div className="flex justify-between px-44 my-10">
//             <Button onClick={HandleDownload}>Download</Button>

//             <RWebShare
//               data={{
//                 text: "Hello Everyone, This is my resume please open url to see it",
//                 url:
//                   import.meta.env.VITE_BASE_URL +
//                   "/my-resume/" +
//                   resumeId +
//                   "/view",
//                 title:
//                   resumeInfo?.firstName +
//                   " " +
//                   resumeInfo?.lastName +
//                   " resume",
//               }}
//               onClick={() => console.log("shared successfully!")}
//             >
//               {" "}
//               <Button>Share</Button>
//             </RWebShare>
//           </div>
//         </div>
//       </div>
//       <div className="my-10 mx-10 md:mx-20 lg:mx-36">
//         <div id="print-area">
//           <ResumePreview />
//         </div>
//       </div>
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;
 import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import ResumePreview from '@/dashboard/resume/components/ResumePreview';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../service/GlobalApi';
import { RWebShare } from 'react-web-share';

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;
  const shareUrl = `${baseUrl}/my-resume/${resumeId}/view`;

  useEffect(() => {
    GetResumeInfo();
    addPrintStyles();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then(resp => {
      console.log(resp.data.data);
      setResumeInfo(resp.data.data)
    })
  }

  const HandleDownload = () => {
    window.print();
  }

  const addPrintStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        .skill-progress-bar {
          position: relative;
          height: 10px;
          background-color: #e0e0e0;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .skill-progress-fill {
          position: absolute;
          height: 100%;
          background-color: #4a5568;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your ultimate AI generated Resume is Ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share unique
            Resume URL with your friends and family!
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>
            <RWebShare
              data={{
                text: "Check out my resume!",
                url: shareUrl,
                title: resumeInfo ? `${resumeInfo.firstName} ${resumeInfo.lastName}'s Resume` : "My Resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div id="print-area" className="my-10 mx-10 md:mx-20 lg:mx-36">
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
