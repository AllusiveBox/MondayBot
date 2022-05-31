import path from "path";
import EnhancedClient from "./models/discord/classes/client/enhanced.client";
import { LogService, ProcessUtil } from "@allusivebox/bootstrap";

// Set start time
process["startTime"] = new Date();

const logger = new LogService("Startup", { workingDirectory: path.join(__dirname, "../temp/boot") });

logger.info(`Process started at ${process["startTime"]}`);
logger.info(`Setting working directory to ${__dirname}`);

logger.info("Attempting to create client...");

const client = new EnhancedClient();

logger.info("Successfully created client");
logger.info(`Detected work environment: ${ProcessUtil.getEnvironment()}`);
