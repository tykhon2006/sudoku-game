import { connect } from "react-redux";
import Medium from "./Medium";
import {setValue, startGame} from "../../store/easyReducer"
const mapStateToProps = (state)=>{
    return{
        matrix: state.level1.matrix.start,
        values: state.level1.values,
        errors: state.level1.errors,
        
    }
}
export default connect(mapStateToProps, {setValue, startGame})(Medium);