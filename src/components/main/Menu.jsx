import { NavLink } from "react-router-dom"

export const Menu = ()=>{
    return(
        <div>
            <ul className="mainMenu">
                <li>
                    <NavLink className="mainMenu__link" to="/easy">Easy</NavLink>
                </li>
                <li>
                    <NavLink className="mainMenu__link" to="/medium">Medium</NavLink>
                </li>
                <li>
                    <NavLink className="mainMenu__link" to="/hard">Hard</NavLink>
                </li>
            </ul>
            
        </div>
    )
}