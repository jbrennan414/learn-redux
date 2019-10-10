//A reducer takes in two things: 
// 1) the action (what happenned)
// 2) a copy of current state

function posts(state=[], action){
    console.log("11111", state,action)
    console.log("The post will change.")
    return state;
}

export default posts;