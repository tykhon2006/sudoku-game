const SET_VALUE = "SET-VALUE";
const START_GAME = "START-GAME";
const dataSet = {

    chooseMatrix() {
        return Math.floor(Math.random() * this.optionMatrix.length);
    },
    optionMatrix: [
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4],
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4],
            ],
        ],
        [
            [
                [1, 2, 3, 5, 4, 6],
                [4, 5, 6, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4],
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 6, 3, 1, 2],
                [2, 0, 1, 0, 5, 0],
                [0, 0, 5, 0, 0, 0],
                [0, 0, 2, 0, 0, 1],
                [5, 1, 0, 2, 3, 0],
            ],
        ],
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4],
            ],
            [
                [1, 0, 3, 5, 0, 6],
                [0, 5, 4, 3, 1, 2],
                [0, 6, 1, 0, 0, 0],
                [4, 3, 0, 0, 0, 1],
                [0, 4, 2, 1, 0, 0],
                [5, 0, 0, 2, 0, 4],
            ],
        ] 
    ]
}
const initialState = {
    matrix: {},
    values: [1, 2, 3, 4, 5, 6],
    errors: 0,
}

const randomChoose = (state, dataSet) => {
    let randomOption = dataSet.chooseMatrix();
    let start = JSON.stringify(dataSet.optionMatrix[randomOption][1]);
    start = JSON.parse(start);
    let end = JSON.stringify(dataSet.optionMatrix[randomOption][0]);
    end = JSON.parse(end);
    return {
        ...state,
        matrix: {
            ...state.matrix,
            start,
            end
        },
        errors: 0,
    }
}

const easyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            let newState = {
                ...state,
                matrix: {
                    ...state.matrix,
                    start: [
                        ...state.matrix.start,
                    ]
                }
            }
            if (state.matrix.end[action.indexArr[0]][action.indexArr[1]] === +action.value) {
                newState.matrix.start[action.indexArr[0]][action.indexArr[1]] = +action.value
            } else {
                newState.errors++
            }
            return newState;
        case START_GAME:
            return randomChoose(state, dataSet);
    }
    return randomChoose(state, dataSet);
}
export const setValue = (value, indexArr) => ({ type: SET_VALUE, value, indexArr });
export const startGame = () => ({ type: START_GAME });
export default easyReducer;