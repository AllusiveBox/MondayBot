import { ClientOptions } from "discord.js";

export default interface EnhancedClientData {

    /**
     *
     * The client options that are passed from the enhanced client to the client constructor. Optional.
     *
     * @type {?ClientOptions}
     *
     */
    clientOptions?: ClientOptions;

    /**
     *
     * A character string used to indicate the default command prefix for the bot. Optional.
     *
     * @type {?string}
     *
     */
    defaultCommandPrefix?: string;

    /**
     *
     * An object containing log channel data. Optional.
     *
     * @type {?LogChannels}
     *
     */
    logChannels?: LogChannels;

    /**
     *
     * The discord snowflake of the user that owns the bot. Optional.
     *
     * @type {?string}
     *
     */
    ownerId?: string;

    /**
     *
     * The number, in milliseconds, before a user is able to gain points again. Optional.
     *
     * @type {?number}
     */
    scoreCoolDownTimeLimit?: number;

}

/**
 *
 * Interface for holding data related to log channels the enhanced client may use.
 *
 * @interface LogChannels
 *
 */
export interface LogChannels {

    /**
     *
     * Discord snowflake belonging to the channel that is used for boot logging messages. Optional.
     *
     * @type {?string}
     *
     */
    bootChannelId?: string;

    /**
     *
     * Discord snowflake belonging to the channel that is used for logging direct messages the bot recieves while
     * active. Optional.
     *
     * @type {?string}
     *
     */
    directMessageChannelId?: string;

}
