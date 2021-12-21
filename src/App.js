import { useReducer } from 'react'
import "./styles.css"
//import $ from 'jquery'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import DeleteButton from './DeleteButton'
import PercentageButton from './PercentageButton'

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  CHOOSE_OPERATION: "choose-operation",
  PERCENTAGE: "percentage",
  SIN: "sin",
  ASIN: "asin",
  PI: "pi",
  COS: "cos",
  ACOS: "acos",
  TAN: "tan",
  ATAN: "atan",
  SQRT: "sqrt",
  SQUARE: "squared",
  SQUARECUBE: "squarecube",
  SQUAREFOUR: "squarefour",
  CUBEROOT: "cuberoot"
}

function reducer(state, {type, payload}){
  // eslint-disable-next-line 
    switch(type){
       case ACTIONS.ADD_DIGIT:
         if(state.overwrite){
           return {
             ...state,
             current: payload.digit,
             overwrite: false
           }
         }
         if(payload.digit === "0" && state.current === "0"){
          return state
         } 
         if(payload.digit === "." && state.current.includes(".")){
           return state
          }
         return {
           ...state,
           current: `${state.current || ""}${payload.digit}`,
         }
         case ACTIONS.CHOOSE_OPERATION:
           if(state.current == null && state.previous == null){
             return state
           }
           if(payload.operation === "%" && state.previous == null){
              return{
                previous: percentage(state.current),
                current: null,
                operation: null
              }
           }

           if(state.previous == null) {
             return {
               operation: payload.operation,
               previous: state.current,
               current: null
              }
           }
           return{
             ...state,
             previous: evaluate(state),
             operation: payload.operation,
             current: null
           }
           
          case ACTIONS.DELETE_DIGIT: 
             if(state.overwrite){
               return{
                 ...state,
                 overwrite: false,
                 current: null,
               }
             }
             if(state.current == null) return state
             if(state.current.length === 1){
               return{
                 ...state,
                 current: null
               }
             }
             return {
               ...state,
               current: state.current.slice(0,-1)
             }

          case ACTIONS.CLEAR:
             return {}
          case ACTIONS.EVALUATE:
             if(state.operation == null || state.previous == null || state.current == null){
               return state
             }
             return {
               ...state,
               previous: null,
               overwrite: true,
               operation: null,
               current: evaluate(state)
             }
             case ACTIONS.PERCENTAGE:
              return {
                ...state,
                current: percentage(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SIN:
              return {
                ...state,
                current: sin(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.ASIN:
              return {
                ...state,
                current: Asin(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.PI:
              return {
                ...state,
                current: Pi(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.COS:
              return {
                ...state,
                current: Cos(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.ACOS:
              return {
                ...state,
                current: Acos(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.TAN:
              return {
                ...state,
                current: Tan(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.ATAN:
              return {
                ...state,
                current: Atan(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQRT:
              return {
                ...state,
                current: Sqrt(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQUARE:
              return {
                ...state,
                current: Square(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQUARECUBE:
              return {
                ...state,
                current: Cube(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQUAREFOUR:
              return {
                ...state,
                current: Cubefour(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.CUBEROOT:
              return {
                ...state,
                current: Cuberoot(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
            
    }
}
function percentage(current){
  const pre = parseFloat(current)
  const result = pre / 100
  return result
}

function sin(current){
  const sinumber = parseFloat(current)
  const calcsin = Math.sin(sinumber)
  return calcsin
}
function Asin(current){
  const asinumber = parseFloat(current)
  const calcasin = Math.asin(asinumber)
  return calcasin
}

function Cos(current){
  const cosnumber = parseFloat(current)
  const calcos = Math.cos(cosnumber)
  return calcos
}
function Acos(current){
  const acosnumber = parseFloat(current)
  const calacos = Math.acos(acosnumber)
  return calacos
}

function Tan(current){
  const Tanumber = parseFloat(current)
  const calcTan = Math.tan(Tanumber)
  return calcTan
}
function Atan(current){
  const Atanumber = parseFloat(current)
  const calcatan = Math.tan(Atanumber)
  return calcatan
}

function Pi(current){
  const pinumber = parseFloat(current)
  const calcpi = Math.PI * pinumber
  return calcpi
}

function Sqrt(current){
  const Sqrtnumber = parseFloat(current)
  const calcsqrt = Math.sqrt(Sqrtnumber)
  return calcsqrt
}
function Cuberoot(current){
  const cbrtnumber = parseFloat(current)
  const calccbrt = Math.cbrt(cbrtnumber)
  return calccbrt
}
function Square(current){
  const Squarenumber = parseFloat(current)
  const calcsquare = Squarenumber * Squarenumber
  return calcsquare
}
function Cube(current){
  const Cubenumber = parseFloat(current)
  const calcube = Cubenumber * Cubenumber * Cubenumber
  return calcube
}
function Cubefour(current){
  const Cubefournumber = parseFloat(current)
  const calcubefour = Cubefournumber * Cubefournumber * Cubefournumber * Cubefournumber
  return calcubefour
}



function evaluate({previous, current, operation}){
   const prev = parseFloat(previous)
   const curr = parseFloat(current)
   if(isNaN(prev) || isNaN(curr)) return ""
   let computation = ""
   switch(operation){
     case "+":
       computation = prev + curr
       break
      case "-":
       computation = prev - curr
       break
      case "÷":
        computation = prev / curr
       break
       case "×":
        computation = prev * curr
        break
        default:
   }
   return computation.toString()

}



function App() {
  const [{previous, current, operation}, dispatch] = useReducer(reducer, {})
  return (
     <div className="calculator">
       <div className="output">
         <div className="previous">{previous} {operation}</div>
         <div className="current">{current}</div>
       </div>
       <div className="calcbuttons">
         <div className ="arithmetic">
            <div className="calcbox3" id="calcbox">
              <button className="btnstyle" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
              <DeleteButton operation="DEL" dispatch={dispatch} />
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.SIN})}>sin</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.COS})}>cos</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.TAN})}>tan</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.SQRT})}>&#8730;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.CUBEROOT})}>&#8731;</button>
              <PercentageButton operation="%" dispatch={dispatch} />
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.SQUARE})}>x&#178;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.SQUARECUBE})}>x&#179;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.SQUAREFOUR})}>x&#8308;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.ASIN})}>sin&#8315;&#185;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.ACOS})}>cos&#8315;&#185;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.ATAN})}>tan&#8315;&#185;</button>
              <button className="btnstyle1" onClick={() => dispatch({type: ACTIONS.PI})}>&#x3C0;</button>
            </div>
         </div>
         <div className="numbers">
              <div className="calcbox1">
                    <DigitButton digit="7" dispatch={dispatch} />
                    <DigitButton digit="8" dispatch={dispatch} />
                    <DigitButton digit="9" dispatch={dispatch} />
                    <DigitButton digit="4" dispatch={dispatch} />
                    <DigitButton digit="5" dispatch={dispatch} />
                    <DigitButton digit="6" dispatch={dispatch} />
                    <DigitButton digit="1" dispatch={dispatch} />
                    <DigitButton digit="2" dispatch={dispatch} />
                    <DigitButton digit="3" dispatch={dispatch} />
                    <DigitButton digit="." dispatch={dispatch} />
                    <DigitButton digit="0" dispatch={dispatch} />
                    <button className="btnstyle"  onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
                </div>
                <div className="calcbox2">
                  <OperationButton operation="&#247;" dispatch={dispatch} />
                  <OperationButton operation="&#215;" dispatch={dispatch} />
                  <OperationButton operation="-" dispatch={dispatch} />
                  <OperationButton operation="+" dispatch={dispatch} />
              </div>
         </div>     
          
       </div>
     </div>
  )}

  
export default App;


