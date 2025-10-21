import winston from "winston";


export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),

    ),
    defaultMeta: { service: 'user-service' },
    transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ]
});

logger.error("error severe")
logger.warn("this is a warn")
logger.silly("silly me")
logger.info("today is diwali")

