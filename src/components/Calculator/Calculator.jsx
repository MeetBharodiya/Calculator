import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {
  const [display, setdisplay] = useState(0);
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const handleButtonClick = (value, e) => {
    switch (value) {
      case "clear":
        setNum(0);
        setdisplay(0);
        break;
      case "changeSign":
        setNum(num * -1);
        setdisplay(num * -1);
        break;
      case "percentage":
        setNum(num / 100);
        setdisplay(num / 100);
        break;
      case "operatorHandler":
        let operatorInput = e.target.value;
        if (!operator) {
          setOperator(operatorInput);
          setdisplay((prev) => prev + operatorInput);
          setOldNum(num);
          setNum(0);
        } else {
          if (operator === "/") {
            setOldNum(parseFloat(oldNum) / parseFloat(num));
            setNum(0);
            setdisplay((prev) => prev + operatorInput);
            setOperator(operatorInput);
          } else if (operator === "*") {
            setOldNum(parseFloat(oldNum) * parseFloat(num));
            setNum(0);
            setdisplay(display + operatorInput);
            setOperator(operatorInput);
          } else if (operator === "-") {
            setOldNum(parseFloat(oldNum) - parseFloat(num));
            setNum(0);
            setdisplay(display + operatorInput);
            setOperator(operatorInput);
          } else if (operator === "+") {
            setOldNum(parseFloat(oldNum) + parseFloat(num));
            setNum(0);
            setdisplay(display + operatorInput);
            setOperator(operatorInput);
          }
        }
        break;
      case "inputNum":
        let input = e.target.value;
        if (num === 0) {
          setNum(input);
          if (display === 0) {
            setdisplay(input);
          } else {
            setdisplay((prev) => prev + input);
          }
        } else {
          setNum((prev) => prev + input);
          setdisplay((prev) => prev + input);
        }
        break;
      case "calculate":
        if (operator === "/") {
          setNum(parseFloat(oldNum) / parseFloat(num));
          setdisplay(parseFloat(oldNum) / parseFloat(num));
          setOperator();
        } else if (operator === "*") {
          setNum(parseFloat(oldNum) * parseFloat(num));
          setdisplay(parseFloat(oldNum) * parseFloat(num));
          setOperator();
        } else if (operator === "-") {
          setNum(parseFloat(oldNum) - parseFloat(num));
          setdisplay(parseFloat(oldNum) - parseFloat(num));
          setOperator();
        } else if (operator === "+") {
          setNum(parseFloat(oldNum) + parseFloat(num));
          setdisplay(parseFloat(oldNum) + parseFloat(num));
          setOperator();
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Box m={2} /> {/* Box margin-top */}
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="resultado">{display}</h1>
          <button
            onClick={(e) => {
              handleButtonClick("clear", e);
            }}
          >
            AC
          </button>
          <button onClick={(e) => handleButtonClick("changeSign", e)}>
            +/-
          </button>
          <button onClick={(e) => handleButtonClick("percentage", e)}>%</button>
          <button
            className="orange"
            onClick={(e) => handleButtonClick("operatorHandler", e)}
            value={"/"}
          >
            /
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={7}
          >
            7
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={8}
          >
            8
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={9}
          >
            9
          </button>
          <button
            className="orange"
            onClick={(e) => handleButtonClick("operatorHandler", e)}
            value={"*"}
          >
            *
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={4}
          >
            4
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={5}
          >
            5
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={6}
          >
            6
          </button>
          <button
            className="orange"
            onClick={(e) => handleButtonClick("operatorHandler", e)}
            value={"-"}
          >
            -
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={1}
          >
            1
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={2}
          >
            2
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={3}
          >
            3
          </button>
          <button
            className="orange"
            onClick={(e) => handleButtonClick("operatorHandler", e)}
            value={"+"}
          >
            +
          </button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={0}
          >
            0
          </button>
          <button style={{ visibility: "hidden" }}>k</button>
          <button
            className="grey"
            onClick={(e) => handleButtonClick("inputNum", e)}
            value={"."}
          >
            .
          </button>
          <button
            className="orange"
            onClick={(e) => handleButtonClick("calculate", e)}
          >
            =
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
