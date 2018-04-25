import { bubbleSort } from './bubble-sort'
import { log, randomArray } from './util';

function test() {
    let array = randomArray()
    log(array)
    bubbleSort(array)
    log(array)
}

test()