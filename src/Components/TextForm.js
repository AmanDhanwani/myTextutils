import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to UpperCase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to LowerCase","success");
  };
  const handleClearClick = () => {
    setText("");
    props.alert("Text Cleared","success");
  };
  const handleCapitalClick = () => {
    let newText = text[0].toUpperCase() + text.slice(1);
    setText(newText);
    props.alert("Converted to Capital Text","success");
  };
  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g,' ');
    setText(newText);
    props.alert("Extra spaces has removed","success");
  };
  const handleCopyClick = () => {
  
    navigator.clipboard.writeText(text);
    props.alert("Text Copied","success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <textarea
          style={{backgroundColor : props.mode==='dark' ? '#191c52' : 'white',color : props.mode==='light' ? 'black' : 'white'}}
          className="form-control my-3"
          id="mybox"
          value={text}
          onChange={handleOnchange}
          rows="8"
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCapitalClick}>
          Capital text
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-1"
          onClick={handleRemoveSpacesClick}
        >
          Remove extra spaces
        </button>
        <button
        disabled={text.length===0}
          className="btn btn-primary mx-1"
          onClick={handleCopyClick}
        >
            Copy Text
        </button>
      </div>

      <div className="container my-3" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words {text.length} characters.
        </p>
        <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} minutes to read.</p>
        <h2>Preview</h2>
        <p> {text.length > 0 ? text : "Nothing to preview"} </p>
      </div>
    </>
  );
}