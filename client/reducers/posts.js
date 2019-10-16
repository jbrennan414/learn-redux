//A reducer takes in two things: 
// 1) the action (what happenned)
// 2) a copy of current state

function posts(state=[], action){
    console.log("11111", state,action)
    console.log("The post will change.")
    const i = action.index;
    switch(action.type){
        case "INCREMENT_LIKES":
            console.log("incrementing")
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes:state[i].likes + 1 },
                ...state.slice(i, i + i) //after the one we are updating

            ]
        default:
            return state;
    }

    return state;
}

export default posts;