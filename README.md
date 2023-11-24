# @lbenie/linting

My personal opinionated linting configuration for eslint prettier and stylelint

## Usage

Inside your project install the package

```bash
npm i -D @lbenie/linting
```

or

```bash
yarn add -D @lbenie/linting
```

Then create a `eslint.config.js` file at the root of your project and add the following

```js
import rules from '@lbenie/linting/eslint';

export default [
  ...rules,
]
```

Then create a `stylelint.config.cjs` file at the root of your project and add the following

```js
import rules from '@lbenie/linting/stylelint';

export default [
  ...rules,
]
```

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://lbenie.xyz/"><img src="https://avatars.githubusercontent.com/u/7316046?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucien Bénié</b></sub></a><br /><a href="https://github.com/lbenie/ts-vite/commits?author=lbenie" title="Code">💻</a> <a href="https://github.com/lbenie/ts-vite/commits?author=lbenie" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
