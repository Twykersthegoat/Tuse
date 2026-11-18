import express from "express";
import path from "node:path";

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, name: "Tuse", status: "ready" });
});

app.listen(port, () => {
  console.log(`Tuse is listening on http://localhost:${port}`);
});
