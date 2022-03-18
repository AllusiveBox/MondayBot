import DiscordUtil from "../../src/utils/discord.util";
import "jest-extended";

/**
 *
 * DiscordUtil Unit Tests
 *
 * @group unit
 *
 */
describe("DiscordUtil unit test suite", () => {

     test.each(["", null, undefined])
     ("that given %s, bold will return an empty string", (arg) => {
         expect(DiscordUtil.bold(arg)).toBeEmpty();
     });

     test("that bold wraps the provided string in double asterisks", () => {
         expect(DiscordUtil.bold("Bold test")).toBe("**Bold test**");
     });

 });