import React, { useState, useContext } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // <-- Ensure this is present!
import { Brain, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "/src/ContextProvider.jsx";
import { toast } from "sonner";
import { main } from "/src/DATA/AIData.js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs"; 
const PROMPT = `
Write 4 strong, professional resume bullet points for the role: {positionTitle}.
Each bullet should:
- Start with a powerful action verb
- Show impact or results
- Be clear, concise, and easy to read

Return the response ONLY as an HTML unordered list: <ul><li>...</li></ul>.
`;


function TextEditor({ onEditorChange, index }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { ResumeInfo } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);

  const AISummery = async () => {
    const title = ResumeInfo?.experience?.[index]?.title;
    console.log(title)
    // if (!title) {
    //   toast("Please add your job title first.");
    //   return;
    // }
    try {
      setLoading(true);
      const prompt = PROMPT.replace("{positionTitle}",title);
      let htmlResult = await main(prompt);

      const blocksFromHtml = htmlToDraft(htmlResult);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      setEditorState(EditorState.createWithContent(contentState));

      setLoading(false);
      toast("AI summary generated.");
    } catch {
      setLoading(false);
      toast("AI overloaded, try later.");
    }
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    const html = draftToHtml(convertToRaw(state.getCurrentContent()));
    onEditorChange(html);
  };

  return (
    <div className="bg-[#CBC7C7] rounded-2xl max-w-3xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2 md:gap-0">
        <h1 className="text-xl font-bold text-gray-800">Summary</h1>
        <Button
          onClick={AISummery}
          variant="outline"
          size="sm"
          className="text-primary border-primary flex gap-2 w-full md:w-auto"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <span className="flex items-center gap-1">
              <Brain /> Generate AI Summary
            </span>
          )}
        </Button>
      </div>

      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        // This configuration defines the short, desired toolbar
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