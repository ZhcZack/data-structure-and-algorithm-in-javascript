import { ZHash } from "./hash";
import { log, assertEqual } from "./util";

function test() {
    let table = new ZHash()
    table.insert([10, 11, 12, 13])
    table.insert([0, 1, 2, 3])
    log(table.search(10))
    log(table.search(9))
    table.insert(['1', '2', '3'])
    // assertEqual(table.display().toString(), '10,11,12,13')
    log(table.display())
}

test()