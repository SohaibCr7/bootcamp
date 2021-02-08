import React from "react"


const ToDOList = (props) => {
   
        return(
            <>
            <div className="Todo_style">
                <i className="fa fa-times" onClick={() => {
                    props.onDelete(props.id);
                }}/>

                <i className="fa fa-pencil" onClick={ () => 
                    props.onEdit(props.text,props.id)
                }/>

                 <li> { props.text }</li>
            </div>
            </>
        );
       
}

export default ToDOList;