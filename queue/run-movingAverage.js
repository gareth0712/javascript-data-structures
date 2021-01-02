const MovingAverage = require('./Moving-average');

const threeDaysMovAvg = new MovingAverage(3);
console.log(threeDaysMovAvg.next(3));
console.log(threeDaysMovAvg.next(5));
console.log(threeDaysMovAvg.next(11));
console.log(threeDaysMovAvg.next(23));
