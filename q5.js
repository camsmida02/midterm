export function damageLevel (intensity){
    if (intensity < 5) {
        return 'Little or no damage';
    } else if (intensity < 5.5) {
        return 'Some damage';
    } else if (intensity < 6.5) {
        return 'Serious damage: walls may crack or fall';
    } else if (intensity < 7.5) {
        return 'Disaster: buildings may collapse';
    } else {
        return 'Catastrophe: most buildings destroyed';
    }
}

console.log(damageLevel(4));
console.log(damageLevel(6));
console.log(damageLevel(8));