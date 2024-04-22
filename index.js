#!/usr/bin/env node

// 引入命令插件
const { program } = require("commander");

// 版本号
program.version("0.1.0");
// 创建项目模板
program
  .command("create <project>")
  .description("创建项目")
  .action((projectName) => {
    const download = require("download-git-repo");
    //download的api
    download("github.com:Xiapeixu/uni-template#master", projectName, (err) => {
      if (err) {
        // 失败
        console.log("失败", err);
      } else {
        //成功
        console.log("成功");
      }
    });
  });
// process.argv是原生获取的命令参数
program.parse(process.argv);
