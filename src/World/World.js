import Module from "../Module/Module.js";
import Debug from "../Debug/Debug.js";

export default class {
  constructor({ width, height, debug = false }) {
    this.width = width;
    this.height = height;

    this.debug = debug;

    this.world = [];
  }
  getLastComponent() {
    if (!this.world.length) throw new Error("WORLD IS EMPTY");
    return this.world.at(-1);
  }

  getStartComponent() {
    if (!this.world.length) throw new Error("WORLD IS EMPTY");
    return this.world[0];
  }

  createComponent({
    name,
    pos = {
      x: Math.floor(Math.random() * this.width),
      y: Math.floor(Math.random() * this.height),
    },
    module,
    options,
  }) {
    if (!module) throw new Error("YOU NEED WRITE MODULE NAME");
    if (!name) name = module;
    const newModule = new Module({ name, pos });
    this.world.push(newModule.create(module, options));
    return newModule;
  }

  findById(id) {
    return this.world.find((e) => e.Id == id);
  }

  start() {
    const startData = this.getStartComponent();
    this.recurse(startData.Id);
  }

  recurse(id, input) {
    const component = this.findById(id);
    if (!component) return;

    const payload = {
      next: input,
      options: component?.Options,
    };
    if (this.debug) Debug(component.Name, payload);
    const sendToNext = component.Module(payload); // данные которые мы отправляем следующим модулям
    component.Connections.forEach((componentID) => {
      if (!component?.Connections?.length) return; // УСЛОВИЕ ОСТАНОВКИ РЕКУРСИИ
      this.recurse(componentID, sendToNext);
    });
  }
}
