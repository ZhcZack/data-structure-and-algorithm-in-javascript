import { randomArray, log } from "./util";
import { insertionSort } from "./insertion-sort";

function test() {
    let array = randomArray()
    log(array)
    insertionSort(array)
    log(array)
}

test()