import World from "./src/World/World.js";

const Test = new World({
  width: 100,
  height: 100,
  debug: false,
});
const module1 = Test.createComponent({
  module: "StartProgram",
});

const module2 = Test.createComponent({
  module: "Variable",
  options: { variable: 1 },
});

const module3 = Test.createComponent({
  module: "Variable",
  options: { variable: 5 },
});

const module4 = Test.createComponent({
  module: "ConsoleLog",
});

const module5 = Test.createComponent({
  module: "Counter",
  options: {
    increment: 10,
  },
});

const module6 = Test.createComponent({
  module: "ConsoleLog",
});

module1.connect(module2.Id);
module1.connect(module3.Id);

module2.connect(module4.Id);

module3.connect(module5.Id);
module5.connect(module6.Id);
Test.start();
