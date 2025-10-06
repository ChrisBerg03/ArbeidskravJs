const heros = [
    {
        id: 0,
        name: "Gimli",
        maxHealth: 800,
        currentHealth: 800,
        class: "Warrior",
        alive: true,
        ability: [
            { type: "bash", damage: 70 },
            { type: "earthquake", damage: 250 },
        ],
    },
    {
        id: 1,
        name: "Legolas",
        maxHealth: 600,
        currentHealth: 600,
        class: "Archer",
        alive: true,
        ability: [
            { type: "pierce", damage: 60 },
            { type: "multiShot", damage: 150 },
        ],
    },
    {
        id: 2,
        name: "Dr. Protector",
        maxHealth: 400,
        currentHealth: 400,
        class: "Healer",
        alive: true,
        ability: [{ type: "Heal", heal: 100 }],
    },
];
export { heros };
