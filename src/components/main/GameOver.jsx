import { NavLink } from "react-router-dom"

const GameOver = () => {
    return (
        <div>
            <h1>You lose!</h1>
            <NavLink className="mainMenu__link" to="/menu">Play again</NavLink>
        </div>
    );
}
export default GameOver;