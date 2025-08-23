"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const topics_model_1 = __importDefault(require("../../models/topics.model"));
// [GET] /admin/topics
const index = async (req, res) => {
    const topics = await topics_model_1.default.find({
        deleted: false
    });
    res.render("admin/pages/topics/index.pug", {
        pagetitle: "Quản lí chủ đề",
        topics: topics
    });
};
exports.index = index;
