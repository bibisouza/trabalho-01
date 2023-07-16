/* eslint-disable no-undef */
import React from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from "react";

export default function Calculator() {
        const [num,setNum] = useState("");
        const [mem,setMem] = useState("");
        const [calc,setCalc] = useState(null);
        
        function inputNum(e) {
            console.log(e.target.value);
            var input = e.target.value
            if (num === 0 || calc) {
                setNum(input);
                setCalc(null);
            }else{
                setNum(num + input);
            }
        }

        function clear(e) {
            setNum(0);
        }

        function perctg() {
            setNum(num / 100);
        }

        function signal() {
            if (num>0) {
                setNum(-num);
            }else{
                setNum(num * -1);
            }
        }

        function handler(e) {
            var op = e.target.value;
            setCalc(op);
            setMem(num);
            setNum(0);
        }

        function calculate() {
            if (calc==="/") {
                setNum(parseFloat(mem) / parseFloat(num));
            } else if (calc==="X") {
                setNum(parseFloat(mem) * parseFloat(num));
            } else if (calc==="-") {
                setNum(parseFloat(mem) - parseFloat(num));
            } else if (calc==="+") {
                setNum(parseFloat(mem) + parseFloat(num));
            }
        }
    

        function sumMemory() {
            if (calc === "+") {
                setMem(mem + parseFloat(num));
            } else {
                setMem(parseFloat(num));
                setCalc("+");
            }
            setNum(0);
        }

        function subMemory() {
            if (calc === "-") {
                setMem(mem - parseFloat(num));
            } else {
                setMem(parseFloat(num));
                setCalc("-");
            }
            setNum(0);
        }

        function recallMemory() {
            setMem(mem);
        }

        function clearMemory() {
            setMem(0);
        }

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                <Box m={12} />
                        <h1 className="result">{num}</h1>

                    <button className="memo" onClick={sumMemory} value={"M+"}>M+</button>
                    <button className="memo" onClick={subMemory} value={"M-"}>M-</button>
                    <button className="memo" onClick={recallMemory} value={"MR"}>MR</button>
                    <button className="colour" onClick={clearMemory} value={"MC"}>MC</button>
                    <button onClick={clear}>AC</button>
                    <button onClick={signal}>+/–</button>
                    <button onClick={perctg}>%</button>
                    <button className="colour" onClick={handler} value={"/"}>/</button>
                    <button className="colouralt" onClick={inputNum} value={7}>7</button>
                    <button className="colouralt" onClick={inputNum} value={8}>8</button>
                    <button className="colouralt" onClick={inputNum} value={9}>9</button>
                    <button className="colour" onClick={handler} value={"X"}>X</button>
                    <button className="colouralt" onClick={inputNum} value={4}>4</button>
                    <button className="colouralt" onClick={inputNum} value={5}>5</button>
                    <button className="colouralt" onClick={inputNum} value={6}>6</button>
                    <button className="colour" onClick={handler} value={"–"}>–</button>
                    <button className="colouralt" onClick={inputNum} value={1}>1</button>
                    <button className="colouralt" onClick={inputNum} value={2}>2</button>
                    <button className="colouralt" onClick={inputNum} value={3}>3</button>
                    <button className="colour" onClick={handler} value={"+"}>+</button>
                    <button className="colouralt" onClick={inputNum} value={0}>0</button>
                    <button className="colouralt" onClick={inputNum} value={"."}>.</button>
                    <button id="btEquals" onClick={calculate}>=</button>  
                    
                </div>
            </Container>
        </div>
    )
    }
    