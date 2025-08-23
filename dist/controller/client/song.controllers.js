"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listen = exports.favorite = exports.like = exports.detail = exports.list = void 0;
const topics_model_1 = __importDefault(require("../../models/topics.model"));
const song_model_1 = __importDefault(require("../../models/song.model"));
const singer_model_1 = __importDefault(require("../../models/singer.model"));
const favorite_song_model_1 = __importDefault(require("../../models/favorite-song.model"));
//[GET] //songs/:slugTopic
const list = async (req, res) => {
    try {
        const topic = await topics_model_1.default.findOne({
            slug: req.params.slugTopic,
            status: "active",
            deleted: false
        });
        const songs = await song_model_1.default.find({
            topicId: topic.id,
            status: "active",
            deleted: false
        }).select("avatar title slug singerId like");
        for (const song of songs) {
            const infoSinger = await singer_model_1.default.findOne({
                _id: song.singerId,
                status: "active",
                deleted: false,
            });
            song["infoSinger"] = infoSinger;
        }
        res.render("client/pages/songs/list", {
            pagetitle: topic.title,
            songs: songs
        });
    }
    catch (error) {
        res.redirect("/");
    }
};
exports.list = list;
//[GET]// Songs/detail/:slug
const detail = async (req, res) => {
    const slugSong = req.params.slugSong;
    const song = await song_model_1.default.findOne({
        slug: slugSong,
        status: "active",
        deleted: false
    });
    const singer = await singer_model_1.default.findOne({
        _id: song.singerId,
        deleted: false
    }).select("fullName");
    const topic = await topics_model_1.default.findOne({
        _id: song.topicId,
        deleted: false,
    }).select("title");
    const favoriteSong = await favorite_song_model_1.default.findOne({
        songId: song.id
    });
    song["isFavoriteSong"] = favoriteSong ? true : false;
    res.render("client/pages/songs/detail.pug", {
        pagetitle: "Chi tiết bài hát",
        song: song,
        singer: singer,
        topic: topic
    });
};
exports.detail = detail;
//[PATCH] //songs/like/:typelike/:idSong 
const like = async (req, res) => {
    const idSong = req.params.idSong;
    const typeLike = req.params.typeLike;
    const song = await song_model_1.default.findOne({
        _id: idSong,
        deleted: false,
        status: "active"
    });
    const newLike = typeLike == "like" ? song.like + 1 : song.like - 1;
    await song_model_1.default.updateOne({
        _id: idSong
    }, {
        like: newLike
    });
    res.json({
        code: 200,
        message: "thành công ",
        like: newLike
    });
};
exports.like = like;
//[PATCH] //songs/favorite/:typeFavorite/:idSong 
const favorite = async (req, res) => {
    const idSong = req.params.idSong;
    const typeFavorite = req.params.typeFavorite;
    console.log(idSong);
    console.log(typeFavorite);
    switch (typeFavorite) {
        case "favorite":
            const existFavoriteSong = await favorite_song_model_1.default.findOne({
                songId: idSong
            });
            if (!existFavoriteSong) {
                const record = new favorite_song_model_1.default({
                    songId: idSong
                });
                await record.save();
            }
            break;
        case "unfavorite":
            await favorite_song_model_1.default.deleteOne({
                songId: idSong
            });
            break;
        default:
            break;
    }
    res.json({
        code: 200,
        message: "thành công"
    });
};
exports.favorite = favorite;
//[PATCH] /songs/listen/:idSong 
const listen = async (req, res) => {
    const idSong = req.params.idSong;
    const song = await song_model_1.default.findOne({
        _id: idSong
    });
    const listen = song.listen + 1;
    await song_model_1.default.updateOne({
        _id: idSong
    }, {
        listen: listen
    });
    const songNew = await song_model_1.default.findOne({
        _id: idSong
    });
    res.json({
        code: 200,
        message: "thành công",
        listen: songNew.listen
    });
};
exports.listen = listen;
