import './styles.css';
import {createStore} from "./createStore";
import {rootReducer} from "./redux/rootReducer";

const addBtn= document.getElementById('add');
const subBtn = document.getElementById('sub');
const counter = document.getElementById('counter');
const async = document.getElementById('async');
const theme = document.getElementById('theme');

const store = createStore(rootReducer, 0);
window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
});

// async.addEventListener('click', () => {
//     setTimeout(() => {
//         store.dispatch({type: 'INCREMENT'})
//     }, 2000)
// });
store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch({type: ' __INIT__SUBSCRIBE__'})

// theme.addEventListener('click', () => document.body.classList.toggle('dark'))