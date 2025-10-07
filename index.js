import { heros } from "./characters/heros.js";
import { boss } from "./characters/boss.js";
const fireballSound = new Audio("/assets/sounds/fireball.mp3");
const gameData = {
    heros,
    boss,
};
const healerCharacter = document.getElementById("healer");
const archerCharacter = document.getElementById("archer");
const warriorCharacter = document.getElementById("warrior");
const dragonHealthTxt = document.getElementById("dragon-health-txt");

const healer = gameData.heros[2];
const archer = gameData.heros[1];
const warrior = gameData.heros[0];

console.log(gameData);

function updateUi() {
    // hero UI
    for (let i = 0; i < gameData.heros.length; i++) {
        const hero = gameData.heros[i];
        if (hero.currentHealth <= 0) {
            const element = document.getElementById(hero.class.toLowerCase());
            if (element) element.remove();
        }
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

    // check if all heroes are dead
    const allDead = gameData.heros.every((hero) => hero.currentHealth <= 0);
    if (allDead) {
        setTimeout(() => {
            alert("All heroes have fallen. The boss wins!");
        }, 1000);
    }

    // boss defeated
    if (gameData.boss[0].currentHealth <= 0) {
        const dragonElement = document.getElementById("dragon");
        if (dragonElement) dragonElement.remove();
        setTimeout(() => {
            alert("The boss has been defeated! Heroes win!");
        }, 1000);
    }
    // // boss UI
    dragonHealthTxt.innerHTML = `Health: ${gameData.boss[0].currentHealth} / ${gameData.boss[0].maxHealth} HP`;
    const dragonName = document.getElementById("dragon-name-txt");
    dragonName.innerHTML = gameData.boss[0].name;

    const dragonHealthBar = document.getElementById("dragon-health");

    // Boss Health Bar
    dragonHealthBar.style.width = `${
        (gameData.boss[0].currentHealth / gameData.boss[0].maxHealth) * 300
    }px`;
}

// healer attack (white on the left)
function healerAttack() {
    console.log("healer attack");
    if (healer.currentHealth + healer.healAmount > healer.maxHealth) {
        healer.currentHealth = healer.maxHealth;
    } else {
        healer.currentHealth += healer.healAmount;
    }

    if (warrior.currentHealth + healer.healAmount > warrior.maxHealth) {
        warrior.currentHealth = warrior.maxHealth;
    } else {
        warrior.currentHealth += healer.healAmount;
    }

    if (archer.currentHealth + healer.healAmount > archer.maxHealth) {
        archer.currentHealth = archer.maxHealth;
    } else {
        archer.currentHealth += healer.healAmount;
    }
    setTimeout(bossAttack, 1000);
    updateUi();
}

// warrior attack (blue on the right)
function warriorAttack() {
    console.log("warrior attack");
    if (gameData.boss[0].currentHealth - warrior.damage < 0) {
        gameData.boss[0].currentHealth = 0;
    } else {
        gameData.boss[0].currentHealth -= warrior.damage;
    }
    setTimeout(bossAttack, 1000);
    updateUi();
}

// archer attack (blue in the middle)
function archerAttack() {
    console.log("archer attack");
    if (gameData.boss[0].currentHealth - archer.damage < 0) {
        gameData.boss[0].currentHealth = 0;
    } else {
        gameData.boss[0].currentHealth -= archer.damage;
    }
    setTimeout(bossAttack, 1000);
    updateUi();
}

function bossAttack() {
    console.log("boss attack");

    fireballSound.play();
    // collect all alive heroes
    const aliveHeroes = gameData.heros.filter((h) => h.currentHealth > 0);
    if (aliveHeroes.length === 0) return; // no targets left

    // pick random target
    const target = aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];

    // apply damage
    if (target.currentHealth - gameData.boss[0].damage < 0) {
        target.currentHealth = 0;
    } else {
        target.currentHealth -= gameData.boss[0].damage;
    }

    console.log(`Boss attacks ${target.name}!`);
    updateUi();
}

healerCharacter.addEventListener("click", healerAttack);
archerCharacter.addEventListener("click", archerAttack);
warriorCharacter.addEventListener("click", warriorAttack);

updateUi();
