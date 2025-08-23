"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
//[GET]/admin/upload
const index = async (req, res) => {
    console.log(req.body);
    res.send("ok");
};
exports.index = index;
