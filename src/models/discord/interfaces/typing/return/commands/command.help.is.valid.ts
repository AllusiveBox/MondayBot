/**
 *
 * Interface to use alongside the {@link CommandHelp.isValid} method. Defines the return type from the method, which
 * is used to determine of a CommandHelp instance is valid.
 *
 * @interface CommandHelpIsValid
 *
 */
export interface CommandHelpIsValid {

    /**
     *
     * A string containing error messages for a CommandHelp instance. If this field is missing, that means that the
     * {@link CommandHelpIsValid.valid} field must be true.
     *
     * @type {?message}
     *
     */
    message?: string;

    /**
     *
     * Flag indicating if the CommandHelp instance was valid or not. This can only be true if the
     * {@link CommandHelpIsValid.message} field is empty, otherwise this will be false.
     *
     * @type {boolean}
     *
     */
    valid: boolean;

}