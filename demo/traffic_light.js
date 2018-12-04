//  - 3秒 - 红灯亮
//  - 1秒 - 绿灯亮
//  - 2秒 - 黄灯亮

function printColor(color) {
  console.log(color);
}

function light(color, timeout) {
  switch (color) {
    case "red":
      return new Promise(resolve => {
        setTimeout(() => {
          printColor(color);
          resolve();
        }, timeout);
      });
    case "green":
      return new Promise(resolve => {
        setTimeout(() => {
          printColor("green");
          resolve();
        }, timeout);
      });
    case 'yellow':
      return new Promise(resolve => {
        setTimeout(() => {
          printColor("yellow");
          resolve();
        }, timeout);
      });
  }
}

function start() {
  Promise.resolve()
    .then(() => light("red", 3000))
    .then(() => light("green", 1000))
    .then(() => light("yellow", 2000))
    .then(() => start());
}

start();




