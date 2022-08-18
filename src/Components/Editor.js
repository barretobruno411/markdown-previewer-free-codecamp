import WindowsHeader from "./WindowsHeader"
import "./Editor.scss"
const Editor = ({mark, setMark}) => {


  return (
    <div className='editor'>

        <WindowsHeader componentName="Editor"/>

        <h1>Github flavour markdown preview 🔎</h1>

        <h2>Type to see... 👀</h2>
    
        <textarea
            value={mark}
            name="editor"
            id="editor"
            cols="50"
            rows="30"
            onChange={(e) => setMark(e.target.value)}
        >

        </textarea>

    </div>
  )
}

export default Editor