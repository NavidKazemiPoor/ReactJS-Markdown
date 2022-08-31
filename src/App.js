import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  return (
    <div className="container">
      <main>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <section className="markdown-preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </section>
      </main>
    </div>
  );
}

export default App;
