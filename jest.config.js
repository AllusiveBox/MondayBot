/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    runner: "groups",
    setupFilesAfterEnv: ["jest-extended/all"],
    testEnvironment: 'node'
};