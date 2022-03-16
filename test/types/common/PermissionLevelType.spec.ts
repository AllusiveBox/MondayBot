import PermissionLevelType from "../../../src/types/common/PermissionLevelType";
import "jest-extended";

/**
 *
 * Variable for the magic number representing the number of variables that should be in the
 * {@link PermissionLevelType.SUPPORTED_TYPES} array.
 *
 * @type {number}
 *
 */
const SUPPORTED_PERMISSION_LEVEL_TYPE_COUNT = 5;

/**
 *
 * Variable for the magic number representing the number of variables in the
 * {@link PermissionLevelType.SUPER_USER_LIST} array.
 *
 * @type {number}
 *
 */
const SUPER_USER_COUNT = 2;

/**
 *
 * Variable for the magic number representing the number of variables in the
 * {@link PermissionLevelType.PRIVILEGED_USER_LIST} array.
 *
 * @type {number}
 *
 */
const PRIVILEGED_USER_COUNT = 3;

/**
 *
 * PermissionLevelType Unit Tests
 *
 * @group unit
 *
 */
describe("PermissionLevelType unit test Suite", () => {

    test("static toString returns PermissionLevelType for class", () => {
        expect(`${PermissionLevelType}`).toBe("PermissionLevelType");
    });

    test("that creating a new PermissionLevelType assigns the correct values", () => {
        // Setup
        const permissionLevel = new PermissionLevelType("TEST", "test");

        // Expect values are correctly assigned
        expect(permissionLevel.getCode()).toBe("TEST");
        expect(permissionLevel.getText()).toBe("test");
        expect(permissionLevel.getType()).toBe("PermissionLevelType");
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.BOT, PermissionLevelType.MOD,
        PermissionLevelType.OWNER])
    ("that given %s, hasPermissions should return true", (permissionLevel) => {
        expect(permissionLevel.hasPermissions()).toBeTrue();
    });

    test("that given PermissionLevelType:NONE, hasPermissions should return false", () => {
        expect(PermissionLevelType.NONE.hasPermissions()).toBeFalse();
    });

    test.each([PermissionLevelType.BOT, PermissionLevelType.MOD, PermissionLevelType.NONE,
        PermissionLevelType.OWNER])
    ("that given %s, isAdmin should return false", (permissionLevel) => {
        expect(permissionLevel.isAdmin()).toBeFalse();
    });

    test("that given PermissionLevelType:Admin, isAdmin should return true", () => {
        expect(PermissionLevelType.ADMIN.isAdmin()).toBeTrue();
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.MOD, PermissionLevelType.NONE,
        PermissionLevelType.OWNER])
    ("that given %s, isBot should return false", (permissionLevel) => {
        expect(permissionLevel.isBot()).toBeFalse();
    });

    test("that given PermissionLevelType:BOT, isBot should return true", () => {
        expect(PermissionLevelType.BOT.isBot()).toBeTrue();
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.BOT, PermissionLevelType.NONE,
        PermissionLevelType.OWNER])
    ("that given %s, isMod should return false", (permissionLevel) => {
        expect(permissionLevel.isMod()).toBeFalse();
    });

    test("that given PermissionLevelType:MOD, isMod should return true", () => {
        expect(PermissionLevelType.MOD.isMod()).toBeTrue();
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.BOT, PermissionLevelType.MOD,
        PermissionLevelType.NONE])
    ("that given %s, isOwner should return false", (permissionLevel) => {
        expect(permissionLevel.isOwner()).toBeFalse();
    });

    test("that given PermissionLevelType:OWNER, isOwner should return true", () => {
        expect(PermissionLevelType.OWNER.isOwner()).toBeTrue();
    });

    test.each([PermissionLevelType.BOT, PermissionLevelType.NONE])
    ("that given %s, isPrivilegedUser should return false", (permissionLevel) => {
        expect(permissionLevel.isPrivilegedUser()).toBeFalse();
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.MOD, PermissionLevelType.OWNER])
    ("that given %s, isPrivilegedUser should return true", (permissionLevel) => {
        expect(permissionLevel.isPrivilegedUser()).toBeTrue();
    });

    test.each([PermissionLevelType.BOT, PermissionLevelType.MOD, PermissionLevelType.NONE])
    ("that given %s, isSuperUser should return false", (permissionLevel) => {
        expect(permissionLevel.isSuperUser()).toBeFalse();
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.OWNER])
    ("that given %s, isSuperUser should return true", (permissionLevel) => {
        expect(permissionLevel.isSuperUser()).toBeTrue();
    });

    // This test also serves to validate against potential runtime issues and check against type guards
    test.each([null, undefined, 1, true])
    ("that given %s, getPermissionLevelType should throw an unsupported type error", (arg) => {
        expect(() => {
            // @ts-ignore
            PermissionLevelType.getPermissionLevelType(arg);
        }).toThrowError(`Unsupported type ${typeof arg} provided`);
    });

    test.each(["1", "", "foo", "bar"])
    ("that given %s, getPermissionLevelType should throw an unsupported code error", (arg) => {
        expect(() => {
            PermissionLevelType.getPermissionLevelType(arg)
        }).toThrowError(`Unsupported code ${arg} provided`);
    });

    test.each(["admin", "ADMIN", "Bot", "bot", "MOD", "mod", "mOD", "NONE", "none", "OWNER", "owner", "owNer"])
    ("that given %s, getPermissionLevelType should return a valid PermissionLevelType", (arg) => {
        expect(PermissionLevelType.getPermissionLevelType(arg)).toBeDefined();
    });

    test.each([null, undefined, new PermissionLevelType("INVALID", "invalid")])
    ("that given %s, validateType should return false", (arg) => {
        expect(PermissionLevelType.validateType(arg)).toBeFalse();
    });

    test.each([PermissionLevelType.ADMIN, PermissionLevelType.BOT, PermissionLevelType.MOD,
        PermissionLevelType.NONE, PermissionLevelType.OWNER])
    ("that given %s, validateType should return true", (arg) => {
        expect(PermissionLevelType.validateType(arg)).toBeTrue();
    });

    test("that the number of supported PermissionLevelTypes is the correct amount", () => {
        expect(PermissionLevelType.SUPPORTED_TYPES).toBeArrayOfSize(SUPPORTED_PERMISSION_LEVEL_TYPE_COUNT);
    });

    test("that the number of super user PermissionLevelTypes is the correct amount", () => {
        expect(PermissionLevelType.SUPER_USER_LIST).toBeArrayOfSize(SUPER_USER_COUNT);
    });

    test("that the number of privileged user PermissionLevelTypes is the correct amount", () => {
        expect(PermissionLevelType.PRIVILEGED_USER_LIST).toBeArrayOfSize(PRIVILEGED_USER_COUNT);
    });

});