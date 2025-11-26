import { createContext, useState } from "react";
import DummyData from "/src/DATA/DummyData.jsx";

export const ResumeContext = createContext(null);

export default function ResumeContextProvider({ children }) {
  const [ResumeInfo, setResumeInfo] = useState(DummyData);

  return (
    <ResumeContext.Provider value={{ ResumeInfo, setResumeInfo }}>
      {children}
    </ResumeContext.Provider>
  );
}
