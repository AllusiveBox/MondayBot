import CommandParameterType from "../../../src/types/discord/CommandParameterType";
import "jest-extended";

/**
 *
 * Variable for the magic number representing the number of variables that should be in the
 * {@link CommandParameterType.SUPPORTED_TYPES} array.
 *
 * @type {number}
 *
 */
const SUPPORTED_COMMAND_PARAMETER_TYPE_COUNT = 14;

/**
 *
 * CommandParameterType Unit Tests
 *
 * @group unit
 *
 */
describe("CommandParameterType unit test suite", () => {

    test("static toString returns CommandParameterType for class", () => {
        expect(`${CommandParameterType}`).toBe("CommandParameterType");
    });

    test("that creating a new CommandParameterType assigns the correct values", () => {
        // Setup
        const commandParameterType = new CommandParameterType(
            "TEST",
            "test",
            "Test name",
            "Test description"
        );

        // Expect values are correctly assigned
        expect(commandParameterType.getCode()).toBe("TEST");
        expect(commandParameterType.getText()).toBe("test");
        expect(commandParameterType.getName()).toBe("Test name");
        expect(commandParameterType.getDescription()).toBe("Test description");
    });

    test.each([CommandParameterType.NUMBER_OPTIONAL, CommandParameterType.NUMBER_REQUIRED,
        CommandParameterType.POINTS_REQUIRED, CommandParameterType.STRING_OPTIONAL,
        CommandParameterType.STRING_REQUIRED, CommandParameterType.USER_ID_OPTIONAL,
        CommandParameterType.USER_ID_REQUIRED, CommandParameterType.USER_ID_THROW_ERROR,
        CommandParameterType.USER_MENTIONABLE_OPTIONAL, CommandParameterType.USER_MENTIONABLE_REQUIRED,
        CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, isCommandName returns false", (commandParameterType) => {
        expect(commandParameterType.isCommandName()).toBeFalse();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR,])
    ("that given %s, isCommandName returns true", (commandParameterType) => {
        expect(commandParameterType.isCommandName()).toBeTrue();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR, CommandParameterType.POINTS_REQUIRED,
        CommandParameterType.STRING_OPTIONAL, CommandParameterType.STRING_REQUIRED,
        CommandParameterType.USER_ID_OPTIONAL, CommandParameterType.USER_ID_REQUIRED,
        CommandParameterType.USER_ID_THROW_ERROR, CommandParameterType.USER_MENTIONABLE_OPTIONAL,
        CommandParameterType.USER_MENTIONABLE_REQUIRED, CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, isNumber returns false", (commandParameterType) => {
        expect(commandParameterType.isNumber()).toBeFalse();
    });

    test.each([CommandParameterType.NUMBER_OPTIONAL, CommandParameterType.NUMBER_REQUIRED,])
    ("that given %s, isNumber returns true", (commandParameterType) => {
        expect(commandParameterType.isNumber()).toBeTrue();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR, CommandParameterType.NUMBER_OPTIONAL,
        CommandParameterType.NUMBER_REQUIRED, CommandParameterType.STRING_OPTIONAL,
        CommandParameterType.STRING_REQUIRED, CommandParameterType.USER_ID_OPTIONAL,
        CommandParameterType.USER_ID_REQUIRED, CommandParameterType.USER_ID_THROW_ERROR,
        CommandParameterType.USER_MENTIONABLE_OPTIONAL, CommandParameterType.USER_MENTIONABLE_REQUIRED,
        CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, isPoints returns false", (commandParameterType) => {
        expect(commandParameterType.isPoints()).toBeFalse();
    });

    test.each([CommandParameterType.POINTS_REQUIRED])
    ("that given %s, isPoints returns true", (commandParameterType) => {
        expect(commandParameterType.isPoints()).toBeTrue();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR, CommandParameterType.NUMBER_OPTIONAL,
        CommandParameterType.NUMBER_REQUIRED, CommandParameterType.POINTS_REQUIRED,
        CommandParameterType.USER_ID_OPTIONAL, CommandParameterType.USER_ID_REQUIRED,
        CommandParameterType.USER_ID_THROW_ERROR, CommandParameterType.USER_MENTIONABLE_OPTIONAL,
        CommandParameterType.USER_MENTIONABLE_REQUIRED, CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, isString returns false", (commandParameterType) => {
        expect(commandParameterType.isString()).toBeFalse();
    });

    test.each([CommandParameterType.STRING_OPTIONAL, CommandParameterType.STRING_REQUIRED,])
    ("that given %s, isString returns true", (commandParameterType) => {
        expect(commandParameterType.isString()).toBeTrue();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR, CommandParameterType.NUMBER_OPTIONAL,
        CommandParameterType.NUMBER_REQUIRED, CommandParameterType.POINTS_REQUIRED,
        CommandParameterType.STRING_OPTIONAL, CommandParameterType.STRING_REQUIRED,
        CommandParameterType.USER_MENTIONABLE_OPTIONAL, CommandParameterType.USER_MENTIONABLE_REQUIRED,
        CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, isUserId returns false", (commandParameterType) => {
        expect(commandParameterType.isUserId()).toBeFalse();
    });

    test.each([CommandParameterType.USER_ID_OPTIONAL, CommandParameterType.USER_ID_REQUIRED,
        CommandParameterType.USER_ID_THROW_ERROR,])
    ("that given %s, isUserId returns true", (commandParameterType) => {
        expect(commandParameterType.isUserId()).toBeTrue();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR, CommandParameterType.NUMBER_OPTIONAL,
        CommandParameterType.NUMBER_REQUIRED, CommandParameterType.POINTS_REQUIRED,
        CommandParameterType.STRING_OPTIONAL, CommandParameterType.STRING_REQUIRED,
        CommandParameterType.USER_ID_OPTIONAL, CommandParameterType.USER_ID_REQUIRED,
        CommandParameterType.USER_ID_THROW_ERROR])
    ("that given %s, isUserMentionable returns false", (commandParameterType) => {
        expect(commandParameterType.isUserMentionable()).toBeFalse();
    });

    test.each([CommandParameterType.USER_MENTIONABLE_OPTIONAL, CommandParameterType.USER_MENTIONABLE_REQUIRED,
        CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, isUserMentionable returns true", (commandParameterType) => {
        expect(commandParameterType.isUserMentionable()).toBeTrue();
    });

    test.each([null, undefined, new CommandParameterType("", "", "", "")])
    ("that given %s, validateType should return false", (commandParameterType) => {
        expect(CommandParameterType.validateType(commandParameterType)).toBeFalse();
    });

    test.each([CommandParameterType.COMMAND_NAME_OPTIONAL, CommandParameterType.COMMAND_NAME_REQUIRED,
        CommandParameterType.COMMAND_NAME_THROW_ERROR, CommandParameterType.NUMBER_OPTIONAL,
        CommandParameterType.NUMBER_REQUIRED, CommandParameterType.POINTS_REQUIRED,
        CommandParameterType.STRING_OPTIONAL, CommandParameterType.STRING_REQUIRED,
        CommandParameterType.USER_ID_OPTIONAL, CommandParameterType.USER_ID_REQUIRED,
        CommandParameterType.USER_ID_THROW_ERROR, CommandParameterType.USER_MENTIONABLE_OPTIONAL,
        CommandParameterType.USER_MENTIONABLE_REQUIRED, CommandParameterType.USER_MENTIONABLE_THROW_ERROR])
    ("that given %s, validateType should return true", (commandParameterType) => {
        expect(CommandParameterType.validateType(commandParameterType)).toBeTrue();
    });

    test("that the number of supported CommandParameterTypes is the correct amount", () => {
        expect(CommandParameterType.SUPPORTED_TYPES).toBeArrayOfSize(SUPPORTED_COMMAND_PARAMETER_TYPE_COUNT);
    })

});