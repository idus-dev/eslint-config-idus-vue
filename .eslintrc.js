module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "plugins": [
        "html", // required to lint .vue file
        "prettier"
    ],
    "extends": [
        "airbnb-base",
        "prettier",
        "eslint:recommended",
        "plugin:vue/recommended" // vue 파일 검사용
    ],
    "settings": {
        "import/resolver": "webpack"
    },
    "rules": {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "vue": "never"
            }
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ]
    }
}