# ☁️ Cloudflare Manager

> 一个部署在 Cloudflare Pages 上的多账号资源备忘工具，用来记录每个账号下的域名和服务。

![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F6821F?logo=cloudflare&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-success)

---

## ✨ 功能

| 模块 | 说明 |
|------|------|
| 👤 多账号管理 | 添加、删除多个 Cloudflare 账号 |
| 🌐 域名记录 | 域名、到期时间、注册地址、备注 |
| ⚙️ 服务记录 | Workers / Pages / Tunnel / R2 / 其他 |
| ⏰ 到期提醒 | 30 天内到期自动高亮 |
| 💾 数据备份 | 一键导出 / 导入 JSON |
| 🔒 密码保护 | 环境变量设置访问密码 |

---

## 📁 目录结构

```text
cloudflare_manager/
  index.html          前端页面
  _worker.js          后端接口
  README.md           项目说明

🚀 部署步骤
1️⃣ 创建 KV 命名空间
Cloudflare Dashboard → Workers & Pages → KV → Create namespace

名字随意，比如 memo-kv。

2️⃣ 创建 Pages 项目
Workers & Pages → Create → Pages → Upload assets

项目名填 cloudflare_manager。先随便上传一个文件占位。

3️⃣ 配置绑定和环境变量
进入 Pages 项目 → Settings → Functions：

配置项	值
KV namespace binding	变量名 MY_KV，选择刚建的 KV
Environment variable	PASSWORD = 你的密码
保存后，去 Deployments → 最新一条 → ... → Retry deployment，让配置生效。

4️⃣ 上传代码
进入 cloudflare_manager 文件夹里面，全选 index.html 和 _worker.js，打包成 zip 上传。

zip 第一层必须是这两个文件，不能再套一层文件夹。

5️⃣ 访问
text
https://cloudflare-manager.pages.dev
输入密码即可使用 🎉

📖 使用说明
第一层：账号列表
点 ➕ 添加账号 新增

点账号卡片进入详情

第二层：账号详情
位置	内容
左侧卡片	🌐 域名记录（点卡片可编辑删除）
右侧卡片	⚙️ 服务记录
数据备份
顶部 ⬇ 图标：导出 JSON

顶部 ⬆ 图标：导入 JSON（可选合并或覆盖）

🛠️ 技术栈
前端：原生 HTML + JS + Tailwind CSS（CDN）

后端：Cloudflare Pages _worker.js

存储：Cloudflare KV

部署：Cloudflare Dashboard 拖拽上传

完全免费，个人使用额度绰绰有余。

📄 License
MIT
