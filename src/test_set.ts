import { Set } from './set'
import * as lib from './util'

function test1() {
    const names = new Set<string>()
    names.add('David')
    names.add('Jennifer')
    names.add('Cynthia')
    names.add('Mike')
    lib.assertEqual(names.show(), 'David,Jennifer,Cynthia,Mike')
    names.remove('Jennifer')
    lib.assertEqual(names.show(), 'David,Cynthia,Mike')
    names.remove('hello')
    lib.assertEqual(names.show(), 'David,Cynthia,Mike')
}
lib.doTest(test1)

function unionTest() {
    let cis = new Set<string>()
    cis.add('Mike')
    cis.add('Clayton')
    let dmp = new Set<string>()
    dmp.add('Cynthia')
    let it = cis.union(dmp)
    lib.assertEqual(it.show(), 'Mike,Clayton,Cynthia')
}
lib.doTest(unionTest)

function intersectTest() {
    let cis = new Set<string>()
    cis.add('hi')
    cis.add('hey')
    cis.add('hello')
    let b = new Set<string>()
    b.add('hi')
    lib.assertEqual(cis.intersect(b).show(), 'hi')
    let c = new Set<string>()
    lib.assertEqual(cis.intersect(c).show(), '')
}
lib.doTest(intersectTest)

function subsetTest() {
    const it = new Set<string>()
    it.add('Cynthia')
    const her = new Set<string>()
    her.add('Cynthia')
    her.add('hi')
    const him = new Set<string>()
    him.add('hi')

    lib.assertEqual(it.subset(her), true)
    lib.assertEqual(it.subset(him), false)
    lib.assertEqual(him.subset(her), true)
}
lib.doTest(subsetTest)