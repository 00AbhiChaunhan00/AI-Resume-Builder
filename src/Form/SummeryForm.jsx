import React, { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ResumeContext } from "/src/ContextProvider.jsx";
import APIDATA from "../DATA/APIDATA";
import { Brain, LoaderCircle, TableColumnsSplitIcon } from "lucide-react";
import { toast } from "sonner";
import { main } from "/src/DATA/AIData.js";

function SummeryForm() {
  const params = useParams();

  const { ResumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [summery, setSummery] = useState();
  const [loading, setloading] = useState(false);
  const [LoadingAI, setLoadingAI] = useState(false);
  const [aiSummery, setaisummery] = useState([]);

  useEffect(() => {
    // here we set the value of summery when we changing in the textarea
    summery &&
      setResumeInfo({
        ...ResumeInfo,
        summery: summery,
      });
  }, [summery]);

  const onSave = (e) => {
    e.preventDefault();
    setloading(true);
    const data = {
      data: {
        summery: summery,
      },
    };

    APIDATA.UpdateResume(params?.resumeId, data)
      .then(() => {
        setloading(false);
        toast("Summery Added.");
      })
      .catch(() => {
        setloading(false);
      });
  };

  // for the ai response
  async function AISummery() {
    setLoadingAI(true);
    try {
      let Prompt =
        "Job Title: {jobTitle}, Depends on job title give me summery for my resume within 4-5 lines with only 2 option not too much option"; // we set a fixed prompt
      const PROMPT = Prompt.replace("{jobTitle}", ResumeInfo?.jobTitle);
      let result = await main(PROMPT);

      setaisummery(result);
      setLoadingAI(false);
      toast("AI generated summery succesfuly");
    } catch (err) {
      console.log(err.message);
      setLoadingAI(false);
      toast("AI overloaded, try again later");
    }
  }

  return (
    <div
      style={{ borderColor: "#9450FF" }}
      className="p-5 shadow-lf rounded-lg border-t-primary border-t-4 m-5"
    >
      <h2 className="font-bold text-lg">Summery Details</h2>
      <p>Add summery for you job title</p>

      <form onSubmit={onSave} className="mt-7">
        <div className="flex justify-between items-end">
          <label>Add summery</label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className=" border-primary text-primary flex gap-2 "
            onClick={() => AISummery()}
          >
            {" "}
            {LoadingAI ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <span className="flex gap-2">
                {" "}
                <Brain className="m-[2px]" /> Generate AI Summery{" "}
              </span>
            )}{" "}
          </Button>
        </div>

        <Textarea
          defaultValue={ResumeInfo?.summery}
          className="text-sm mt-5"
          required
          onChange={(e) => setSummery(e.target.value)}
        />
        <div className="mt-2 flex justify-end">
          {" "}
          <Button
            style={{ backgroundColor: "#9450FF" }}
            disabled={loading}
            type="sumbit"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>

      {aiSummery && (
        <div className="mt-6 p-5 rounded-xl border border-primary/30 bg-primary/5 shadow-sm backdrop-blur-sm transition-all">
          <h2 className="font-semibold text-xl text-primary mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            AI Suggested Summary
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {aiSummery}
          </p>
        </div>
      )}
    </div>
  );
}

export default SummeryForm;
