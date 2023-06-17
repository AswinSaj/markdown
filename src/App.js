import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./style.css";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section>
        <div>
          <h1>Mark Down</h1>
        </div>
        <div className="txt">
          <div>
            <textarea
              className="input"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
          </div>
          <div>
            <article className="result">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
