"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import CopyText from "./CopyText";
import parse from "html-react-parser";

const Codeblock = ({ code, lang, styles }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className={`language-${lang} ${styles.code}`}>
      <code className={`language-${lang} ${styles.Codeblock}`}>
        {parse(`${Prism.highlight(code, Prism.languages[lang], lang)}`)}
      </code>
      <CopyText text={code} />
    </pre>
  );
};

export default Codeblock;

//  return (
//    <pre className={`language-${value.language} ${styles.code}`}>
//      <CopyText text={value.code} />
//      {parse(
//        `${Prism.highlight(
//          value.code,
//          value.language == "jsx"
//            ? Prism.languages.javascript
//            : Prism.languages[value.language],
//          value.language
//        )}`
//      )}
//    </pre>
//  );
