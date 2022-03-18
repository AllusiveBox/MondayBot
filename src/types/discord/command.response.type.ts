import { CustomType } from "@allusivebox/bootstrap";
import DiscordUtil from "../../utils/discord.util";

/**
 *
 * A class containing data that indicates how a command will response when used.
 *
 * @class CommandResponseType
 * @extends CustomType
 *
 */
export default class CommandResponseType extends CustomType {

    /** Private static variables */

    /** Private variables */

    /**
     *
     * A string containing the response message that is associated with the command response type.
     *
     * @type {string}
     * @readonly
     * @private
     *
     */
    readonly #responseMessage: string;

    /** Protected static variables */

    /**
     *
     * The typing for the CommandResponseType.
     *
     * @type {string}
     * @protected
     * @static
     * @override
     *
     */
    protected static override TYPE = "CommandResponseType";

    /** Public static variables */

    /**
     *
     * Command response type that indicates the command does not generate a response back of any kind.
     *
     * @type {CommandResponseType}
     * @static
     *
     */
    public static NO_RESPONSE_SENT = new CommandResponseType(
        "NO_RESPONSE_SENT",
        "No response sent",
        "This command does not generate a response back."
    );

    /**
     *
     * Command response type that indicates the command will not generate a response unless an error occurs during
     * processing.
     *
     * @type {CommandResponseType}
     * @static
     *
     */
    public static NO_RESPONSE_SENT_UNLESS_ERROR = new CommandResponseType(
        "NO_RESPONSE_SENT_UNLESS_ERROR",
        "No response sent unless error",
        "This command does not generate a response back, unless there is an error. If there is an error, " +
        `a response will be sent in the ${DiscordUtil.bold("channel")} the command was used in.`
    );

    /**
     *
     * Command response type that indicates the command will generate a response back as a direct message to the user
     * that used the command.
     *
     * @type {CommandResponseType}
     * @static
     *
     */
    public static RESPONSE_AS_DIRECT_MESSAGE = new CommandResponseType(
        "RESPONSE_AS_DIRECT_MESSAGE",
        "Response as direct message",
        `This command generates a response back to the ${DiscordUtil.bold("user")} that used it in ` +
        "a direct message."
    );

    /**
     *
     * Command response type that indicates the command will generate an ephemeral message in the channel that the
     * command was used it.
     * <br />
     * <b>Note:</b> This is currently only possible for slash commands.
     *
     * @type {CommandResponseType}
     * @static
     *
     */
    public static RESPONSE_AS_EPHEMERAL = new CommandResponseType(
        "RESPONSE_AS_EPHEMERAL",
        "Response as ephemeral",
        `This command generates a response back in the ${DiscordUtil.bold("channel")} it was used in ` +
        `as an ${DiscordUtil.bold("ephemeral message")}.`
    );

    /**
     *
     * Command response type that indicates the command will generate a response in the channel that the command was
     * sent in.
     *
     * @type {CommandResponseType}
     * @static
     *
     */
    public static RESPONSE_IN_CHANNEL = new CommandResponseType(
        "RESPONSE_IN_CHANNEL",
        "Response in channel",
        `This command generates a response back in the ${DiscordUtil.bold("channel")} it was used in.`
    );

    /**
     *
     * An array containing a list of all the command response types currently supported.
     *
     * @type {Array<CommandResponseType>}
     * @static
     *
     */
    public static SUPPORTED_TYPES = [
        CommandResponseType.NO_RESPONSE_SENT,
        CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR,
        CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE,
        CommandResponseType.RESPONSE_AS_EPHEMERAL,
        CommandResponseType.RESPONSE_IN_CHANNEL
    ];

    /** Public variables */

    /** Constructor */

    /**
     *
     * Creates an instance of the command response type.
     *
     * @param {string} code            The code value for the type.
     * @param {string} text            The readable value of the type.
     * @param {string} responseMessage The response message displayed back to commands associated with this response
     * type.
     * @constructor
     *
     */
    constructor(code: string, text: string, responseMessage: string) {
        super(code, text, CommandResponseType.TYPE);
        this.#responseMessage = responseMessage;
    }

    /** Private static functions */

    /** Private functions */

    /** Protected static functions */

    /** Protected functions */

    /** Public static functions */

    /**
     *
     * Checks if the supplied command response type is valid or not.
     *
     * @param {CommandResponseType} commandResponseType The command response type to validate.
     * @static
     * @returns {boolean} True if the supplied command response type is valid, otherwise false.
     *
     */
    static validateType(commandResponseType: CommandResponseType): boolean {
        return this.SUPPORTED_TYPES.includes(commandResponseType);
    }

    /** Public functions */

    /**
     *
     * Indicates if a response of any kind is sent, regardless of what kind.
     *
     * @returns {boolean} True if the command response type always returns a response, otherwise false.
     *
     */
    isAnyResponseSent(): boolean {
        return this === CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE
            || this === CommandResponseType.RESPONSE_AS_EPHEMERAL
            || this === CommandResponseType.RESPONSE_IN_CHANNEL
    }

    /**
     *
     * Indicates if no response is sent.
     *
     * @returns {boolean} True if the command response type never generates a response, otherwise false.
     *
     */
    isNoResponseSent(): boolean { return this === CommandResponseType.NO_RESPONSE_SENT; }

    /**
     *
     * Indicates if the only time a response would be generated if an error occurred.
     *
     * @returns {boolean} True if the command would only generate a response if an error occurred, otherwise false.
     *
     */
    isNoResponseSentUnlessError(): boolean { return this === CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR; }

    /**
     *
     * Indicates if a response would be sent as a direct message.
     *
     * @returns {boolean} True if the command would generate a response as a direct message, otherwise false.
     *
     */
    isResponseSentAsDirectMessage(): boolean { return this === CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE; }

    /**
     *
     * Indicates if a response would be sent as an ephemeral message.
     *
     * @returns {boolean} True if the command would generate a response as an ephemeral message, otherwise false.
     *
     */
    isResponseSentAsEphemeralMessage(): boolean { return this === CommandResponseType.RESPONSE_AS_EPHEMERAL; }

    /**
     *
     * Indicates if a response would be sent in the channel the command was used.
     *
     * @returns {boolean} True if the command would generate a response in the channel the command was used in,
     * otherwise false.
     *
     */
    isResponseSentInChannel(): boolean { return this === CommandResponseType.RESPONSE_IN_CHANNEL; }

    /** Transformative functions */

    /** Getters and setters */

    /**
     *
     * Getter method for the command response type's response message.
     *
     * @returns {string} The response message associated with the command response type.
     *
     */
    getResponseMessage(): string { return this.#responseMessage }

}