# Card database format
```c++
card_bdfId: {
    name: "The name of the card",
    set: "The set that the card belongs to, not the set id but a literal name",
    type: "The type of card: either minion, spell, weapon, or hero",
    text: "Any other text in the card",
    rarity: "The rarity of the card: either free, common, rare, epic, or legendary",
    cost: "The cost of the card",
    class: "The hero that the card belongs too, or neutral",
    img: "Image url for the card",
    id: "seems kind of redundant since the way to identify the card is through the dbfId but maybe there's something Im missing",
    collectible: "Whether the card can be crafted or not"
}
```

# Database card search info
Not too sure about this one, will look more into it later.