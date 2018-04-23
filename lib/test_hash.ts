import * as lib from './util'
import { HashTable } from './hash'

function test1() {
    let someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan',]
    let table = new HashTable()
    for (let name of someNames) {
        table.put(name)
    }
    table.showDistro()
}
lib.doTest(test1)