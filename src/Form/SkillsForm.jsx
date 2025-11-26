import React, { useEffect, useState, useContext } from "react";
import Rating from "../components/Rating";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ResumeContext } from "/src/ContextProvider.jsx";
import APIDATA from "../DATA/APIDATA";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
function SkillsForm() {
  const { ResumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [loading, setloading] = useState(false);
  const Params = useParams();
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  function handleInput(index, field, value) {
    const newEntries = [...skillsList];
    newEntries[index][field] = value;
    setSkillsList(newEntries);
  }
  const AddNewSkills = () => {
    setSkillsList([...skillsList, { name: "", rating: 0 }]);
  };

  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = () => {
    setloading(true);
    const data = {
      data: {
        skills: skillsList,
      },
    };

    APIDATA.UpdateResume(Params?.resumeId, data).then(
      () => {
        setloading(false);
        toast("Detailes Added");
      },
      () => {
        setloading(false);
        toast("Server Error");
      }
    );
  };
  useEffect(() => {
    setResumeInfo({
      ...ResumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);
  return (
    <div
      style={{ borderColor: "#9450FF" }}
      className="p-5 shadow-lf rounded-lg border-t-primary border-t-4 m-5"
    >
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your Skills</p>

      <div>
        {skillsList.map((item, index) => {
          return (
            <div>
              <div className="flex justify-between border mb-2 rounded-lg p-3">
                <div>
                  <label>Skills</label>
                  <Input
                    defaultValue={item.name}
                    onChange={(e) => handleInput(index, "name", e.target.value)}
                  />
                </div>
                <Rating
                  rating={item.rating}
                  setRating={(v) => handleInput(index, "rating", v)}
                />
              </div>
            </div>
          );
        })}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              style={{ backgroundColor: "#F87171" }}
              onClick={RemoveSkills}
            >
              - Remove
            </Button>
            <Button
              onClick={AddNewSkills}
              className="text-primary"
              variant="outline"
            >
              {" "}
              + Add Experrience
            </Button>
          </div>
          <Button
            style={{ backgroundColor: "#9450FF" }}
            onClick={() => onSave()}
            disabled={loading}
            type="sumbit"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SkillsForm;
