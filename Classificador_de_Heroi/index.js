let heroi = ["Sonic", "Tails", "Knuckles", "Amy", "Rouge", "Shadow", "Big", "Cream"];
let quantidadeXP = [950, 1375, 2683, 3291, 4838, 5712, 6961, 7413];
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let contador = 0; contador < 8; contador++) {
    let xp = quantidadeXP[contador];
    let nomeHeroi = heroi[contador];
    let nivelHeroi;

    switch (true) {
        case xp > 1 && xp < 1000:
            nivelHeroi = nivel[0];
            break;
        case xp > 1001 && xp < 2000:
            nivelHeroi = nivel[1];
            break;
        case xp > 2001 && xp < 3000:
            nivelHeroi = nivel[2];
            break;
        case xp > 3001 && xp < 4000:
            nivelHeroi = nivel[3];
            break;
        case xp > 4001 && xp < 5000:
            nivelHeroi = nivel[4];
            break;
        case xp > 5001 && xp < 6000:
            nivelHeroi = nivel[5];
            break;
        case xp > 6001 && xp < 7000:
            nivelHeroi = nivel[6];
            break;
        case xp > 7001:
            nivelHeroi = nivel[7];
            break;
        default:
            nivelHeroi = "Nível não definido";
    }

    console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
}