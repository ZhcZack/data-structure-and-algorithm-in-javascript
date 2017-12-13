import { Dict } from './dict'
import * as lib from './util'

function test1() {
    let pbook = new Dict<number>()
    pbook.add('Mike', 233)
    pbook.add('David', 666)
    lib.assertEqual(pbook.find('David'), 666)
    pbook.remove('David')
    lib.assertEqual(pbook.showAll(), 'Mike:233')
}
lib.doTest(test1)

function test2() {
    let pbook = new Dict<number>()
    pbook.add('Raymond', 123)
    pbook.add('David', 345)
    pbook.add('Cynthia', 456)
    lib.assertEqual(pbook.count, 3)
    pbook.clear()
    lib.assertEqual(pbook.count, 0)
}
lib.doTest(test2)