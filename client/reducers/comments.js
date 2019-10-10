//A reducer takes in two things: 
// 1) the action (what happenned)
// 2) a copy of current state

function comments(state=[], action){
    console.log("2222", state,action)
    return state;
}

export default comments;