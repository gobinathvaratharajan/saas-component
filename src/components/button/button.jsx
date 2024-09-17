/***
*
*   BUTTON
*
*   PROPS
*   text: button label
*   size: small, medium, large
*   tone: primary, secondary
*   action: callback function executed on click
*
**********/

import Style from './button.module.css';

export function Button(props){
    // sizing the button
    const size = props.size ? Style[`${props.size}`] : 'medium'
    // coloring the button
    const tone = props.tone ? Style[`${props.tone}`] : 'primary'

  return (
    <button 
      className={ `${Style.button} ${size} ${tone}` }
      onClick={ e => {

        e.preventDefault();
        e.stopPropagation();
        props.action();

      }}> 

      { props.text }

    </button>
  )
}