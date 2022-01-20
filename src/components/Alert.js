import React from 'react'

function Alert(props) {
    // capitalize func. is used to to capitalize first letter of word
    // const capitalize = (word) =>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }

    return (
        //div style{js.obj} is used to fix Cumulative Layout Interface(layout isn't shifted alert makes their space  ) good SEO factor
        <div style={{height: '50px'}}> 
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type} </strong> : {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert
