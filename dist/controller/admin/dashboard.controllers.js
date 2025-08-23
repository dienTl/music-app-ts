"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
// [GET] /admin/dashboard
const index = async (req, res) => {
    res.render("admin/pages/dashboard/index.pug", {
        pagetitle: "Tổng quan"
    });
};
exports.index = index;
