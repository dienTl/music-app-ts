"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToSlug = void 0;
const unidecode_1 = __importDefault(require("unidecode"));
const convertToSlug = (text) => {
    const unidecodeText = (0, unidecode_1.default)(text.trim());
    const slug = unidecodeText
        .toLowerCase()
        .replace(/\s+/g, "-") // thay khoảng trắng bằng -
        .replace(/[^a-z0-9\-]/g, "") // bỏ ký tự đặc biệt
        .replace(/\-+/g, "-") // gộp nhiều dấu - liên tiếp thành 1
        .replace(/^-+|-+$/g, ""); // bỏ - ở đầu/cuối
    return slug;
};
exports.convertToSlug = convertToSlug;
