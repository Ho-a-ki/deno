
import { serve } from "https://deno.land/std@0.83.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080})


console.log('웹서버 러닝');

(async function handleHttpRequest() {
    for await (const request of server) {
        let bodyContent = "Your user-agent is :\n\n";
        bodyContent += request.headers.get("user-agent") || "Unknown"
        request.respond({
            status: 200,
            body: `
            Hello Deno!
                          __
                          / _)
                _.----._/ /
                /         /
            __/ (  | (  |
            /__.-'|_|--|_|
            `
        });
    }
}) ()