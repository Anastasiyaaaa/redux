export function createStore(rootReducer, initialState){
    let state = rootReducer(initialState, {type: '__INIT__'});
    const subscribers = [];

    return{
        dispatch(action){
            state = rootReducer(state, action); //новый стейт прогоняем через редьюсер
            subscribers.forEach(sub => sub());//объявляем, что стейт изменился
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}