# Eslint & Prettier 설정

[![npm](https://flat.badgen.net/npm/v/eslint-config-idus-vue)](https://npmjs.com/package/eslint-config-idus-vue)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## 설치

``` bash
npx install-peerdeps --dev eslint-config-idus-vue
```

## 프로젝트 .eslintrc 파일

``` json
{
  "extends": [
    "idus-vue"
  ]
}
```

## VSCode 설정

1. [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 설치
2. 에디터 설정 파일 수정:
    - 에디터 설정 파일 여는 방법: `cmd` + `shift` + `p` => `> Preferences: Open Settings (JSON)`

  ```js
    // JS & JSX 는 비활성화 - eslint로 포맷팅 하기 위해 에디터 디폴트 기능은 해제합니다.
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
     // 에디터 디폴트 -문서 저장시 포맷팅 기능 활성화
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // !필수 아님
    // VScode의 Prettier Extension이 설치 되어있으면 JS & JSX 자동 포맷팅 비활성화
    "prettier.disableLanguages": ["javascript", "javascriptreact"],
  ```
