import * as ReactBootStrap from "react-bootstrap"

export default (props)=> {
return <ReactBootStrap.Button {...props}>{props.text}</ReactBootStrap.Button>
}