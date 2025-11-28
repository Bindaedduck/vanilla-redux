import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => { //reducer: data를 수정하고 반환한다.
    return count;
};

const countStore = createStore(countModifier); //store: data를 저장한다?