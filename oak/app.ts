import { Application,Router, Status } from "https://deno.land/x/oak/mod.ts";

import logger from "./middleware/logger.ts";
import timer from "./middleware/timer.ts";

const app = new Application();
const router = new Router();

// 중간중간 미들웨어를 추가하기

app.use(logger);
app.use(timer);


// Hello World!
router.get("/", (ctx) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
        status: "success",
        message: "Hello, World!",
        data : null,
    };
});

app.use(router.routes())

console.log('app running -> http://localhost:3000');
await app.listen({ port: 3000 });