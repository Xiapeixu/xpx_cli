#!/usr/bin/env node

// 引入命令插件
const { program } = require("commander");

// 版本号
program.version("0.1.1");
// 创建项目模板
program
  .command("create <project>")
  .alias("c")
  .description("创建项目")
  .action((projectName) => {
    // download-git-repo
    // downloadGitRepo(projectName);
    // xpx-clone
    xpxClone(projectName);
  });
// process.argv是原生获取的命令参数
program.parse(process.argv);

/**
 * download-git-repo 支持
 * GitHub
 * GitLab
 * Bitbucket
 */
function downloadGitRepo(projectName) {
  const download = require("download-git-repo");
  download("github.com:Xiapeixu/uni-template#master", projectName, (err) => {
    if (err) {
      // 失败
      console.log("失败", err);
    } else {
      //成功
      console.log("成功");
    }
  });
}

/**
 * xpx-clone 支持
 * GitHub
 * GitLab
 * Gitee
 * Bitbucket
 */
async function xpxClone(projectName) {
  const ora = require("ora");
  const process = ora("开始创建...");
  process.start();
  process.color = "yellow";
  process.text = "正在创建...";
  // 下载
  const download = require("./xpx-clone");
  // 格式 "gitee:用户名/仓库名"
  const err = await download("gitee:Xiapeixu/uni-template", projectName, {
    clone: true,
  });
  if (err) {
    // 失败
    // console.log("失败", err);
    process.color = "red";
    process.text = `创建失败${err}`;
    process.fail();
  } else {
    //成功
    // console.log("成功");
    process.color = "green";
    process.text = "创建成功";
    process.succeed();
  }
}
