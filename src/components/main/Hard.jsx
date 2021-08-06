import { useEffect } from "react";
import { useState } from "react"
import { withRouter } from "react-router";


const Hard = (props) => {

  const isWin = () => {
    for (let arr of props.matrix) {
      if (arr.some((i) => i === 0)) return;
    }
    props.startGame();
    props.history.push("/win");
  }
  const isOver = () => {
    if (props.errors >= 1) {
      props.startGame();
      props.history.push("/gameOver");
    }
  }

  useEffect(() => {
    isOver();
    isWin();
    window.onpopstate = props.startGame;
  }, [props.matrix, props.errors]);
  const [indexArr, newIndexArr] = useState([0, 0]);
  const setActiveInput = (a, b) => {
    newIndexArr([a, b])
  }
  const setValue = e => props.setValue(e.target.dataset.value, indexArr)
  const values = props.values.map(i => <span onClick={setValue} key={i} data-value={i} >{i}</span>)
  const tbody = props.matrix.map((tr, trIndex) => {
    return (
      <tr key={`_${trIndex}`}>
        {tr.map((td, index) => {
          return (
            <td key={`_${trIndex}_${index}`} onClick={() => setActiveInput(trIndex, index)}>
              <input id={`_${trIndex}_${index}`} type="radio" name="easy" value={td} className="check" ></input>
              <label htmlFor={`_${trIndex}_${index}`} className="wrap ceil">{td || ""}</label>
            </td>

          )
        })}
      </tr>
    )
  })

  return (
    <div className="easy">
      <table className="table"><tbody>{tbody}</tbody></table>
      <div className="wrap variants">{values}</div>
      <div className="wrap error">Errors: {props.errors}/1</div>
    </div>
  )
}
export default withRouter(Hard);