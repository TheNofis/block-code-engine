import { v4 } from "uuid";

import ModuleList from "./ModuleList.js";

export default class {
  constructor({ pos, name }) {
    this.PosX = pos.x;
    this.PosY = pos.y;
    this.Name = name;
    this.IsCreated = false;
    this.Id = undefined;
    this.Options;
    this.Connections = [];
  }
  isExists() {
    return this.IsCreated;
  }
  create(module, options) {
    if (!this.isExists) throw new Error("MODULE IS EXIST");
    this.Id = v4();
    this.IsCreated = true;
    this.Module = ModuleList[module];
    this.Options = options;
    return this;
  }
  connect(connectID) {
    this.Connections.push(connectID);
  }
}
