import { CustomType } from "@allusivebox/bootstrap";
import DiscordUtil from "../../utils/DiscordUtil";

/**
 *
 * Variable to hold the parameter name for all the command name parameter types.
 *
 * @type {string}
 *
 */
const COMMAND_NAME = "commandName";

/**
 *
 * Variable to hold the parameter name for all the number parameter types.
 *
 * @type {string}
 *
 */
const NUMBER = "n";

/**
 *
 * Variable to hold the parameter name for all the point parameter types.
 *
 * @type {string}
 *
 */
const POINTS = "points";

/**
 *
 * Variable to hold the parameter name for all the string parameter types.
 *
 * @type {string}
 *
 */
const STRING = "str";

/**
 *
 * Variable to hold the parameter name for all the user id parameter types.
 *
 * @type {string}
 *
 */
const USER_ID = "userId";

/**
 *
 * Variable to hold the parameter name for all the user mentionable parameter types.
 *
 * @type {string}
 *
 */
const USER_MENTIONABLE = "userMentionable";

/**
 *
 * A class containing data that indicates command parameters for a Discord command.
 *
 * @class CommandParameterType
 * @extends CustomType
 *
 */
export default class CommandParameterType extends CustomType {

    /** Private static variables */

    /** Private variables */

    /**
     *
     * A description of the command parameter.
     *
     * @type {string}
     * @private
     *
     */
    readonly #description: string;

    /**
     *
     * The name of the command parameter.
     *
     * @type {string}
     * @readonly
     * @private
     *
     */
    readonly #name: string;

    /** Protected static variables */

    /**
     *
     * The typing for the CommandParameterType.
     *
     * @type {string}
     * @protected
     * @static
     * @override
     *
     */
    protected static override TYPE = "CommandParameterType";

    /** Public static variables */

    public static COMMAND_NAME_OPTIONAL = new CommandParameterType(
        "COMMAND_NAME_OPTIONAL",
        "Command name (optional)",
        COMMAND_NAME,
        `The name of a command. ${DiscordUtil.bold("Optional")}.`
    );

    public static COMMAND_NAME_REQUIRED = new CommandParameterType(
        "COMMAND_NAME_REQUIRED",
        "Command name (required)",
        COMMAND_NAME,
        `The name of a command. ${DiscordUtil.bold("Required")}.`
    );

    public static COMMAND_NAME_THROW_ERROR = new CommandParameterType(
        "COMMAND_NAME_THROW_ERROR",
        "Command name (throw error)",
        COMMAND_NAME,
        "The name of a command. Throws an error if an invalid name is provided."
    );

    public static NUMBER_OPTIONAL = new CommandParameterType(
        "NUMBER_OPTIONAL",
        "Number (optional)",
        NUMBER,
        `A numerical value. ${DiscordUtil.bold("Optional")}.`
    );

    public static NUMBER_REQUIRED = new CommandParameterType(
        "NUMBER_REQUIRED",
        "Number (required)",
        NUMBER,
        `A numerical value. ${DiscordUtil.bold("Required")}.`
    );

    public static POINTS_REQUIRED = new CommandParameterType(
        "POINTS_REQUIRED",
        "Points (required)",
        POINTS,
        `A number of points. ${DiscordUtil.bold("Required")}.`
    );

    public static STRING_OPTIONAL = new CommandParameterType(
        "STRING_OPTIONAL",
        "String (optional)",
        STRING,
        `A string value. ${DiscordUtil.bold("Optional")}.`
    );

    public static STRING_REQUIRED = new CommandParameterType(
        "STRING_REQUIRED",
        "String (required)",
        STRING,
        `A string value. ${DiscordUtil.bold("Required")}.`
    );

    public static USER_ID_OPTIONAL = new CommandParameterType(
        "USER_ID_OPTIONAL",
        "User ID (optional)",
        USER_ID,
        `The ID of a Discord user. ${DiscordUtil.bold("Optional")}.`
    );

    public static USER_ID_REQUIRED = new CommandParameterType(
        "USER_ID_REQUIRED",
        "User ID (required)",
        USER_ID,
        `The ID of a Discord user. ${DiscordUtil.bold("Required")}.`
    );

    public static USER_ID_THROW_ERROR = new CommandParameterType(
        "USER_ID_THROW_ERROR",
        "User ID (throw error)",
        USER_ID,
        `The ID of a Discord user. Throws an error if an invalid ID is provided.`
    );

    public static USER_MENTIONABLE_OPTIONAL = new CommandParameterType(
        "USER_MENTIONABLE_OPTIONAL",
        "User mentionable (optional)",
        USER_MENTIONABLE,
        `A user mentionable (@ user). ${DiscordUtil.bold("Optional")}.`
    );

    public static USER_MENTIONABLE_REQUIRED = new CommandParameterType(
        "USER_MENTIONABLE_REQUIRED",
        "User mentionable (required)",
        USER_MENTIONABLE,
        `A user mentionable (@ user). ${DiscordUtil.bold("Required")}.`
    );

    public static USER_MENTIONABLE_THROW_ERROR = new CommandParameterType(
        "USER_MENTIONABLE_THROW_ERROR",
        "User mentionable (throw error)",
        USER_MENTIONABLE,
        `A user mentionable (@ user). Throws an error if an invalid user mentionable is provided.`
    );

    /**
     *
     * An array containing a list of all the command parameter types currently supported.
     *
     * @type {Array<CommandParameterType>}
     * @static
     *
     */
    public static SUPPORTED_TYPES = [
        CommandParameterType.COMMAND_NAME_OPTIONAL,
        CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR,
        CommandParameterType.NUMBER_OPTIONAL,
        CommandParameterType.NUMBER_REQUIRED,
        CommandParameterType.POINTS_REQUIRED,
        CommandParameterType.STRING_OPTIONAL,
        CommandParameterType.STRING_REQUIRED,
        CommandParameterType.USER_ID_OPTIONAL,
        CommandParameterType.USER_ID_REQUIRED,
        CommandParameterType.USER_ID_THROW_ERROR,
        CommandParameterType.USER_MENTIONABLE_OPTIONAL,
        CommandParameterType.USER_MENTIONABLE_REQUIRED,
        CommandParameterType.USER_MENTIONABLE_THROW_ERROR
    ];

    /** Constructor */

    /**
     *
     * Creates an instance of the command parameter type.
     *
     * @param {string} code        The code value for the type.
     * @param {string} text        The readable value of the type.
     * @param {string} name        The display name for the command parameter.
     * @param {string} description A description of the command parameter.
     * @constructor
     *
     */
    constructor(code: string, text: string, name: string, description: string) {
        super(code, text, CommandParameterType.TYPE);
        this.#name = name;
        this.#description = description;
    }

    /** Private static functions */

    /** Private functions */

    /** Protected static functions */

    /** Protected functions */

    /** Public static functions */

    /**
     *
     * Checks if the supplied command parameter type is valid or not.
     *
     * @param {CommandParameterType} commandParameterType The command parameter type to validate.
     * @static
     * @returns {boolean} True if the supplied command response type is valid, otherwise false.
     *
     */
    static validateType(commandParameterType: CommandParameterType): boolean {
        return this.SUPPORTED_TYPES.includes(commandParameterType);
    }

    /** Public functions */

    /**
     *
     * Indicates if the command parameter type is for a command name.
     *
     * @returns {boolean} True if the command parameter is for command names, otherwise false.
     * @see CommandParameterType.COMMAND_NAME_OPTIONAL
     * @see CommandParameterType.COMMAND_NAME_REQUIRED
     * @see CommandParameterType.COMMAND_NAME_THROW_ERROR
     *
     */
    isCommandName(): boolean {
        return this === CommandParameterType.COMMAND_NAME_OPTIONAL
            || this === CommandParameterType.COMMAND_NAME_REQUIRED
            || this === CommandParameterType.COMMAND_NAME_THROW_ERROR;
    }

    /**
     *
     * Indicates if the command parameter type is for a generic number.
     * <br />
     * <b>Note:</b> This method only indicates if the command parameter is a generic number. To test if the command
     * parameter is for points, use the {@link CommandParameterType.isPoints} method instead.
     *
     * @returns {boolean} True if the command parameter is for generic numbers, otherwise false.
     * @see CommandParameterType.NUMBER_OPTIONAL
     * @see CommandParameterType.NUMBER_REQUIRED
     *
     */
    isNumber(): boolean {
        return this === CommandParameterType.NUMBER_OPTIONAL
            || this === CommandParameterType.NUMBER_REQUIRED;
    }

    /**
     *
     * Indicates if the command parameter type is for points.
     *
     * @returns {boolean} True if the command parameter is for points, otherwise false.
     * @see CommandParameterType.POINTS_REQUIRED
     *
     */
    isPoints(): boolean { return this === CommandParameterType.POINTS_REQUIRED; }

    /**
     *
     * Indicates if the command parameter type is for a generic string.
     * <br />
     * <b>Note:</b> This method only indicates if the command parameter is a generic string. It should not be used
     * to validate that a command parameter takes a string value.
     *
     * @returns {boolean} True if the command parameter is for generic strings, otherwise false.
     * @see CommandParameterType.STRING_OPTIONAL
     * @see CommandParameterType.STRING_REQUIRED
     *
     */
    isString(): boolean {
        return this === CommandParameterType.STRING_OPTIONAL
            || this === CommandParameterType.STRING_REQUIRED;
    }

    /**
     *
     * Indicates if the command parameter type is for user IDs.
     *
     * @returns {boolean} True if the command parameter is for user IDs, otherwise false.
     * @see CommandParameterType.USER_ID_OPTIONAL
     * @see CommandParameterType.USER_ID_REQUIRED
     * @see CommandParameterType.USER_ID_THROW_ERROR
     *
     */
    isUserId(): boolean {
        return this === CommandParameterType.USER_ID_OPTIONAL
            || this === CommandParameterType.USER_ID_REQUIRED
            || this === CommandParameterType.USER_ID_THROW_ERROR;
    }

    /**
     *
     * Indicates if the command parameter type is for user mentionables.
     *
     * @returns {boolean} True if the command parameter is for user mentionables, otherwise false.
     * @see CommandParameterType.USER_MENTIONABLE_OPTIONAL
     * @see CommandParameterType.USER_MENTIONABLE_REQUIRED
     * @see CommandParameterType.USER_MENTIONABLE_THROW_ERROR
     *
     */
    isUserMentionable(): boolean {
        return this === CommandParameterType.USER_MENTIONABLE_OPTIONAL
            || this === CommandParameterType.USER_MENTIONABLE_REQUIRED
            || this === CommandParameterType.USER_MENTIONABLE_THROW_ERROR;
    }

    /** Transformative functions */

    /** Getters and setters */

    /**
     *
     * Getter method for the command parameter type's description.
     *
     * @returns {string} The description associated with the command parameter.
     *
     */
    getDescription(): string { return this.#description; }

    /**
     *
     * Getter method for the command parameter type's name.
     *
     * @returns {string} The name associated with the command parameter.
     *
     */
    getName(): string { return this.#name; }
}