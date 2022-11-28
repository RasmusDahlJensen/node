import http from "http";

http
	.createServer((req, res) => {
		const value = 10;
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(`Hello World! ${value}`);
		res.end();
	})
	.listen(4000);
