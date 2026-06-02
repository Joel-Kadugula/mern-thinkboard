import connectDB from "./src/config/db.js";
import app from "./src/app.js";
import config from "./src/config/config.js";

const port = config.PORT || 5001;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});
