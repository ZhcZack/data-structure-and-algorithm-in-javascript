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