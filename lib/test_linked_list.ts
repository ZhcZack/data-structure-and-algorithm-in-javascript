import { LinkedList } from './linked_list'
import * as lib from './util'

function test1() {
    let cities = new LinkedList<string>()
    cities.insertAfter('Conway')
    cities.insertAfter('Russellville', 'Conway')
    cities.insertAfter('Alma', 'Russellville')
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Alma')
}
lib.doTest(test1)

function test2() {
    let cities = new LinkedList<string>()
    cities.insertAfter('Conway')
    cities.insertAfter('Russellville', 'Conway')
    cities.insertAfter('Carlisle', 'Russellville')
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Carlisle')
    cities.remove('Carlisle')
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville')
}
lib.doTest(test2)

function test3() {
    let cities = new LinkedList<string>()
    cities.insertAfter('bj')
    cities.insertAfter('sh', 'bj')
    cities.insertAfter('gz', 'sh')
    cities.advance(1)
    lib.assertEqual(cities.show(), 'bj')
    cities.advance(10)
    lib.assertEqual(cities.show(), 'gz')
}
lib.doTest(test3)