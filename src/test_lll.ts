import { LoopLinkedList as Lll } from './loop_linked_list'
import * as lib from './util'

function test1() {
    let cities = new Lll<string>()
    cities.insert('bj')
    cities.insert('sh', 'bj')
    cities.insert('gz', 'sh')
    cities.insert('sz', 'gz')
    lib.log(cities.display())
    lib.assertEqual(cities.display(), 'bj,sh,gz,sz')
}
lib.doTest(test1)