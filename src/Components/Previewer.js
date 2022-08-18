import Markdown from "marked-react";
import WindowsHeader from "./WindowsHeader";
import "./Previewer.scss";

const Previewer = ({ mark }) => {
  return (
    <div id="markdown">
      <WindowsHeader componentName="Preview" />
      <div id="preview">
        <Markdown>{mark}</Markdown>
      </div>
    </div>
  );
};

export default Previewer;
