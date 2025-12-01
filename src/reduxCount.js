import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => { //reducer: data를 수정하고 반환한다.
    switch (action.type){
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const countStore = createStore(countModifier); //store: data를 저장한다.

const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange); //store안에서의 변화를 보여준다.

//countStore.dispatch({type: "ADD"}); //action에 메시지를 넘겨준다?
add.addEventListener("click", () => countStore.dispatch({type: ADD}));
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));



