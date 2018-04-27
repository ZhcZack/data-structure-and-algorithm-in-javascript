import { randomArray, log } from "./util";
import { mergeSort } from "./merge-sort";

function test() {
    let array = randomArray()
    log(array)
    array = mergeSort(array)
    log(array)
}

test()