const express = require("express");
const Anilist = require("anilist-api");
const Nyaa    = require('nyaa-si-api')
export default function createApp(app) {
    const server = express();
    const anilist = new Anilist();
    const nyaa = new Nyaa();

    server.get("/hello", (req, res) => {
        res.send("hello");
    });

    server.get("/search", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        anilist.init().then(() => {
            anilist.search_anime(req.param("title")).then((result) => {
                res.send(JSON.stringify(result));
            });
        });
    });

    server.get("/details", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        anilist.init().then(() => {
            anilist.get_anime_details(req.param("id")).then((result) => {
                res.send(JSON.stringify(result));
            });
        });
    });

    server.get("/search_torrents", async (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(await nyaa.search(req.query))
    });

    
    server.listen(8080, () => {
        console.log("Server listening on port 8080");
    });
}
