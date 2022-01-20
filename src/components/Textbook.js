import React , {useState} from 'react'

export default function Textbook(props) {
   
    const handleUpClick = () => {
        //console.log("clicked" + text);
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Convert to UpperCase", "success");
    }

     const handleLoClick = () => {
        let newText = text.toLowerCase();
        settext (newText)
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClClick = () => {
        let newText = '';
        settext (newText)
        props.showAlert("Text has been cleared","success");
    }
    

    const handleOnChange = (event) => {
       // console.log("changed");
        settext(event.target.value)
    }

    const handleCopyClick = ()=>{
        // let text =document.getElementById("myBox");
        // text.select();// using navigator api so don't use select or deselect
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges(); //to deselect after selection
        props.showAlert("Your Text has been copied","success");
    }

    const handleRemoveClick = () => {
        //console.log("clicked");
        let newText = text.split (/[ ]+/);
        settext(newText.join(" "))
        props.showAlert ("Extra Spaces has been removed","success");
    }



const [text, settext] = useState('');
// settext ("newText");  //correct way to change the state

    return (
        <>
        <div className='container my-6' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-3"> {props.heading}  </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} style={{backgroundColor : props.mode === 'dark'?'#4183e5':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleUpClick}> UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleLoClick}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleRemoveClick}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleClClick}> Clear</button>

        </div>

        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2> Your Text Summary </h2>
            {/* regular func /\s+/ it is used to count word spaces when moves to next line */}
            <p>{text.split (/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length}characters</p>
            <p> {0.008 * text.split (" ").filter((element)=>{return element.length!==0}).length } minutes read </p>

            <h3>Preview the Text</h3>
            <p>{text.length>0?text:"Nothing to preview "}</p>
        </div>

        </>
    )
}

