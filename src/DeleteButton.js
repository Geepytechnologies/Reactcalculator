import { ACTIONS } from "./App";
import "./styles.css"

export default function DeleteButton({dispatch,operation}){
  return <button className="btnstyle" onClick={()=> dispatch({type: ACTIONS.DELETE_DIGIT, payload: {operation}})}>{operation}</button>
}