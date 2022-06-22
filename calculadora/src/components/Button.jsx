import React from "react"
import "./Button.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
<button type="button"
        onClick={e => props.click && props.click(props.label)} className={`button 
        ${props.operation ? 'operation' : ''}
        ${props.secundary ? ' secundary' : ''}
    `}>
    {props.label}
</button>