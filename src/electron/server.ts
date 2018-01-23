const express:any = require("express");
const Anilist:any = require("anilist-api");

export default function createApp(app: any) {
    const server = express();
    const anilist = new Anilist.default;

    server.get("/hello", (req: any, res: any) => {
        res.send("hello");
    })

    server.get("/test", (req: any, res: any) => {
        res.setHeader('Content-Type', 'application/json');
        anilist.init().then(() => {
            anilist.search_anime(req.param('search')).then((result: any) => {
                res.send(JSON.stringify(result))
            });
        });
    })

    server.listen(8080, () => {
        console.log("Server listening on port 8080");
    })
}