"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFields = exports.uploadSingle = void 0;
const uploadCloud_middlerWare_1 = require("../../helper/uploadCloud.middlerWare");
const uploadSingle = async (req, res, next) => {
    try {
        const result = await (0, uploadCloud_middlerWare_1.uploadToCloudinary)(req["file"].buffer);
        req.body[req["file"].fieldname] = result;
    }
    catch (error) {
        console.log(error);
    }
    next();
};
exports.uploadSingle = uploadSingle;
const uploadFields = async (req, res, next) => {
    console.log(req["files"]);
    for (const key in req["files"]) {
        req.body[key] = [];
        const array = req["files"][key];
        for (const item of array) {
            try {
                const result = await (0, uploadCloud_middlerWare_1.uploadToCloudinary)(item.buffer);
                req.body[key].push(result);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    next();
};
exports.uploadFields = uploadFields;
