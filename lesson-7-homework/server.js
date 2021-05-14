const http = require("http")
const host = "127.0.0.1";
const port = 8080;
const server = http.createServer();
const fs = require("fs")

server.on("request", (requstMsg, respone) => {
    if (requstMsg.url === "/") {
        respone.writeHead(200, "OK", {"Content-Type": "text/html; charset=utf-8"});
        respone.write("这是根页面");
    } else if (requstMsg.url === "/img") {
        respone.writeHead(200,"OK",{
            'Content-Type':'text/html; charset=utf-8',
            "Cache-Control":"max-age=100"
        })
        respone.write("max-age=100 加载img");
    }
    else if (requstMsg.url === "/png") {
        respone.writeHead(200,"OK",{
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control":"no-cache"
        })
        respone.write("no-cache加载png")
    }
    else if (requstMsg.url === "/mp3") {
        respone.writeHead(200,"OK",{
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control":"no-store"
        })
        respone.write("no-store加载mp3")
    }
    else {
        respone.write("not found!")
    }

})
server.listen(port, host, () => {
    console.log("服务启动了")
}
)