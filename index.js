import { heros } from "./utility/characters/heros.js";
import { boss } from "./utility/characters/boss.js";

const gameData = {
    heros,
    boss,
};

const updateUI = () => {
    const bossName = document.getElementById("bossName");
    const bossHealth = document.getElementById("bossHealth");
    const hero1Name = document.getElementById("hero1Name");
    const hero1Health = document.getElementById("hero1Health");
    const hero2Name = document.getElementById("hero2Name");
    const hero2Health = document.getElementById("hero2Health");
    const hero3Name = document.getElementById("hero3Name");
    const hero3Health = document.getElementById("hero3Health");

    bossName.innerText = gameData.boss.name;
    bossHealth.innerText = `Health: ${gameData.boss.health}`;

    hero1Name.innerText = gameData.heros[0].name;
    hero1Health.innerText = `Health: ${gameData.heros[0].health}`;

    hero2Name.innerText = gameData.heros[1].name;
    hero2Health.innerText = `Health: ${gameData.heros[1].health}`;

    hero3Name.innerText = gameData.heros[2].name;
    hero3Health.innerText = `Health: ${gameData.heros[2].health}`;
};

updateUI();
