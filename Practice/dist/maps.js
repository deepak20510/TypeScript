"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//intialize an empty Map
const userMap = new Map();
//add users to the map using .set
userMap.set("1", { id: "1", name: "Deepak" });
userMap.set("2", { id: "2", name: "Rohit" });
//Accessing a value using .get
console.log(userMap.get("1"));
//# sourceMappingURL=maps.js.map