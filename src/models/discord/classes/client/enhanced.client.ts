import { Client, ClientOptions, Collection, Intents } from "discord.js";
import CommandCore from "../commands/command.core";
import { EnvironmentType, ProcessUtil } from "@allusivebox/bootstrap";
import EnhancedClientData, { LogChannels } from "../../interfaces/typing/constructors/client/enhanced.client.data";

/**
 *
 * Object to hold the default client options to be used by the enhanced client.
 *
 * @type {ClientOptions}
 *
 */
const DEFAULT_CLIENT_OPTIONS: ClientOptions = {
    allowedMentions: {
        parse: [
            "roles",
            "users"
        ],
        repliedUser: true
    },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        "CHANNEL",
        "GUILD_MEMBER",
        "MESSAGE",
        "REACTION",
        "USER"
    ]
};

/**
 *
 * Default command prefix to be used by the enhanced client if one is not provided when instantiated.
 *
 * @type {string}
 *
 */
const DEFAULT_COMMAND_PREFIX = "!";

/**
 *
 * Default cool down time, in milliseconds, before a user is able to gain points again.
 *
 * @type {number}
 *
 */
const DEFAULT_SCORE_COOL_DOWN_TIME_LIMIT = 30000;


export default class EnhancedClient extends Client {

    /** Private static variables */

    /** Private variables */

    /**
     *
     * Flag that indicates if the bot is currently accepting commands or not.
     *
     * @type {boolean}
     * @private
     *
     */
    #acceptingCommands: boolean;

    /**
     *
     * The default character sequence that the bot uses to indicate a message is a command.
     *
     * @type {string}
     * @private
     * @readonly
     *
     */
    readonly #defaultCommandPrefix: string;

    /**
     *
     * Flag that indicates if the bot is currently attempting to kick or ban a member.
     *
     * @type {boolean}
     * @private
     *
     */
    #kickingOrBanningMember: boolean;

    /**
     *
     * Object that holds the channel ids for various log channels the bot uses.
     *
     * @type {LogChannels}
     * @private
     *
     */
    #logChannels: LogChannels;

    /**
     *
     * The discord snowflake belonging to the bot owner.
     *
     * @type {string}
     * @private
     *
     */
    readonly #ownerId;

    /**
     *
     * A set of user snowflakes that are currently on point timeout and unable to gain additional points.
     *
     * @type {Set<string>}
     * @private
     *
     */
    #scoreCoolDownSet: Set<string>;

    /**
     *
     * The time limit before a user is able to receive points again. This should be in milliseconds.
     *
     * @type {number}
     * @private
     *
     */
    #scoreCoolDownTimeLimit: number;

    /**
     *
     * The time that the bot client started.
     *
     * @type {Date}
     * @private
     * @readonly
     *
     */
    readonly #startTime: Date;

    /**
     *
     * Flag indicating if the bot is currently running in a test environment or not.
     *
     * @type {boolean}
     * @private
     * @readonly
     *
     */
    readonly #testEnvironment: boolean;

    /**
     *
     * An array of all the fields for the client that are invalid.
     *
     * @type {Array<string>}
     * @private
     *
     */
    #invalid: Array<string>;

    /**
     *
     * An array of all the fields for the client that are either null or void.
     *
     * @type {Array<string>}
     * @private
     *
     */
    #nullOrUndefined: Array<string>;

    /**
     *
     * A set of user snowflakes that are currently in the voice state.
     *
     * @type {Set<string>}
     * @private
     *
     */
    #voiceStateSet: Set<string>

    /** Protected static variables */

    /** Public static variables */

    /** Public variables */

    // todo: zakauff 4/12/2022 implement these

    /**
     *
     * A collection of the bot's commands.
     *
     * @type {Collection<string, CommandCore>}
     *
     */
    commands: Collection<string, CommandCore>;

    /**
     *
     * The bot's database connection.
     *
     * @type {any}
     *
     */
    db: any;

    /** Constructor */

    constructor(options: EnhancedClientData) {
        // Get the start time before calculating anything
        const startTime = new Date();

        // Get the client options
        let clientOptions = options?.clientOptions;

        // check if clientOptions is present, if not, assign it
        if (!clientOptions) {
            clientOptions = DEFAULT_CLIENT_OPTIONS;
        }

        // If the allowed mentions are set, default them
        if (!clientOptions?.allowedMentions) {
            clientOptions.allowedMentions = DEFAULT_CLIENT_OPTIONS.allowedMentions;
        }

        // If the intents aren't set, default them
        if (!clientOptions.intents) {
            clientOptions.intents = DEFAULT_CLIENT_OPTIONS.intents;
        }

        // If the partials aren't set, default them
        if (!clientOptions.partials) {
            clientOptions.partials = DEFAULT_CLIENT_OPTIONS.partials;
        }

        // Set the client options
        super(clientOptions);

        // Set the EnhancedClient options
        this.#logChannels = options?.logChannels;
        this.#ownerId = options?.ownerId;
        this.#defaultCommandPrefix = options?.defaultCommandPrefix || DEFAULT_COMMAND_PREFIX;
        this.#scoreCoolDownTimeLimit = options?.scoreCoolDownTimeLimit || DEFAULT_SCORE_COOL_DOWN_TIME_LIMIT;

        // Set the defaults
        this.#acceptingCommands = true;
        this.#kickingOrBanningMember = false;
        this.#scoreCoolDownSet = new Set<string>();
        this.#startTime = startTime;
        this.#testEnvironment = ProcessUtil.getEnvironment() === EnvironmentType.TEST;
        this.#voiceStateSet = new Set<string>();

        this.commands = new Collection<string, CommandCore>();
        this.db = null;

    }

    /** Private static functions */

    /** Private functions */

    /** Protected static functions */

    /** Protected functions */

    /** Public static functions */

    /** Public functions */

    /** Transformative functions */

    /** Getters and setters */

}
