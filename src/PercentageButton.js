import { ACTIONS } from "./App"
import "./styles.css"

export default function PercentageButton({dispatch, operation}){
  return <button className="btnstyle" onClick={() => dispatch({type: ACTIONS.PERCENTAGE})}>{operation}</button>
}