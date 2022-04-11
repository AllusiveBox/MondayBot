import CommandResponseType from "../../../../../../types/discord/command.response.type";
import PermissionLevelType from "../../../../../../types/common/permission.level.type";
import CommandParameterType from "../../../../../../types/discord/command.parameter.type";

/**
 *
 * Interface to use alongside the {@link CommandHelp} class's constructor. In addition to the required fields
 * covered by the RequiredCommandHelpData interface, this interface also includes the optional fields as well.
 *
 * @interface CommandHelpData
 * @extends RequiredCommandHelpData
 *
 */
export interface CommandHelpData extends RequiredCommandHelpData {

    /**
     *
     * An array containing any aliases that the command might have. All values in this array should be in lowercase
     * and without any whitespace. Optional.
     *
     * @type {?Array<string>}
     *
     */
    aliases?: Array<string>;

    /**
     *
     * A string containing a formatting example for the command.
     *
     * @type {?string}
     *
     */
    commandFormat?: string;

    /**
     *
     * An array containing all the command's parameters and their descriptions.
     *
     * @type {?Array<CommandParameterType>}
     *
     */
    commandParameters?: Array<CommandParameterType>;

    /**
     *
     * A string that contains more detailed information about the command.
     *
     * @type {?string}
     *
     */
    detailedDescription?: string;

    /**
     *
     * A string containing examples of how the command is supposed to be used.
     *
     * @type {?string}
     *
     */
    examples?: string;

    /**
     *
     * The full name of the command. This has no formatting restrictions, unlike the other name fields.
     *
     * @type {?string}
     *
     */
    fullName?: string;

}

/**
 *
 * An interface for a data object that is used to describe the required fields for the {@link CommandHelp}'s
 * constructor. All the fields in this object are required.
 *
 * @interface RequiredCommandHelpData
 *
 */
export interface RequiredCommandHelpData {

    /**
     *
     * The response type for the command. Required.
     *
     * @type {CommandResponseType}
     *
     */
    commandResponseType: CommandResponseType;

    /**
     *
     * The description for the command. Required.
     *
     * @type {string}
     *
     */
    description: string;

    /**
     *
     * Flag indicating if the command is currently enabled or not. Required.
     *
     * @type {boolean}
     *
     */
    enabled: boolean;

    /**
     *
     * The name for the command. This should be in lowercase and without spaces, and will be converted into the
     * correct format if not. Required.
     *
     * @type {string}
     *
     */
    name: string;

    /**
     *
     * The permission level for the command. Determines what user type can use the command. Required.
     *
     * @type {PermissionLevelType}
     *
     */
    permissionLevel: PermissionLevelType;

}