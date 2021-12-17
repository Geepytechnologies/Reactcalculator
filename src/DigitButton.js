import { ACTIONS } from "./App"
import "./styles.css"

export default function DigitButton({dispatch, digit}){
  return <button className="btnstyle" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
}