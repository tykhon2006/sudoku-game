import { NavLink } from "react-router-dom"

const Win = () => {
    return (
        <div>
            <h1>You win!</h1>
            <NavLink className="mainMenu__link" to="/menu">Play again</NavLink>
        </div>
    );
}
export default Win;