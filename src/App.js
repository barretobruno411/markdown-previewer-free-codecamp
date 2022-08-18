import { useState, useEffect } from "react";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import "./App.scss";

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


`;

function App() {
  const [mark, setMark] = useState(initialText);

  useEffect(() => {
    console.log(mark);
  }, [mark]);

  return (
    <div className="App">
      <h3>
        code by <a href="https://github.com/barretobruno411">barretobruno411</a>
      </h3>
      <div className="main">
        <Editor setMark={setMark} mark={mark} />
        <Previewer mark={mark} />
      </div>
    </div>
  );
}

export default App;
