import { heros } from "./characters/heros.js";
import { boss } from "./characters/boss.js";

const gameData = {
    heros,
    boss,
};
console.log(gameData);

function updateUi() {
    // hero UI

    for (let i = 0; i < gameData.heros.length; i++) {
        const hero = gameData.heros[i];

        // hero health text
        const health = document.getElementById(
            `${hero.class.toLowerCase()}-health-txt`
        );
        health.innerHTML = `Health: ${hero.currentHealth} / ${hero.maxHealth} HP`;
        const name = document.getElementById(
            `${hero.class.toLowerCase()}-name-txt`
        );
        name.innerHTML = hero.name;

        // hero health bar
        const healthBar = document.getElementById(
            `${hero.class.toLowerCase()}-health`
        );
        healthBar.style.width = `${
            (hero.currentHealth / hero.maxHealth) * 300
        }px`;
    }

    // // boss UI
    const dragonHealthTxt = document.getElementById("dragon-health-txt");
    dragonHealthTxt.innerHTML = `Health: ${gameData.boss[0].currentHealth} / ${gameData.boss[0].maxHealth} HP`;
    const dragonName = document.getElementById("dragon-name-txt");
    dragonName.innerHTML = gameData.boss[0].name;

    const dragonHealthBar = document.getElementById("dragon-health");

    // Boss Health Bar
    dragonHealthBar.style.width = `${
        (gameData.boss[0].currentHealth / gameData.boss[0].maxHealth) * 300
    }px`;
}

updateUi();

// function takeDamage() {
//     const damage = 100; // Example damage value
//     gameData.heros[0].currentHealth -= damage;
//     updateUi();
// }

// takeDamage();
