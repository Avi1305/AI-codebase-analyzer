import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server started on port 3000");
});
//# sourceMappingURL=server.js.map