import { LoopLinkedList as Lll } from './loop_linked_list'
import * as lib from './util'

function test1() {
    let cities = new Lll<string>()
    cities.insertAfter('bj')
    cities.insertAfter('sh', 'bj')
    cities.insertAfter('gz', 'sh')
    cities.insertAfter('sz', 'gz')
    lib.log(cities.walkThrough())
    lib.assertEqual(cities.walkThrough(), 'bj,sh,gz,sz')
}
lib.doTest(test1)