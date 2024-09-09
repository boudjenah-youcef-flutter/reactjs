import {  ReactNode } from "react"

 const Heading = ( props : {title : string , children : ReactNode}) => { 
    const {title , children} = props
    return (
        <div>
          <h2>{title}</h2>
          <div>{children}</div>
        </div>
      );
}
export default Heading