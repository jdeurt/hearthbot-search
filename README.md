# hearthbot-search
A attribute search addon for the /r/hearthstone discord cardbot

### Getting started
```javascript
var search = require('./attr-search');
// ...
var results = search(searchString); // a string that may contain search trigger words
/*
results = ["card name 1", "card name 2", ...]
*/
```


Search string:
```
6 mana 4/4 draw
```
Result:
```javascript
["Gadgetztan Auctioneer"]
```

### TODO
* BIG PROBLEMO: the results for the search are displayed correctly when logged into console but don't get returned???
* Figure out a way to use the hearthbot-web API to filter results and not have to use a JSON file
* Launch the updated hearthbot

### Supported attributes
* cost
  - any whole number
* attack
  - any whole number
* health
  - any whole number
* type
  - minion, spell, weapon, hero
* rarity
  - free, common, rare, epic, legendary
* class
  - neutral, any of the 9 heroes
* text
  - a key word (listed below)
#### Supported key words
* adapt
* gain
* restore
* holding
* draw
* recruit
* battlecry
* charge
* choose one
* combo
* counter
* deathrattle
* discover
* enrage
* freeze
* immune
* inspire
* lifesteal
* mega-windfury
* overload
* poisonous
* quest
* silence
* stealth
* spell damage
* taunt
* secret
* divine shield
* windfury

### Card object examples
#### Minion
```javascript
"40378": {
    "name": "Drakonid Operative",
    "set": "Mean Streets of Gadgetzan",
    "type": "Minion",
    "text": "[x]Battlecry: If you're holding a\\nDragon, Discover a card in\\n_your opponent's deck.",
    "rarity": "Rare",
    "cost": 5,
    "class": "Priest",
    "img": "http:\/\/media.services.zam.com\/v1\/media\/byName\/hs\/cards\/enus\/CFM_605.png",
    "id": 40378,
    "collectible": true,
    "health": 6,
    "attack": 5
}
```
#### Spell
```javascript
"315": {
    "name": "Fireball",
    "set": "Basic",
    "type": "Spell",
    "text": "Deal $6 damage.",
    "rarity": "Free",
    "cost": 4,
    "class": "Mage",
    "img": "http:\/\/media.services.zam.com\/v1\/media\/byName\/hs\/cards\/enus\/CS2_029.png",
    "id": 315,
    "collectible": true
}
```
#### Weapon
```javascript
"401": {
    "name": "Fiery War Axe",
    "set": "Basic",
    "type": "Weapon",
    "text": "",
    "rarity": "Free",
    "cost": 3,
    "class": "Warrior",
    "img": "http:\/\/media.services.zam.com\/v1\/media\/byName\/hs\/cards\/enus\/CS2_106.png",
    "id": 401,
    "collectible": true,
    "attack": 3,
    "health": 2
    }
```
