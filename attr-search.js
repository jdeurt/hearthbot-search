/**
 * Card attribute search
 * @param {string} input the search string
 */
module.exports = function(input) {
    var Discord = require('discord.io');
    var logger = require('winston');
    var auth = require('./auth');
    var config = require('./config');
    var deckstrings = require('deckstrings');
    var fetch = require('node-fetch');
    fetch.Promise = require('bluebird');

    // will only return first result
    String.prototype.matchWithArray = function(array) {
        var r = {bool, str = []};
        var regex = new RegExp("("+array.join("|")+")", "gi");
        r.bool = this.includes(regex);
        this.match(regex).forEach(v => {
            r.str.push(v);
        });
        return r;
    };

    // to make sure the trigger word is valid, it should be by itself and not part of another word
	if(!input.includes(new RegExp(`(^|\s)(${config.search.ALL.join("|")})($|\s)`, "i")))
        return;

    var toSearch = {};
    var pushSearch = function(array, s) {
        if(input.matchWithArray(array).bool) {
            if(!toSearch[s]) toSearch[s] = new Array();
            input.matchWithArray(array).str.forEach(v => {
                toSearch[s].push(v);
            });
        }
    };

    pushSearch(config.search.RARITY, "rarity");
    pushSearch(config.search.TYPE, "type");
    pushSearch(config.search.CLASS, "class");
    pushSearch(config.search.TEXT, "text");
    if(input.includes("/")) {
        var numbers = input.match(/\d+\/\d+/)[0];
        toSearch.attack = parseInt(numbers.slice(0, numbers.indexOf("/")));
        toSearch.health = parseInt(numbers.slice(numbers.indexOf("/")+1));
    }
    if(input.includes("mana")) {
        var mana = input.match(/\d+\smana/i)[0];
        toSearch.cost = parseInt(mana.match(/\d+/)[0]);
    }

    /*
        In the end, the object should look something like:
            toSearch: {
                rarity: "rare",
                cost: 6,
                attack: 4,
                health: 4
            }
        if the user searches for "rare 6 mana 4/4"
    */
}