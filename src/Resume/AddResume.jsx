// in this component it send the whole data to the api server whrn we create the new resume by entering title

import React, { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import APIDATA from "/src/DATA/APIDATA.js";
import { useNavigate } from "react-router-dom";
function AddResume() {
  const [Opendialog, setopenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState(false);
  const { user } = useUser();
  const Navigate = useNavigate();
  const [loading, setloading] = useState(false);

  // this function is used to send the data to api on strapi tool
  const onCreate = async () => {
    setloading(true);
    const uuid = uuidv4(); // library to get the uique id
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress, // from clerk authentication we get the email data
        userName: user?.fullName,
      },
    };
    console.log("sending the data", data);
    APIDATA.CreateResume(data) // here we getting our response api from strapi tools in the form of object we are getting the data
      .then(
        (res) => {
          if (res) {
            setloading(false);
            Navigate("/dashboard/resume/" + res.data.data.documentId + "/edit"); // this is for the when you create the latest one to send to other edit resume page
          }
        },
        () => {
          setloading(false);
        }
      );
  };
  return (
    <>
      <div
        className="p-14 py-24
           bg-gradient-to-b
 from-pink-200 via-purple-200 to-blue-200
      border-primary
      border items-center flex justify-center bg-secondary rounded-lg h-[300px] hover:scale-105 transition-all hover:shadow-md cursor-pointer"
        onClick={() => setopenDialog(true)}
      >
        <PlusSquare width={30} height={30} />
      </div>
      {/* below this all tag are taken by shadcn */}
      <Dialog open={Opendialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-start text-xl">
              Create new resume
            </DialogTitle>
            <DialogDescription>
              <span className="flex justify-start text-[15px]">
                Add a title for your resume
              </span>
              <Input
                className="mt-3"
                placeholder="Ex. Full stack developer"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setopenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#9450FF" }}
                disabled={
                  // this disabled keyword is built-in
                  !resumeTitle || loading
                }
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default AddResume;
