import React, { useState, useContext } from "react";
import { EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "/src/ContextProvider.jsx";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { main } from "/src/DATA/AIData.js";

const PROMPT = `Generate 3–4 professional resume bullet points for this job title: {positionTitle}.Return ONLY plain text with bullet icons (•). No HTML.`;
function TextEditor({ onEditorChange, index }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { ResumeInfo } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);

  const AISummery = async () => {
    const title = ResumeInfo?.experience?.[index]?.title;
    console.log("generating...");
    if (title) {
      toast("Add your title");
      return;
    }
    try {
      setLoading(true);
      const prompt = PROMPT.replace("{positionTitle}", title);
      let result = await main(prompt); //  plain text bullets we get from AI

      const content = ContentState.createFromText(result); //  NO HTML parsing needeb because the data already in plain text
      setEditorState(EditorState.createWithContent(content)); // functoin used in this based on text editor
      setLoading(false);
      toast("AI summary generated");
    } catch {
      setLoading(false);
      toast("AI overloaded, try later");
    }
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    const text = state.getCurrentContent().getPlainText(); // plain text same these fn are based acc. to editor
    onEditorChange(text);
  };

  return (
    <div className="bg-[#CBC7C7] rounded-2xl max-w-3xl mx-auto p-6">
      <div className="flex justify-between my-2">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Summary</h1>
        <Button
          onClick={AISummery}
          variant="outline"
          size="sm"
          className=" text-primary border-primary flex gap-2"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <span className="flex">
              <Brain /> Generate AI Summary
            </span>
          )}
        </Button>
      </div>

      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ["inline", "list", "history"],
          inline: { options: ["bold", "italic", "underline"] },
          list: { options: ["unordered", "ordered"] },
        }}
      />
    </div>
  );
}

export default TextEditor;
