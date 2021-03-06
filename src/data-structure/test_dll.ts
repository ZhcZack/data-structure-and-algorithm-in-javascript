import { DoubleLinkedList as Dll } from './double_linked_list'
import * as lib from './util'

function test1() {
    let cities = new Dll<string>()
    cities.insertAfter('Conway')
    cities.insertAfter('Russellville', 'Conway')
    cities.insertAfter('Carlisle', 'Russellville')
    cities.insertAfter('Alma', 'Carlisle')
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Carlisle,Alma')
    cities.remove('Carlisle')
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Alma')
    lib.assertEqual(cities.reverseWalkThrough(), 'Alma,Russellville,Conway')
}
lib.doTest(test1)

function test2() {
    let cities = new Dll<string>()
    cities.insertAfter('Conway')
    cities.insertAfter('Russellville', 'Conway')
    cities.insertAfter('Carlisle', 'Russellville')
    cities.insertAfter('Alma', 'Carlisle')
    cities.advance(1)
    cities.back(1)
    lib.assertEqual(cities.show(), 'HEAD')
}
lib.doTest(test2)