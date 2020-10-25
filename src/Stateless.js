import React from 'react'

const Stateless = props =>{
    const style ={
        width: '40%',
        margin: '16px',
        border:'1px solid #eee',
        boxShadow:'0 2px 3px #ccc',
        padding:'16px',
        textAlign: 'center'

    }
return(
    <div style={style} >
    <p onClick={props.delete}>My name is <b>{props.names}</b></p>
    <p>and my age is <b>{props.ages}</b></p>
    <input type="text" onChange={props.stateFul} value={props.names}/>
    </div>
)
}

export default Stateless;