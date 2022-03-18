import { CustomType, TypeUtil } from "@allusivebox/bootstrap";

export default class PermissionLevelType extends CustomType {

    /** Private static variables */

    protected static override TYPE = "PermissionLevelType";

    /** Private variables */

    /** Protected static variables */

    /** Public static variables */

    /**
     *
     * Permission level associated with an admin user.
     *
     * @type {PermissionLevelType}
     * @static
     *
     */
    public static ADMIN = new PermissionLevelType("ADMIN", "Admin");

    /**
     *
     * Permission level associated with a bot user.
     *
     * @type {PermissionLevelType}
     * @static
     *
     */
    public static BOT = new PermissionLevelType("BOT", "Bot");

    /**
     *
     * Permission level associated with a mod user.
     *
     * @type {PermissionLevelType}
     * @static
     *
     */
    public static MOD = new PermissionLevelType("MOD", "Mod");

    /**
     *
     * Default permission level. Indicates that the user has no special permissions.
     *
     * @type {PermissionLevelType}
     * @static
     *
     */
    public static NONE = new PermissionLevelType("NONE", "N/A");

    /**
     *
     * Permission level associated with the owner of the bot. Has all permissions.
     *
     * @type {PermissionLevelType}
     * @static
     *
     */
    public static OWNER = new PermissionLevelType("OWNER", "Owner");

    /**
     *
     * An array containing a list of all the permission level types currently supported.
     *
     * @type {Array<PermissionLevelType>}
     * @static
     *
     */
    public static SUPPORTED_TYPES = [
        PermissionLevelType.ADMIN,
        PermissionLevelType.BOT,
        PermissionLevelType.MOD,
        PermissionLevelType.NONE,
        PermissionLevelType.OWNER
    ];

     /**
     *
     * Array containing the permission levels that qualify as superuser.
     *
     * @type {Array<PermissionLevelType>}
     * @static
     *
     */
    public static SUPER_USER_LIST = [
        PermissionLevelType.OWNER,
        PermissionLevelType.ADMIN
    ];

    /**
     *
     * Array containing the permission levels that quality as a privileged user.
     *
     * @type {Array<PermissionLevelType>}
     * @static
     *
     */
    public static PRIVILEGED_USER_LIST = [
        ...PermissionLevelType.SUPER_USER_LIST,
        PermissionLevelType.MOD
    ];

    /** Public variables */

    /** Constructor */

    /**
     *
     * Creates an instance of the permission level type.
     *
     * @param {string} code The code value for the type.
     * @param {string} text The readable value of the type.
     * @constructor
     *
     */
    constructor(code: string, text: string) {
        super(code, text, PermissionLevelType.TYPE);
    }

    /** Private static functions */

    /** Private functions */

    /** Protected static functions */

    /** Protected functions */

    /** Public static functions */

    /**
     *
     * Calculates the permission level based off the supplied code string.
     *
     * @param {string} code The permission level's code.
     * @returns {PermissionLevelType} The permission level associated with the supplied code.
     * @throws {Error} An error is thrown when a non-supported code that does not map to a supported permission
     * level type is provided.
     *
     */
    public static getPermissionLevelType(code: string): PermissionLevelType {
        let permissionLevelType: PermissionLevelType;

        // type guard
        if (TypeUtil.isNotString(code)) {
            throw Error(`Unsupported type ${typeof code} provided`);
        }

        switch(code?.toLowerCase()) {
            case PermissionLevelType.ADMIN.getCode().toLowerCase():
                permissionLevelType = PermissionLevelType.ADMIN;
                break;
            case PermissionLevelType.BOT.getCode().toLowerCase():
                permissionLevelType = PermissionLevelType.BOT;
                break;
            case PermissionLevelType.MOD.getCode().toLowerCase():
                permissionLevelType = PermissionLevelType.MOD;
                break;
            case PermissionLevelType.NONE.getCode().toLowerCase():
                permissionLevelType = PermissionLevelType.NONE;
                break;
            case PermissionLevelType.OWNER.getCode().toLowerCase():
                permissionLevelType = PermissionLevelType.OWNER;
                break;
            default:
                throw new Error(`Unsupported code ${code} provided`);
        }

        return permissionLevelType;
    }

    /**
     *
     * Checks if the supplied permission level is valid or not.
     * @param {PermissionLevelType} permissionLevel The permission level type to validate.
     * @returns {boolean} True if the supplied permission level type is valid, otherwise false.
     *
     */
    public static validateType(permissionLevel: PermissionLevelType): boolean {
        return this.SUPPORTED_TYPES.includes(permissionLevel);
    }

    /** Public functions */

    /**
     *
     * Indicates if the user has any special permissions.
     *
     * @returns {boolean} True if the user has any permissions, otherwise false.
     *
     */
    hasPermissions(): boolean { return this !== PermissionLevelType.NONE; }

    /**
     *
     * Indicates if the user has admin permissions.
     *
     * @returns {boolean} True if the user has admin permissions, otherwise false.
     *
     */
    isAdmin(): boolean { return this === PermissionLevelType.ADMIN; }

    /**
     *
     * Indicates if the user has bot permissions.
     *
     * @returns {boolean} True if the user has bot permissions, otherwise false.
     *
     */
    isBot(): boolean { return this === PermissionLevelType.BOT; }

    /**
     *
     * Indicates if the user has mod permissions.
     *
     * @returns {boolean} True if the user has mod permissions, otherwise false.
     *
     */
    isMod(): boolean { return this === PermissionLevelType.MOD; }

    /**
     *
     * Indicates if the user is the bots' owner.
     *
     * @returns {boolean} True if the user has owner permissions, otherwise, false.
     *
     */
    isOwner(): boolean { return this === PermissionLevelType.OWNER; }

    /**
     *
     * Indicates if the user is a privileged user.
     *
     * @returns {boolean} True if the user has mod, admin, or owner permissions, otherwise false.
     *
     */
    isPrivilegedUser(): boolean { return PermissionLevelType.PRIVILEGED_USER_LIST.includes(this); }

    /**
     *
     * Indicates if the user is a superuser.
     *
     * @returns {boolean} True if the user has admin or owner permissions, otherwise false.
     *
     */
    isSuperUser(): boolean { return PermissionLevelType.SUPER_USER_LIST.includes(this); }

    /** Transformative functions */

    /** Getters and setters */

}