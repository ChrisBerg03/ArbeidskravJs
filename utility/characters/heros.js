let heros = [
    {
        id: "hero1",
        name: "Mage",
        health: 150,
        img: "/path/to/hero1.png",
        powers: [
            { name: "Fireball", damage: 50 },
            { name: "Ice Shard", damage: 40 },
            { name: "Block", damage: 0 },
        ],
    },
    {
        id: "hero2",
        name: "Warrior",
        health: 200,
        img: "/path/to/hero2.png",
        powers: [
            { name: "Slash", damage: 60 },
            { name: "Dodge", damage: 0 },
            { name: "Charge", damage: 70 },
        ],
    },
    {
        id: "hero3",
        name: "Healer",
        health: 100,
        img: "/path/to/hero3.png",
        powers: [
            { name: "Heal", damage: 0, heal: 50 },
            { name: "Protect", damage: 0 },
        ],
    },
];
export { heros };
