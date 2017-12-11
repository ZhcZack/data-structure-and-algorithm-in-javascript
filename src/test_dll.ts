import { DoubleLinkedList as Dll } from './double_linked_list'
import * as lib from './util'

function test1() {
    let cities = new Dll<string>()
    cities.insert('Conway')
    cities.insert('Russellville', 'Conway')
    cities.insert('Carlisle', 'Russellville')
    cities.insert('Alma', 'Carlisle')
    lib.assertEqual(cities.display(), 'Conway,Russellville,Carlisle,Alma')
    cities.remove('Carlisle')
    lib.assertEqual(cities.display(), 'Conway,Russellville,Alma')
    lib.assertEqual(cities.displayReverse(), 'Alma,Russellville,Conway')
}
lib.doTest(test1)

function test2() {
    let cities = new Dll<string>()
    cities.insert('Conway')
    cities.insert('Russellville', 'Conway')
    cities.insert('Carlisle', 'Russellville')
    cities.insert('Alma', 'Carlisle')
    cities.advance(1)
    cities.back(1)
    lib.assertEqual(cities.show(), 'HEAD')
}
lib.doTest(test2)