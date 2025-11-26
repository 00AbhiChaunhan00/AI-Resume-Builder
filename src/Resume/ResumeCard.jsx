import React, { useState } from "react";
import { LoaderCircle, Notebook } from "lucide-react";
import cvImg from "/src/assets/cv.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import APIDATA from "../DATA/APIDATA";
function ResumeCard({ resume, refreshData }) {
  const [openAlert, setopenAlert] = useState(false);
  const navigation = useNavigate();
  const [loading, setloading] = useState(false);
  const onDelete = () => {
    setloading(true);
    APIDATA.DeleteResume(resume.documentId).then(() => {
      toast("Resume deleted");
      refreshData();
      setopenAlert(false);
      setloading(false);
    });
  };
  return (
    <div>
      <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
        <div
          className="p-14 py-24 
     bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200
    bg-secondary flex justify-center items-center h-[300px] border border-t-primary border-t-10 border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary gap-2"
          style={{ borderColor: resume.themeColor }}
        >
          <div
            className="flex 
        items-center justify-center h-[180px] "
          >
            <img src={cvImg} width={300} height={300} />
          </div>
        </div>
      </Link>
      <div
        className="border m-2 p-3 flex justify-between  text-white rounded-b-lg shadow-lg"
        style={{ background: resume.themeColor }}
      >
        <h2 className="text-lg">{resume?.title}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-6 w-6 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              View{" "}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation("/dashboard/resume/" + resume.documentId + "/edit")
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setopenAlert(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  
  {/* use to the alert message when we are going to delete the resume */}
        <AlertDialog open={openAlert}> 
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setopenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>
                {loading ? <LoaderCircle className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
export default ResumeCard;
