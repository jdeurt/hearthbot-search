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
        var r = {bool, str};
        var regex = new RegExp("("+array.join("|")+")", "i");
        r.bool = this.includes(regex);
        r.str = this.match(regex);
        return r;
    };

    // to make sure the trigger word is valid, it should be by itself and not part of another word
	if(!input.includes(new RegExp(`(^|\s)(${config.search.ALL.join("|")})($|\s)`, "i")))
        return;

    var toSearch = {};
    var pushSearch = function(array, s) {
        if(input.matchWithArray(array).bool)
            toSearch[s] = input.matchWithArray(array).str;
    };

    pushSearch(config.search.RARITY, "rarity");
    pushSearch(config.search.TYPE, "type");
    pushSearch(config.search.CLASS, "class");
    pushSearch(config.search.TEXT, "text");
    if(input.includes("/")) {
        toSearch.attack
    }
    if(input.includes("mana") || input.includes("cost"));
}