---
description: 限制项目使用的工具
---

如果你想限制统一团队使用的包管理工具，可以创建校验脚本，创建文件 `scripts/preinstall.js`,编写代码


`process.env.npm_execpath` 是一个 Node.js 环境变量，它包含了执行 npm（或兼容的包管理工具，如 yarn、pnpm 等）命令时的完整路径。这个环境变量在 npm 的生命周期脚本（如 preinstall、install、postinstall 等）中可用。
~~~js
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  );
  process.exit(1);
}

// if (/yarn/.test(process.env.npm_execpath || '')) {
//   // 执行适用于 yarn 的代码
// } else if (/npm/.test(process.env.npm_execpath || '')) {
//   // 执行适用于 npm 的代码
// }
~~~
在package.json 使用脚本指令， `preinstall` 是一个在 Node.js 的 npm（或其他兼容的包管理工具，如 yarn、pnpm 等）生命周期脚本中使用的钩子。当你运行 `npm install` 或者在项目中添加一个新的依赖时， `preinstall` 脚本会在实际安装依赖之前执行

~~~js
"scripts": {
    "preinstall": "node ./scripts/preinstall.js"
  },
~~~

## pnpm 自带检查指令

当您在项目中使用 pnpm 时，为了防止开发人员使用其他包管理器，可以在 package.json 中添加以下预安装脚本 [Only allow pnpm](https://pnpm.io/only-allow-pnpm)

~~~json
{
    "scripts": {
        "preinstall": "npx only-allow pnpm"
    }
}
~~~

