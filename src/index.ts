import * as express from 'express';
const bodyParser = require('body-parser');
import { checkPassword } from './controllers';

require("dotenv").config();

// Constants
const PORT = process.env.PORT && parseInt(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// App
const app = express();
app.use(bodyParser.json({ type: 'application/json' }))

/**
 * Start Express server.
 */
const startServer = () => app.listen(PORT, HOST, () => {
    console.log(
      "  App is running at http://%s:%d in %s mode",
      HOST,
      PORT
    );
    console.log("  Press CTRL-C to stop\n");
});

async function main() {
    app.get("/check-password", checkPassword)

    await startServer();
}

main() 
    .then(() => console.log("Online"))
    .catch(err => {
        console.error("Failed to start!");
        console.error(err && err.stack || err);
    });
