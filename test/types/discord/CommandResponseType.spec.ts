import CommandResponseType from "../../../src/types/discord/CommandResponseType";
import "jest-extended";

/**
 *
 * Variable for the magic number representing the number of variables that should be in the
 * {@link CommandResponseType.SUPPORTED_TYPES} array.
 *
 * @type {number}
 *
 */
const SUPPORTED_COMMAND_RESPONSE_TYPE_COUNT = 5;

/**
 *
 * CommandResponseType Unit Tests
 *
 * @group unit
 *
 */
describe("CommandResponseType unit test suite", () => {

    test("static toString returns CommandResponseType for class", () => {
        expect(`${CommandResponseType}`).toBe("CommandResponseType");
    });

    test("that creating a new CommandResponseType assigns the correct values", () => {
        // Setup
        const commandResponseType = new CommandResponseType("TEST", "test", "test");

        // Expect values are correctly assigned
        expect(commandResponseType.getCode()).toBe("TEST");
        expect(commandResponseType.getText()).toBe("test");
        expect(commandResponseType.getType()).toBe("CommandResponseType");
        expect(commandResponseType.getResponseMessage()).toBe("test");
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT, CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR,
        new CommandResponseType("INVALID", "invalid", null)])
    ("that given %s, isAnyResponseSent should return false", (commandResponseType) => {
        expect(commandResponseType.isAnyResponseSent()).toBeFalse();
    });

    test.each([CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE, CommandResponseType.RESPONSE_AS_EPHEMERAL,
        CommandResponseType.RESPONSE_IN_CHANNEL])
    ("that given %s, isAnyResponseSent should return true", (commandResponseType) => {
        expect(commandResponseType.isAnyResponseSent()).toBeTrue();
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR, CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE,
        CommandResponseType.RESPONSE_AS_EPHEMERAL, CommandResponseType.RESPONSE_IN_CHANNEL])
    ("that given %s, isNoResponseSent should return false", (commandResponseType) => {
        expect(commandResponseType.isNoResponseSent()).toBeFalse();
    });

    test("that given CommandResponseType:NO_RESPONSE_SENT, isNoResponseSent should return true", () => {
        expect(CommandResponseType.NO_RESPONSE_SENT.isNoResponseSent()).toBeTrue();
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT, CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE,
        CommandResponseType.RESPONSE_AS_EPHEMERAL, CommandResponseType.RESPONSE_IN_CHANNEL])
    ("that given %s, isNoResponseSentUnlessError should return false", (commandResponseType) => {
        expect(commandResponseType.isNoResponseSentUnlessError()).toBeFalse();
    });

    test("that given CommandResponseType:NO_RESPONSE_SENT_UNLESS_ERROR, isNoResponseSentUnlessError should return" +
        " true", () => {

        expect(CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR.isNoResponseSentUnlessError()).toBeTrue();
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT, CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR,
        CommandResponseType.RESPONSE_AS_EPHEMERAL, CommandResponseType.RESPONSE_IN_CHANNEL])
    ("that given %s, isResponseSentAsDirectMessage should return false", (commandResponseType) => {
        expect(commandResponseType.isResponseSentAsDirectMessage()).toBeFalse();
    });

    test("that given CommandResponseType:RESPONSE_AS_DIRECT_MESSAGE, isResponseSentAsDirectMessage should be true", () => {
        expect(CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE.isResponseSentAsDirectMessage()).toBeTrue();
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT, CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR,
        CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE, CommandResponseType.RESPONSE_IN_CHANNEL])
    ("that given %s, isResponseSentAsEphemeralMessage should return false", (commandResponseType) => {
        expect(commandResponseType.isResponseSentAsEphemeralMessage()).toBeFalse();
    });

    test("that given CommandResponseType:RESPONSE_AS_EPHEMERAL, isResponseSentAsEphemeralMessage should" +
        " return true", () => {

        expect(CommandResponseType.RESPONSE_AS_EPHEMERAL.isResponseSentAsEphemeralMessage()).toBeTrue();
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT, CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR,
        CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE, CommandResponseType.RESPONSE_AS_EPHEMERAL])
    ("that given %s, isResponseSentInChannel should return false", (commandResponseType) => {
        expect(commandResponseType.isResponseSentInChannel()).toBeFalse();
    });

    test("that given CommandResponseType:RESPONSE_IN_CHANNEL, isResponseSentInChannel should return true", () => {
        expect(CommandResponseType.RESPONSE_IN_CHANNEL.isResponseSentInChannel()).toBeTrue();
    });

    test.each([null, undefined, new CommandResponseType("INVALID", "invalid", null)])
    ("that given %s, validateType should return false", (commandResponseType) => {
        expect(CommandResponseType.validateType(commandResponseType)).toBeFalse();
    });

    test.each([CommandResponseType.NO_RESPONSE_SENT, CommandResponseType.NO_RESPONSE_SENT_UNLESS_ERROR,
        CommandResponseType.RESPONSE_AS_DIRECT_MESSAGE, CommandResponseType.RESPONSE_AS_EPHEMERAL,
        CommandResponseType.RESPONSE_IN_CHANNEL])
    ("that given %s, validateType should return true", (commandResponseType) => {
        expect(CommandResponseType.validateType(commandResponseType));
    });

    test("that the number of supported CommandResponseTypes is the correct amount", () => {
        expect(CommandResponseType.SUPPORTED_TYPES).toBeArrayOfSize(SUPPORTED_COMMAND_RESPONSE_TYPE_COUNT);
    });

});