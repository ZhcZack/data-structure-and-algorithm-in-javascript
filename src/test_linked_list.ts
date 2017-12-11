import { LinkedList } from './linked_list'
import * as lib from './util'

function test1() {
    let cities = new LinkedList<string>()
    cities.insert('Conway')
    cities.insert('Russellville', 'Conway')
    cities.insert('Alma', 'Russellville')
    lib.assertEqual(cities.display(), 'Conway,Russellville,Alma')
}
lib.doTest(test1)

function test2() {
    let cities = new LinkedList<string>()
    cities.insert('Conway')
    cities.insert('Russellville', 'Conway')
    cities.insert('Carlisle', 'Russellville')
    lib.assertEqual(cities.display(), 'Conway,Russellville,Carlisle')
    cities.remove('Carlisle')
    lib.assertEqual(cities.display(), 'Conway,Russellville')
}
lib.doTest(test2)

function test3() {
    let cities = new LinkedList<string>()
    cities.insert('bj')
    cities.insert('sh', 'bj')
    cities.insert('gz', 'sh')
    cities.advance(1)
    lib.assertEqual(cities.show(), 'bj')
    cities.advance(10)
    lib.assertEqual(cities.show(), 'gz')
}
lib.doTest(test3)