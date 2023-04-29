import React,{useState} from 'react'

export default function TextForm(props) {
    const onUpperCase =() => {
        let venom = text.toUpperCase();
        setText(venom);
        props.showAlert("Converted to Upper Case!!!","success");
    }

    const onLowerCase =() => {
        let venom = text.toLowerCase();
        setText(venom);
        props.showAlert("Converted to Lower Case!!!","success");
    }

    const handleClearClick =() => {
        let newText = "";
        setText(newText);
    }
    
    const handleCopy =() => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!!!","success");
    }
    
    const handleExtraSpace =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    const [text, setText]= useState("");  
    
    const handleOnChange =(event) => {
        setText(event.target.value);
    }


  return (
    <>
    <div className="container" style={{color: props.mode==="light"? "#100324f0": "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange = {handleOnChange} style={{backgroundColor:props.mode==="light"? "white": "#100324f0", color: props.mode==="light"? "#100324f0": "white" }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={onLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="light"? "#100324f0": "white"}}>
        <h1>Your summary here</h1>
        <p><strong>{text.split(" ").length}</strong> words and <b>{text.length}</b> characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length> 0 ? text : "Enter the text to preview."}</p>
    </div>
    </>
  )
}
