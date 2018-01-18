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

    // to make sure the trigger word is valid, it should be by itself and not part of another word
    var regex = new RegExp(`(^|\s)(${config.search.ALL.join("|")})($|\s)`, i);
	if(!card.includes(regex))
        return;

    var toSearch = {};
}