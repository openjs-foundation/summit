const { eat, poop, sleep } = require('baby');


const rand = Math.random();
if (rand < 0.34) {
	eat();
} else if (rand > 0.34 && rand < 0.67) {
	poop();
} else {
	sleep();
}
