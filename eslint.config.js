export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly",
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                process: "readonly",
                Buffer: "readonly",
                __dirname: "readonly",
            },
        },
        rules: {
        },
    },
];
