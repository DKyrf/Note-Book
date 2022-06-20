import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";




function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const [isHovered, setHover] = useState(false);



  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevValue => {
      if(name === "title"){
        return {
          title: value,
          content: prevValue.content
        }
      }else if( name === "content"){
        return {
          title: prevValue.title,
          content: value
        }
      }
    })

  }


  function onSubmit(e){
    props.onAdd(note)
    e.preventDefault()
    setNote({
      title: "",
      content: ""
    })
  }


  return (
    <div>
      <form className="create-note">
      {isHovered && <input 
        onChange={handleChange}
        value={note.title}
        name="title" 
        placeholder="Title"/>}

        <textarea 
        onClick={()=>{
          setHover(true)
        }}
        onChange={handleChange}
        value={note.content}
        name="content" 
        placeholder="Take a note..."
        rows= {!isHovered ? "1" : "3"} />

        <Zoom in={isHovered}>
        <Fab onClick={onSubmit}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
