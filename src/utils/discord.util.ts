import { StringUtil } from "@allusivebox/bootstrap";

/**
 *
 * Utility class containing methods relating to Discord.
 *
 * @class DiscordUtil
 *
 */
export default class DiscordUtil {

    /**
     *
     * Wraps the supplied string in markdown characters that will make it bold when displayed on Discord.
     *
     * @param {string} str The string to bold.
     * @static
     * @returns {string} The string wrapped between a set of double asterisk, or an empty string, if no string is
     * provided.
     *
     */
    static bold(str: string): string {
        return StringUtil.isSet(str) ? `**${str}**` : "";
    };

}