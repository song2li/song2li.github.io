# Wearable Molecular Bioelectronics Lab - Official Website

香港浸会大学可穿戴分子生物电子实验室官方网站

## 🌟 主要功能

- **完全响应式设计** - 完美适配桌面、平板和手机
- **回到顶部按钮** - 所有页面支持快速返回顶部
- **访客地图统计** - 实时显示网站访问者的地理分布
- **研究成果展示** - 图文轮播展示研究亮点
- **平滑滚动** - 提供流畅的页面浏览体验
- **移动端优化** - 针对手机屏幕特别优化的布局和交互

## 📁 网站结构

```
├── index.html          # 主页（研究亮点轮播）
├── research.html       # 研究方向
├── people.html         # 团队成员
├── publications.html   # 发表论文
├── news.html          # 实验室新闻
├── contact.html       # 联系方式和访客地图
├── css/
│   └── style.css      # 全局样式
├── js/
│   └── main.js        # 交互功能
├── images/            # 图片资源
└── pdfs/             # PDF文件

```

## 🚀 快速开始

### 本地开发

使用Python内置服务器：
```bash
python -m http.server 8000
```

或使用Node.js的http-server：
```bash
npx http-server -p 8000
```

然后访问 `http://localhost:8000`

### 部署到GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为发布源
4. 网站将自动部署

## 🛠 技术栈

- **HTML5** - 页面结构，带完整语义化标签
- **CSS3** - 样式和动画效果，包含响应式断点
- **JavaScript (ES6+)** - 交互功能（回到顶部、轮播等）
- **Font Awesome 6.0** - 图标库
- **ClustrMaps / FlagCounter** - 访客地图统计

## 📱 移动端支持

网站已针对移动设备进行全面优化：
- ✅ 响应式断点：768px（平板）、480px（手机）
- ✅ 触摸友好的按钮和链接
- ✅ 自适应图片和布局
- ✅ 优化的文字大小和间距
- ✅ 横向滚动表格

详细信息请参考 `MOBILE_OPTIMIZATION.md`

## 📝 内容更新指南

### 添加新闻
编辑 `news.html`，在新闻列表中添加新条目

### 更新团队成员
编辑 `people.html`，在相应部分添加或修改成员信息

### 添加出版物
编辑 `publications.html`，按年份添加新的出版物条目

### 修改样式
所有样式定义在 `css/style.css` 文件中

## 📧 联系方式

Prof. Songsong Li  
Department of Physics  
Hong Kong Baptist University  
Email: song2li@hkbu.edu.hk

## 📄 许可

© 2026 Wearable Molecular Bioelectronics Lab. All rights reserved. 