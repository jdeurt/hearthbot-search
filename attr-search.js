/**
 * Card attribute search
 * @param {string} input the search string
 */
module.exports = function(input) {
    var config = require('./config');

    // will only return first result
    String.prototype.matchWithArray = function(array) {
        var r = {bool: false, str: []};
        var regex = new RegExp("("+array.join("|")+")", "gi");
        r.bool = (this.search(regex) >= 0);
        this.match(regex).forEach(v => {
            r.str.push(v);
        });
        return r;
    };

    // to make sure the trigger word is valid, it should be by itself and not part of another word
    if(input.search(new RegExp(`\b(${config.search.ALL.join("|")})\b`, "i")) == -1)
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

    // if a search word is found, add it to the toSearch object
    pushSearch(config.search.RARITY, "rarity");
    pushSearch(config.search.TYPE, "type");
    pushSearch(config.search.CLASS, "class");
    pushSearch(config.search.TEXT, "text");
    if(input.includes("/")) {
        var numbers = input.match(/\d+\/\d+/)[0];
        toSearch.attack = parseInt(numbers.match(/^\d+/)[0]);
        toSearch.health = parseInt(numbers.match(/\d+$/)[0]);
    }
    if(input.includes("mana")) {
        var mana = input.match(/\d+\smana\b/i)[0];
        toSearch.cost = parseInt(mana.match(/\d+/)[0]);
    }

    // return an object containing all the search keys
    return toSearch;
}
