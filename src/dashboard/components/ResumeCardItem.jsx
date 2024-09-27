import { Loader2Icon, MoreVertical } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from "./../../../service/GlobalApi";
import { toast } from "sonner";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  // Log the resume object for debugging
  useEffect(() => {
    console.log("Resume object:", resume);
  }, [resume]);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        console.log(resp);
        toast("Resume Deleted!");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
        <div
          className="p-10 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 rounded-lg border-t-8"
          style={{
            borderColor: resume?.themeColor || "#FF4433", // Fallback color if themeColor is undefined
          }}
        >
          <div className="flex items-center justify-center h-[150px]">
            <img src="/cv.png" alt="Resume" width={80} height={80} />
          </div>
        </div>
      </Link>
      <div
        className="border rounded-b-lg shadow-lg p-2 flex justify-between items-center"
        style={{
          backgroundColor: resume?.themeColor || "#FF4433", // Fallback background color
        }}
      >
        <h2 className="text-md font-semibold text-white ">{resume.title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-6 w-6 cursor-pointer text-white hover:text-gray-200 transition duration-200" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-gray-700 shadow-md rounded-lg">
            <DropdownMenuItem
              className="hover:bg-gray-100 px-4 py-2"
              onClick={() =>
                navigation(`/dashboard/resume/${resume.documentId}/edit`)
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-gray-100 px-4 py-2"
              onClick={() => navigation(`/my-resume/${resume.documentId}/view`)}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-gray-100 px-4 py-2"
              onClick={() =>
                navigation(`/my-resume/${resume.documentId}/download`)
              }
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenAlert(true)}
              className="hover:bg-red-100 text-red-600 px-4 py-2"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                resume and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={onDelete}
                disabled={loading}
                className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCardItem;
