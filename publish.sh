#!/usr/bin/env bash
set -e

# 修改npm源
npm config get registry
npm config set registry=https://registry.npmjs.org

# 登录输入自己的npm账号密码，邮箱
echo "登录"
npm login
echo "发布中..."
npm publish

# 改回npm源
npm config set registry=https://registry.npm.taobao.org
echo -e "\n发布成功\n"
exit
