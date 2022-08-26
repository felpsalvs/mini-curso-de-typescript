// S => string
type numOrStr = number | string;
function useState<S extends numOrStr = string>() {
  let state: S;
  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

// newState.setState(false);
// console.log(newState.getState());

// newState.setState(123);
// console.log(newState.getState());
