"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPatch = exports.edit = exports.createPost = exports.create = exports.index = void 0;
const song_model_1 = __importDefault(require("../../models/song.model"));
const topics_model_1 = __importDefault(require("../../models/topics.model"));
const singer_model_1 = __importDefault(require("../../models/singer.model"));
const config_1 = require("../../config/config");
// [GET] //admin/songs
const index = async (req, res) => {
    const songs = await song_model_1.default.find({
        deleted: false
    });
    res.render("admin/pages/songs/index.pug", {
        pagetitle: "Quản lí bài hát",
        songs: songs
    });
};
exports.index = index;
// [GET] //admin/songs/create
const create = async (req, res) => {
    const topics = await topics_model_1.default.find({
        deleted: false,
        status: "active"
    }).select("title");
    const singers = await singer_model_1.default.find({
        deleted: false,
        status: "active"
    }).select("fullName");
    res.render("admin/pages/songs/create.pug", {
        pagetitle: "Quản lí bài hát",
        topics: topics,
        singers: singers
    });
};
exports.create = create;
// [POST] /songs/create
const createPost = async (req, res) => {
    let avatar = "";
    let audio = "";
    if (req.body.avatar) {
        avatar = req.body.avatar[0];
    }
    if (req.body.audio) {
        audio = req.body.audio[0];
    }
    const dataSong = {
        title: req.body.title,
        topicId: req.body.topicId,
        singerId: req.body.singerId,
        description: req.body.description,
        status: req.body.status,
        avatar: req.body.avatar,
        audio: audio,
        lyrics: req.body.lyrics
    };
    const song = new song_model_1.default(dataSong);
    await song.save();
    res.redirect(`/${config_1.systemConfig.prefixAdmin}/songs`);
};
exports.createPost = createPost;
//[GET] / songs/edit/:id
const edit = async (req, res) => {
    const id = req.params.id;
    const song = await song_model_1.default.findOne({
        _id: id,
        deleted: false
    });
    const topics = await topics_model_1.default.find({
        deleted: false
    }).select("title");
    const singers = await singer_model_1.default.find({
        deleted: false
    }).select("fullName");
    res.render("admin/pages/songs/edit", {
        pagetitle: "chỉnh sửa bài hát",
        song: song,
        topics: topics,
        singers: singers
    });
};
exports.edit = edit;
// [PATCH] /songs/edit:id
const editPatch = async (req, res) => {
    const id = req.params.id;
    const dataSong = {
        title: req.body.title,
        topicId: req.body.topicId,
        singerId: req.body.singerId,
        description: req.body.description,
        status: req.body.status,
        lyrics: req.body.lyrics
    };
    if (req.body.avatar) {
        dataSong["avatar"] = req.body.avatar[0];
    }
    if (req.body.audio) {
        dataSong["audio"] = req.body.audio[0];
    }
    await song_model_1.default.updateOne({
        _id: id
    }, dataSong);
    res.redirect(`/${config_1.systemConfig.prefixAdmin}/songs`);
};
exports.editPatch = editPatch;
