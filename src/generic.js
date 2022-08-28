"use strict";
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
// newState.setState(false);
// console.log(newState.getState());
// newState.setState(123);
// console.log(newState.getState());
