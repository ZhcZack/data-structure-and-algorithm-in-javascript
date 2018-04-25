import { ZList } from './list';
import * as util from './util';
import * as fs from 'fs';
import { strictEqual } from 'assert';

type PrimitiveType = string | boolean | number;

function test1() {
    let names = new ZList<string>();
    names.append('Cynthia');
    names.append('Raymond');
    names.append('Barbara');
    util.assertEqual(names.toString(), 'Cynthia,Raymond,Barbara');

    names.remove('Raymond');
    util.assertEqual(names.toString(), 'Cynthia,Barbara');
}

test1();

function test2() {
    let names = new ZList<string>();
    names.append("Clayton");
    names.append("Raymond");
    names.append("Cynthia");
    names.append("Jennifer");
    names.append("Bryan");
    names.append("Danny");

    names.front();
    util.assertEqual(names.element, 'Clayton');
    names.next();
    util.assertEqual(names.element, 'Raymond');

    names.next();
    names.next();
    names.prev();
    util.assertEqual(names.element, 'Cynthia');

    // for (names.front(); names.currPos < names.length; names.next()) {
    //     util.log(names.element);
    // }
}

test2();