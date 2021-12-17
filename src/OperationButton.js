import { ACTIONS } from "./App"
import "./styles.css"

export default function OperationButton({dispatch, operation}){
  return <button className="btnstyle" onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
}