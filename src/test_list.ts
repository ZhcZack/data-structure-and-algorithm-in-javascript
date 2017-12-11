import { List } from './list';
import * as util from './util';
import * as fs from 'fs';
import { strictEqual } from 'assert';

type PrimitiveType = string | boolean | number;

function test1() {
    let names = new List<string>();
    names.append('Cynthia');
    names.append('Raymond');
    names.append('Barbara');
    util.assertEqual(names.toString(), 'Cynthia,Raymond,Barbara');

    names.remove('Raymond');
    util.assertEqual(names.toString(), 'Cynthia,Barbara');
}

test1();

function test2() {
    let names = new List<string>();
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

function test3() {
    function createArr(file: string): string[] {
        let movies: string[] = [];
        fs.readFile('./' + file, { encoding: 'utf-8' }, (err, data) => {
            movies = data.split('\n');
        });
        movies = movies.map(movie => movie.trim());
        return movies;
    }
    class Customer {
        constructor(public name: string, public movie: string) {
            //
        }
    }
    function displayList<T extends PrimitiveType>(list: List<T>) {
        for (list.front(); list.currPos < list.length; list.next()) {
            if (list.element instanceof Customer) {
                util.log(list.element['name'] + ', ' + list.element['movie']);
            }
            else {
                util.log(list.element);
            }
        }
    }
    function checkOut(name: string, movie: string, filmList: List<string>, customerList: List<Customer>) {
        if (filmList.contains(movie)) {
            let c = new Customer(name, movie);
            customerList.append(c);
            filmList.remove(movie);
        } else {
            util.log(movie + ' is not available.');
        }
    }

    // test code here
    let movies = createArr('films.txt');
    let movieList = new List<string>();
    let customers = new List<Customer>();
    for (let movie of movies) {
        movieList.append(movie);
    }
}