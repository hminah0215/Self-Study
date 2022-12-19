"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get("/", function (req, res) {
    res.send({ name: "min", age: 99, friends: ["aa", "bb", "cc"] });
});
app.listen(port, function () {
    console.log("\uD3EC\uD2B8 \uC0AC\uC6A9\uC911, http://localhost:" + port);
});
//# sourceMappingURL=app.js.map