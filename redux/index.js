function createStore(reducer){
    let state
    let listeners = []

    const getState = () => {state}

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
          listeners = listeners.filter((l) => l !== listener)
        }
    }


    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
      }


    return{
        getState,
        subscribe,
        dispatch,
    }
}


function todo(state = [], action){
    if (action.type === 'ADD_TODO'){
        return state.concat([action.todo])
    }

    return state
}