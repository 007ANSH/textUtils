import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("Enter your text here:");
  
  const handleUpClick=()=>{
    // let new =text.toUpperCase;
    
    setText(text.toUpperCase());
    props.alert("success","Converted to UpperCase");
  }
  const handleChange=(event)=>{
    console.log("change");
    setText(event.target.value);
  }
  const handleLoClick=(event)=>{
    setText(text.toLowerCase());
    props.alert("success","Converted to LowerCase");
  }
  const handleBoldClick=()=>{
    let bld=document.getElementById("exampleFormControlTextarea1");
    bld.style.fontWeight="bold";
    
  }
  const handleCopyClick=()=>{
    let txt=document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText( txt.value );
    props.alert("success","Text copied to clipboard")

  }
  // word count 
  let wordCount=(content)=>{
    content = content.trim();
    if (content === "") {
      return 0;
  }
    // Split the content into words using regular expression
    var words = content.split(' ');
    // Return the number of words
    return words.length;
    
  }
  return (
    <>
  
    
    <div className={`container`} style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className={`my-3 ` }  >
 
         <textarea value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'black'}}  className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>

        </div>
        <div className=' '>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary  mx-2" onClick={handleBoldClick}>BOLD</button>
        <button className="btn btn-primary  mx-2" onClick={handleCopyClick}>COPY</button>
        </div>
        

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>Your text summart</h3>
    <p>
      {wordCount(text)} words and {text.length} characters
    </p>
    <h3>Preview</h3>
    <p>{text}</p>
    <h3>Minutes to read</h3>
    <p>{0.008*text.split(' ').length}</p>


    </div>
    </>
  )
}
