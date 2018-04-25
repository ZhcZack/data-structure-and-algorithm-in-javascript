import { randomArray, log } from "./util";
import { selectionSort } from "./selection-sort";

function test() {
    let array = randomArray()
    log(array)
    selectionSort(array)
    log(array)
}

test()