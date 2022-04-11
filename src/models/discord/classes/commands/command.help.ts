import PermissionLevelType from "../../../../types/common/permission.level.type";
import CommandResponseType from "../../../../types/discord/command.response.type";
import CommandParameterType from "../../../../types/discord/command.parameter.type";
import { CommandHelpData, RequiredCommandHelpData } from "../../interfaces/typing/constructors/commands/command.help.data";
import { StringUtil, TypeUtil } from "@allusivebox/bootstrap";
import { CommandHelpIsValid } from "../../interfaces/typing/return/commands/command.help.is.valid";

/**
 *
 * A class containing the command data that is used to build its help object.
 *
 * @class CommandHelp
 *
 */
export default class CommandHelp {

    /** Private static variables */

    /** Private variables */

    /* Required variables */

    /**
     *
     * The command response type associated with the command. Indicates how the command will response when used.
     *
     * @type {CommandResponseType}
     * @readonly
     * @private
     *
     */
    readonly #commandResponseType: CommandResponseType;

    /**
     *
     * A short description of the command.
     *
     * @type {string}
     * @readonly
     * @private
     *
     */
    readonly #description: string;

    /**
     *
     * Flag indicating if the command is enabled currently or not.
     *
     * @type {boolean}
     * @private
     *
     */
    #enabled: boolean;

    /**
     *
     * The command's name. This value will be converted to lowercase and have all it's spaces removed.
     *
     * @type {string}
     * @readonly
     * @private
     *
     */
    readonly #name: string;

    /**
     *
     * The permission level associated with the command. Determines what user permissions are needed to use the
     * command.
     *
     * @type {PermissionLevelType}
     * @readonly
     * @private
     * @see PermissionLevelType
     *
     */
    readonly #permissionLevel: PermissionLevelType;

    /* Optional variables */

    /**
     *
     * An array containing alternative names for the command. This will always have at least one element in it,
     * command's name. Values will be converted to lowercase with its spacing removed before being stored.
     *
     * @type {?Array<string>}
     * @readonly
     * @private
     *
     */
    readonly #aliases?: Array<string>;

    /**
     *
     * The formatting of the command. Used alongside the example to show how the command works.
     *
     * @type {?string}
     * @readonly
     * @private
     *
     */
    readonly #commandFormat: string;

    /**
     *
     * An array containing the command parameters and their descriptions.
     *
     * @type {Array<CommandParameterType>}
     * @readonly
     * @private
     *
     */
    readonly #commandParameters?: Array<CommandParameterType>;

    /**
     *
     * A more detailed description of the command. Used when help for the command is called for.
     *
     * @type {?string}
     * @readonly
     * @private
     *
     */
    readonly #detailedDescription?: string;

    /**
     *
     * A string containing an example of how the command is supposed to be used. Used when help for the command is
     * called for.
     *
     * @type {?string}
     * @readonly
     * @private
     *
     */
    readonly #examples: string;

    /**
     *
     * The full name of the command, or a readable name that has spaces and capitalization.
     * @private
     */
    readonly #fullName: string;

    /* Validation variables */

    /**
     *
     * An array that contains field names for the CommandHelp class that are invalid.
     *
     * @type {Array<keyof CommandHelp>}
     * @private
     *
     */
    #invalidFields: Array<string>;

    /**
     *
     * An array that contains field names for the CommandHelp class that are either null or undefined.
     *
     * @type {Array<keyof CommandHelp>}
     * @private
     *
     */
    #nullOrUndefinedFields: Array<string>;

    /** Protected static variables */

    /** Public static variables */

    /** Public variables */

    /** Constructor */

    /**
     *
     * Creates an instance of the CommandHelp class.
     *
     * @param {RequiredCommandHelpData} data                     An object containing data used to create the class
     * instance. All these fields are required.
     * @param {CommandResponseType}     data.commandResponseType The response type that this command generates when
     * it is used.
     * @param {string}                  data.description         A brief description for the command.
     * @param {boolean}                 data.enabled             A flag indicating if the command is currently
     * enabled or not.
     * @param {string}                  data.name                The command's basic name. This should be in all
     * lowercase and without whitespace.
     * @param {PermissionLevelType}     data.permissionLevel     The permission level for the command.
     * @constructor
     *
     */
    constructor(data: RequiredCommandHelpData);

    /**
     *
     * Creates an instance of the CommandHelp class.
     *
     * @param {CommandHelpData}              data                       An object containing data used to create the
     * class instance. All fields are required, unless otherwise specified.
     * @param {CommandResponseType}          data.commandResponseType   The response type that this command
     * generates when it is used.
     * @param {string}                       data.description           A brief description for the command.
     * @param {boolean}                      data.enabled               A flag indicating if the command is
     * currently enabled or not.
     * @param {string}                       data.name                  The command's basic name. This should be in
     * all lowercase and without whitespace.
     * @param {PermissionLevelType}          data.permissionLevel       The permission level for the command.
     * @param {?Array<string>}               [data.aliases]             An array containing additional names for the
     * command. Optional. Defaults to an array with just the `data.name` field as it's only entry.
     * @param {?string}                      [data.commandFormat]       An example string showing how to use the
     * command. Optional. Defaults to `null`.
     * @param {?Array<CommandParameterType>} [data.commandParameters]   An array containing the command's parameters
     * and their descriptions. Optional. Defaults to an empty array.
     * @param {?string}                      [data.detailedDescription] A detailed description for the command.
     * Optional. Defaults to the supplied `data.description` value if not provided.
     * @param {?string}                      [data.examples]            A string containing usage examples for the
     * command. Optional. Defaults to `N/A` if no value is provided.
     * @param {?string}                      [data.fullName]            The full name for the command. This can be
     * in any format and is not restricted like the `data.name` and `data.aliases` values are. Optional. Defaults to
     * the supplied `data.name` value if not provided.
     * @constructor
     *
     */
    constructor(data: CommandHelpData);

    /**
     *
     * Creates an instance of the CommandHelp class.
     *
     * @param {CommandHelpData} data An object containing data used to create the class instance.
     * @constructor
     *
     */
    constructor(data: CommandHelpData) {
        // Validate to ensure that the data object exists
        if (!data) {
            throw new Error("Unable to create command with a null data object");
        }

        // Set the required parameters
        this.#commandResponseType = data.commandResponseType;
        this.#description = data.description
        this.#enabled = data.enabled;

        // Make sure that the name is in all lowercase and has no whitespaces in it
        this.#name = StringUtil.convertToLowerCaseNoSpaces(data.name);
        this.#permissionLevel = data.permissionLevel;

        // Set the optional parameters and default what isn't set
        this.#aliases = data.aliases?.length ? data.aliases : new Array<string>(this.#name);
        this.#commandFormat = StringUtil.isSet(data.commandFormat) ? data.commandFormat : null;
        this.#commandParameters =
            data.commandParameters?.length ? data.commandParameters : new Array<CommandParameterType>();
        this.#detailedDescription =
            StringUtil.isSet(data.detailedDescription) ? data.detailedDescription : this.#description
        this.#examples = StringUtil.isSet(data.examples) ? data.examples : "N/A";
        this.#fullName = StringUtil.isSet(data.fullName) ? data.fullName : data.name;

        // Validate to make sure that the aliases array contains the name, otherwise add it
        if (!this.#aliases.includes(this.#name)) this.#aliases.push(this.#name);

        // Validate
        const validationCheck = this.isValid();

        if (!validationCheck.valid) {
            throw new Error(validationCheck.message);
        }
    }

    /** Private static functions */

    /** Private functions */

    /**
     *
     * Validates to ensure that the command response type is valid. Otherwise, assigns it to one of the two arrays
     * that manage the malformed fields, so it can be properly reported on.
     *
     * @private
     * @returns {void}
     *
     */
    private _validateCommandResponseTypeField(): void {
        const fieldName = "commandResponseType";

        // If the field is null or undefined...
        if (TypeUtil.isNullOrUndefined(this.#commandResponseType)) {
            this.#nullOrUndefinedFields.push(fieldName);
        }

        // Else if the field is not a valid CommandResponseType...
        else if (!CommandResponseType.validateType(this.#commandResponseType)) {
            this.#invalidFields.push(fieldName);
        }
    }

    /**
     *
     * Validates to ensure that the description is valid and is a string. Otherwise, it assigns it to one of the two
     * arrays that manages the malformed fields, so that it can be properly reported on.
     *
     * @private
     * @returns {void}
     *
     */
    private _validateDescriptionField(): void {
        const fieldName = "description";

        // If the field is null or undefined...
        if (TypeUtil.isNullOrUndefined(this.#description)) {
            this.#nullOrUndefinedFields.push(fieldName);
        }

        // Else if the field is not a string...
        else if (TypeUtil.isNotString(this.#description)) {
            this.#invalidFields.push(fieldName);
        }
    }

    /**
     *
     * Validates to ensure that the enabled flag is valid and is a boolean value. Otherwise, it assigns it to one of
     * the two arrays that manages the malformed fields, so that it can be properly reported on.
     *
     * @private
     * @returns {void}
     *
     */
    private _validateEnabledField(): void {
        const fieldName = "enabled";

        // If the field is null or undefined...
        if (TypeUtil.isNullOrUndefined(this.#enabled)) {
            this.#nullOrUndefinedFields.push(fieldName);
        }

        // Else if the field is not a boolean...
        else if (TypeUtil.isNotBoolean(this.#enabled)) {
            this.#invalidFields.push(fieldName);
        }
    }

    /**
     *
     * Validates to ensure that the name is valid and is a string. Otherwise, it assigns it to one of the two arrays
     * that manages the malformed fields, so that it can be properly reported on.
     *
     * @private
     * @returns {void}
     *
     */
    private _validateNameField(): void {
        const fieldName = "name";

        // If the field is null or undefined...
        if (TypeUtil.isNullOrUndefined(this.#name)) {
            this.#nullOrUndefinedFields.push(fieldName);
        }

        /*
            Else if the field is not a string
            OR the field is an empty string...
         */
        else if ((TypeUtil.isNotString(this.#name))
            || (StringUtil.isEmpty(this.#name))) {
            this.#invalidFields.push(fieldName);
        }
    }

    /**
     *
     * Validates to ensure that the permission level is valid. Otherwise, it assigns it to one of the two arrays
     * that manages the malformed fields, so that it can be properly reported on.
     *
     * @private
     * @returns {void}
     *
     */
    private _validatePermissionLevelField(): void {
        const fieldName = "permissionLevel";

        // If the field is null or undefined...
        if (TypeUtil.isNullOrUndefined(this.#permissionLevel)) {
            this.#nullOrUndefinedFields.push(fieldName);
        }

        // Else if the field is not a valid CommandResponseType...
        else if (!PermissionLevelType.validateType(this.#permissionLevel)) {
            this.#invalidFields.push(fieldName);
        }
    }

    /** Protected static functions */

    /** Protected functions */

    /** Public static functions */

    /** Public functions */

    /**
     *
     * Validates to see if the CommandHelp instance is valid or not.
     *
     * @returns {CommandHelpIsValid} An object containing a flag indicating if the command help object is valid, and
     * a message containing any errors if not.
     *
     */
    isValid(): CommandHelpIsValid {
        // Create default message
        let message = "";

        // Initialize new arrays to hold the malformed fields
        this.#invalidFields = new Array<string>();
        this.#nullOrUndefinedFields = new Array<string>();

        // Validate fields
        this._validateCommandResponseTypeField();
        this._validateDescriptionField();
        this._validateEnabledField();
        this._validateNameField();
        this._validatePermissionLevelField();

        // Report on all the fields that are either null or undefined
        this.#nullOrUndefinedFields.forEach((field) => {
            message += `${field} is either null or undefined and cannot be;`;
        });

        // Report on all the fields that are invalid
        this.#invalidFields.forEach((field) => {
            message += `${field} is invalid;`;
        });

        return { valid: message === "", message: message };
    }

    /** Transformative functions */

    /** Getters and setters */

    /**
     *
     * Gets the command response type for the command.
     *
     * @returns {CommandResponseType} The command response type associated with the command.
     *
     */
    get commandResponseType(): CommandResponseType { return this.#commandResponseType; }

    /**
     *
     * Gets the description for the command.
     *
     * @returns {string} The short description of the command.
     *
     */
    get description(): string { return this.#description; }

    /**
     *
     * Indicates if the command is enabled currently.
     *
     * @returns {boolean} True if the command is enabled, otherwise false.
     *
     */
    get isEnabled(): boolean { return this.#enabled; }

    /**
     *
     * Enables the command, if it is not already enabled.
     *
     * @returns {void}
     *
     */
    enable(): void { this.#enabled = true; }

    /**
     *
     * Disables the command, if it is not already disabled.
     *
     * @returns {void}
     *
     */
    disable(): void { this.#enabled = false; }

    /**
     *
     * Gets the short name for the command.
     *
     * @returns {string} The command's short name, in all lowercase.
     *
     */
    get name(): string { return this.#name; }

    /**
     *
     * Gets the permission level for the command.
     *
     * @returns {PermissionLevelType} The permission level needed to run the command.
     *
     */
    get permissionLevel(): PermissionLevelType { return this.#permissionLevel; }

    /**
     *
     * Gets all the aliases the command goes by.
     *
     * @returns {Array<string>} An array of all the command's alias names.
     *
     */
    get aliases(): Array<string> { return this.#aliases; }

    /**
     * Gets the command formatting.
     *
     * @returns {string} The format the command uses.
     *
     */
    get commandFormat(): string { return this.#commandFormat; }

    /**
     *
     * Gets all the command parameters.
     *
     * @returns {Array<CommandParameterType>} An array containing all the command parameters.
     *
     */
    get commandParameters(): Array<CommandParameterType> { return this.#commandParameters; }

    /**
     *
     * Gets the detailed description for the command.
     *
     * @returns {string} A detailed description of the command, most often displayed when the command is passed as
     * an argument to the help command.
     *
     */
    get detailedDescription(): string { return this.#detailedDescription; }

    /**
     *
     * Gets examples for how to use the command.
     *
     * @returns {string} A string containing example(s) on how to use the command. Used alongside the help command
     * to show how to use the command.
     *
     */
    get examples(): string { return this.#examples; }

    /**
     *
     * Gets the full name for the command. This does not follow the same limitations as the {@link CommandHelp.name}
     * field does.
     *
     * @returns {string} A string with the command's full name.
     *
     */
    get fullName(): string { return this.#fullName; }

}
