"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var util = require("./util");
var fs = require("fs");
function test1() {
    var names = new list_1.List();
    names.append('Cynthia');
    names.append('Raymond');
    names.append('Barbara');
    util.assertEqual(names.toString(), 'Cynthia,Raymond,Barbara');
    names.remove('Raymond');
    util.assertEqual(names.toString(), 'Cynthia,Barbara');
}
test1();
function test2() {
    var names = new list_1.List();
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
    function createArr(file) {
        var movies = [];
        fs.readFile('./' + file, { encoding: 'utf-8' }, function (err, data) {
            movies = data.split('\n');
        });
        movies = movies.map(function (movie) { return movie.trim(); });
        return movies;
    }
    var Customer = /** @class */ (function () {
        function Customer(name, movie) {
            this.name = name;
            this.movie = movie;
            //
        }
        return Customer;
    }());
    function displayList(list) {
        for (list.front(); list.currPos < list.length; list.next()) {
            if (list.element instanceof Customer) {
                util.log(list.element['name'] + ', ' + list.element['movie']);
            }
            else {
                util.log(list.element);
            }
        }
    }
    function checkOut(name, movie, filmList, customerList) {
        if (filmList.contains(movie)) {
            var c = new Customer(name, movie);
            customerList.append(c);
            filmList.remove(movie);
        }
        else {
            util.log(movie + ' is not available.');
        }
    }
    // test code here
    var movies = createArr('films.txt');
    var movieList = new list_1.List();
    var customers = new list_1.List();
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        movieList.append(movie);
    }
}
