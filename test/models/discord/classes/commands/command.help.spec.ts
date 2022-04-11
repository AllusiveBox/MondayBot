import CommandHelp from "../../../../../src/models/discord/classes/commands/command.help";
import CommandResponseType from "../../../../../src/types/discord/command.response.type";
import PermissionLevelType from "../../../../../src/types/common/permission.level.type";
import CommandParameterType from "../../../../../src/types/discord/command.parameter.type";
import "jest-extended";

/**
 *
 * CommandHelp Unit Tests
 *
 * @group unit
 *
 */
describe("CommandHelp unit test suite", () => {

    test.each([null, undefined])
    ("that given %s, attempting to instantiate a CommandHelp instance throws an error", (arg) => {
        expect(() => {
            new CommandHelp(arg)
        }).toThrowError("Unable to create command with a null data object");
    });

    // Type guard test against an empty object
    test("that attempting to instantiate a CommandHelp instance without all the required values causes an error", () => {
        expect(() => {
            // @ts-ignore
            new CommandHelp({});
        }).toThrowError("commandResponseType is either null or undefined and cannot be;description is either" +
            " null or undefined and cannot be;enabled is either null or undefined and cannot be;permissionLevel is" +
            " either null or undefined and cannot be;name is invalid;");
    });

    test("that CommandHelp instantiates correctly and all defaults are set", () => {
        // Setup
        let commandHelp: CommandHelp;

        // Expect the class creation to not throw an error
        expect(() => {
            commandHelp = new CommandHelp({
                commandResponseType: CommandResponseType.NO_RESPONSE_SENT,
                description: "Test",
                enabled: true,
                name: "Test command",
                permissionLevel: PermissionLevelType.NONE
            });
        }).not.toThrowError();

        expect(commandHelp.commandResponseType).toStrictEqual(CommandResponseType.NO_RESPONSE_SENT);
        expect(commandHelp.description).toBe("Test");
        expect(commandHelp.isEnabled).toBeTrue();
        expect(commandHelp.name).toBe("testcommand");
        expect(commandHelp.permissionLevel).toStrictEqual(PermissionLevelType.NONE);
        expect(commandHelp.aliases).toBeArrayOfSize(1);
        expect(commandHelp.aliases[0]).toBe("testcommand");
        expect(commandHelp.commandFormat).toBeNull();
        expect(commandHelp.commandParameters).toBeArrayOfSize(0);
        expect(commandHelp.detailedDescription).toBe("Test");
        expect(commandHelp.examples).toBe("N/A");
        expect(commandHelp.fullName).toBe("Test command");
    });

    test("that CommandHelp correctly builds the alias array when provided an \"aliases\" config parameter without" +
        " the command name in it", () => {

        // Setup
        const commandHelp = new CommandHelp({
            commandResponseType: CommandResponseType.NO_RESPONSE_SENT,
            description: "Test",
            enabled: true,
            name: "Test command",
            permissionLevel: PermissionLevelType.NONE,
            aliases: ["test", "testo"]
        });

        expect(commandHelp.aliases).toBeArrayOfSize(3);
        expect(commandHelp.aliases).toStrictEqual(["test", "testo", "testcommand"]);
    });

    test("that CommandHelp correctly builds the alias array when provided an \"aliases\" config parameter with the" +
        " command name in it", () => {

        // Setup
        const commandHelp = new CommandHelp({
            commandResponseType: CommandResponseType.NO_RESPONSE_SENT,
            description: "Test",
            enabled: true,
            name: "Test",
            permissionLevel: PermissionLevelType.NONE,
            aliases: ["test", "testo"]
        });

        expect(commandHelp.aliases).toBeArrayOfSize(2);
        expect(commandHelp.aliases).toStrictEqual(["test", "testo"]);
    });

    test("that the class instantiates correctly when given non-required fields that are valid", () => {
        // Setup
        const commandHelp = new CommandHelp({
            commandResponseType: CommandResponseType.NO_RESPONSE_SENT,
            description: "Test",
            enabled: true,
            name: "Test Command",
            permissionLevel: PermissionLevelType.NONE,
            aliases: ["test"],
            commandFormat: "!test {string}",
            commandParameters: [CommandParameterType.STRING_OPTIONAL],
            detailedDescription: "This is a bigger description for test",
            examples: "!test hello",
            fullName: "A test command for testing tests"
        });

        // Expect the fields to populate correctly
        expect(commandHelp.aliases).toBeArrayOfSize(2);
        expect(commandHelp.aliases).toStrictEqual(["test", "testcommand"]);
        expect(commandHelp.commandFormat).toBe("!test {string}");
        expect(commandHelp.commandParameters).toBeArrayOfSize(1);
        expect(commandHelp.commandParameters).toStrictEqual([CommandParameterType.STRING_OPTIONAL]);
        expect(commandHelp.detailedDescription).toBe("This is a bigger description for test");
        expect(commandHelp.examples).toBe("!test hello");
        expect(commandHelp.fullName).toBe("A test command for testing tests");
    });

    test("that the enable method correctly updates the \"enabled\" flag", () => {
        // Setup
        const commandHelp = generateNewBasicCommandHelp(false);

        // Check that the flag is correctly assigned
        expect(commandHelp.isEnabled).toBeFalse();

        // Update flag
        commandHelp.enable();

        // Check that the flag is now set as enabled
        expect(commandHelp.isEnabled).toBeTrue();
    });

    test("that the disable method correctly updates the \"enabled\" flag", () => {
        // Setup
        const commandHelp = generateNewBasicCommandHelp(true);

        // Check that the flag is correctly assigned
        expect(commandHelp.isEnabled).toBeTrue();

        // Update flag
        commandHelp.disable();

        // Check that the flag is now set as disabled
        expect(commandHelp.isEnabled).toBeFalse();
    });

});

/**
 *
 * Creates a basic CommandHelp instance with only the required fields populated.
 *
 * @returns {CommandHelp} A basic command help object.
 *
 */
function generateNewBasicCommandHelp(enabled: boolean): CommandHelp {
    return new CommandHelp({
        commandResponseType: CommandResponseType.NO_RESPONSE_SENT,
        description: "Test",
        enabled: enabled,
        name: "Test command",
        permissionLevel: PermissionLevelType.NONE
    });
}
