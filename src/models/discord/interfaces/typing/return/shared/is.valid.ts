/**
 *
 * Interface to use alongside any isValid method. Defines the return type from the method, which
 * is used to determine of a class instance is valid.
 *
 * @interface IsValid
 *
 */
export interface IsValid {

    /**
     *
     * A string containing error messages for a class instance. If this field is missing, that means that the
     * {@link IsValid.valid} field must be true.
     *
     * @type {?message}
     *
     */
    message?: string;

    /**
     *
     * Flag indicating if the class instance was valid or not. This can only be true if the
     * {@link IsValid.message} field is empty, otherwise this will be false.
     *
     * @type {boolean}
     *
     */
    valid: boolean;

}
