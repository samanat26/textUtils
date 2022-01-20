import React from 'react'

// import React from 'react'

export default function About(props) {
// const [btnText, setbtnText] = useState("Enable dark Mode")

// const [myStyle, setmyStyle] = useState(
//     {
//     color : 'black' ,
//     backgroundColor : 'white'   
//     })

// const toggleStyle = ()=>{
//     if (myStyle.color === 'white') {
//         setmyStyle ({
//             color : 'black',
//             backgroundColor : 'white'
//         })
//         setbtnText  ("Enable Dark Mode");
        
//     } else {
//         setmyStyle (
//             {
//                 color : 'white',
//                 backgroundColor : 'black',
//                 border : '1px solid white'
//             }
//         )
//         setbtnText  ("Enable light Mode");
//     }
// }

let myStyle = {
    color :  props.mode==='dark'?'white':'black',
    backgroundColor:  props.mode==='dark'?'#4183e5':'white'
}
    return (
        <>
        <div className="container my-3" style={{ color : props.mode==='dark'?'white':'#042743'}}>
            <h1>About Us </h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <strong>Analyze Your Text</strong>   
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently.
                    </div>
                    </div>
                </div>
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                        Textutils is a free character counter tool that provide instant character count and word count statistics for a given text. Textutils reports the number of words and characters.
                    </div>
                    </div>
                </div>
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books,excel document, pdf document,essays etc
                    </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
        </div>
        </>
    )
}
