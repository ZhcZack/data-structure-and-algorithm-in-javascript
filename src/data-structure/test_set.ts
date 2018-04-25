import { ZSet } from './set'
import * as lib from './util'

function test1() {
    const names = new ZSet<string>()
    names.add('David')
    names.add('Jennifer')
    names.add('Cynthia')
    names.add('Mike')
    lib.assertEqual(names.display(), 'David,Jennifer,Cynthia,Mike')
    names.delete('Jennifer')
    lib.assertEqual(names.display(), 'David,Cynthia,Mike')
    names.delete('hello')
    lib.assertEqual(names.display(), 'David,Cynthia,Mike')
}
lib.doTest(test1)

function unionTest() {
    let cis = new ZSet<string>()
    cis.add('Mike')
    cis.add('Clayton')
    let dmp = new ZSet<string>()
    dmp.add('Cynthia')
    let it = cis.union(dmp)
    lib.assertEqual(it.display(), 'Mike,Clayton,Cynthia')
}
lib.doTest(unionTest)

function intersectTest() {
    let cis = new ZSet<string>()
    cis.add('hi')
    cis.add('hey')
    cis.add('hello')
    let b = new ZSet<string>()
    b.add('hi')
    lib.assertEqual(cis.intersect(b).display(), 'hi')
    let c = new ZSet<string>()
    lib.assertEqual(cis.intersect(c).display(), '')
}
lib.doTest(intersectTest)

function subsetTest() {
    const it = new ZSet<string>()
    it.add('Cynthia')
    const her = new ZSet<string>()
    her.add('Cynthia')
    her.add('hi')
    const him = new ZSet<string>()
    him.add('hi')

    lib.assertEqual(it.isSubsetOf(her), true)
    lib.assertEqual(it.isSubsetOf(him), false)
    lib.assertEqual(him.isSubsetOf(her), true)
}
lib.doTest(subsetTest)