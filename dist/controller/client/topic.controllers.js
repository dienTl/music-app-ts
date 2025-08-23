"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topics = void 0;
const topics_model_1 = __importDefault(require("../../models/topics.model"));
//[GET] /topics/
const topics = async (Request, res) => {
    const topics = await topics_model_1.default.find({
        deleted: false
    });
    res.render("client/pages/topics/index.pug", {
        pagetitle: "Chủ đề bài hát",
        topics: topics
    });
};
exports.topics = topics;
