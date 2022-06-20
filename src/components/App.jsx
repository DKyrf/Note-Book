import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [list, setList] = useState([]);

  function collectNotes(e){
    setList(prev =>  [...prev, e])
  };

  function deleteNote(indentificator){
    setList(list.filter((el, ind) => ind !== indentificator))
  }

  return (
    <div className="wrapper">
      <Header />
      <CreateArea
      onAdd={collectNotes}/>
      {list.map((el, ind)=>{
        return <Note 
        function={deleteNote}
        id={ind}
        key={ind} 
        title={el.title} 
        content={el.content} />
      })}
    </div>
  );
}

export default App;
