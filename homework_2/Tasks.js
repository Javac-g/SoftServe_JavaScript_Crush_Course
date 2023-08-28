//Task № 1
///////////////////
const L = prompt('Длина');
const W = prompt('Ширина');
const H = prompt('Высота');
const S = (L * H * 2) + (W * H * 2) / 16;
alert(S);

//Task № 2
///////////////////
function hTask2() {
const A1 = prompt('$ за 1 кг А1');
const A2 = prompt('$ за 1 кг А2');
const A3 = prompt('$ за 1 кг А3');
const B1 = prompt('Кг пiскy типy А1');
const B2 = prompt('Кг пiскy типy А2');
const B3 = prompt('Кг пiскy типy А3');

        let prices = [A1, A2, A3];

        function sort(a, b) {
            if (a < b) {
                return 1;
            } else if (a >= b) {
                return -1;
            }
        }
        prices.sort(sort);
        A1 = prices[0];
        A2 = prices[1];
        A3 = prices[2];

        let capacities = [B1, B2, B3];
        capacities.sort(sort);
        B1 = capacities[0];
        B2 = capacities[1];
        B3 = capacities[2];
        const result = A1 * B1 + A2 * B2 + A3 * B3;
        alert('ви отримаете = ' + result);
}
