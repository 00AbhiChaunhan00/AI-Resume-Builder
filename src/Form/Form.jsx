import React, { useState } from "react";
import PersonDetailsForm from "./PersonDetailsForm";
import ProfessionalForm from "./ProfessionalForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import SummeryForm from "./SummeryForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { Home } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import ThemeColor from "../Resume/ThemeColor";
function Form() {
  const param = useParams();

  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Link to={"/dashboard"}>
            <Button style={{ backgroundColor: "#9450FF" }}>
              <Home />
            </Button>
          </Link>
          <ThemeColor />
        </div>

        <div className="flex gap-2">
          {activeIndex > 1 && (
            <Button
              style={{ backgroundColor: "#9450FF" }}
              size="sm"
              className=""
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            style={{ backgroundColor: "#9450FF" }}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            {" "}
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeIndex == 1 ? <PersonDetailsForm /> : null}
      {activeIndex == 2 ? <SummeryForm /> : null}
      {activeIndex == 3 ? <ProfessionalForm /> : null}
      {activeIndex == 4 ? <EducationForm /> : null}
      {activeIndex == 5 ? <SkillsForm /> : null}
      {activeIndex == 6 ? (
        <Navigate to={"/my-resume/" + param?.resumeId + "/view/"}></Navigate>
      ) : null}
    </div>
  );
}
export default Form;
