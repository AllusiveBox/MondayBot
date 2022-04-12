/**
 *
 * A class containing the core logic for bot commands.
 *
 * @class CommandCore
 *
 */
import CommandHelp from "./command.help";
import {
    CommandHelpData,
    RequiredCommandHelpData
} from "../../interfaces/typing/constructors/commands/command.help.data";
import { Message } from "discord.js";

export default abstract class CommandCore {

    /** Private static variables */

    /**
     *
     * Template string for the message sent when a command is currently disabled.
     *
     * @type {string}
     * @private
     * @static
     * @readonly
     *
     */
    static readonly #DISABLED_COMMAND_MESSAGE_TEMPLATE = "I'm sorry, %MEMBER%, this command is currently disabled";

    /**
     *
     * Template string for the message sent when a command cannot be used in a DM channel.
     *
     * @type {string}
     * @private
     * @static
     * @readonly
     *
     */
    static readonly #CANNOT_BE_USED_IN_DM_TEMPLATE = "I'm sorry, %MEMBER, this command cannot be used in a DM channel";

    /** Private variables */

    /**
     *
     * The command help associated with this command.
     *
     * @type {CommandHelp}
     * @private
     * @readonly
     *
     */
    readonly #help: CommandHelp;

    /** Protected static variables */

    /** Public static variables */

    /** Public variables */

    /** Constructor */

    /**
     *
     * Creates an instance of the CommandCore class
     *
     * @param {RequiredCommandHelpData} data The data used to create the command help associated with the command.
     * @protected
     * @constructor
     * @see CommandHelp
     *
     */
    protected constructor(data: RequiredCommandHelpData);

    /**
     *
     * Creates an instance of the CommandCore class.
     *
     * @param {CommandHelpData} data The data used to create the command help associated with the command.
     * @protected
     * @constructor
     * @see CommandHelp
     *
     */
    protected constructor(data: CommandHelpData);

    /**
     *
     * Creates an instance of the CommandCore class.
     *
     * @param {CommandHelpData} data The data used to create the command help associated with the command.
     * @protected
     * @constructor
     *
     */
    protected constructor(data: CommandHelpData) {
        this.#help = new CommandHelp(data);
    }

    /** Private static functions */

    /** Private functions */

    /**
     *
     * Helper method that reacts to the message indicating if the command was successful or not.
     *
     * @param {Message} message The discord message that needs to be reacted too.
     * @param {boolean} success Flag indicating if the command was successful or not.
     * @private
     * @static
     * @returns {Promise<void>}
     *
     */
    static async #reactToCommand(message: Message, success: boolean): Promise<void> {
        const emoji = success ? "✅" : "❎";

        /*
            The only time this should fail is if the bot doesn't have the ability to react to the message, or if the
             message is deleted before the bot can successfully react to it.
         */
        try {
            await message.react(emoji);
        } catch(error) {
            const channel = message.channel;
            await channel.send(`__Error:__ ${error.toString()}.`);
        }

    }

    /** Protected static functions */

    /** Protected functions */

    /** Public static functions */

    /** Public functions */

    /**
     *
     * Executes the commands primary functionality.
     *
     * @abstract
     * @returns {Promise<void>}
     * 
     */
    abstract execute(): Promise<void>;

    /** Transformative functions */

    /** Getters and setters */

}
