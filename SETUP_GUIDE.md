# 网站设置指南

## 🗺️ 设置访客地图统计

### 方法一：使用 ClustrMaps

1. 访问 [ClustrMaps.com](https://clustrmaps.com)
2. 点击"Get Your Free Map"注册账号
3. 填写网站信息并创建widget
4. 复制提供的代码
5. 在 `contact.html` 中找到以下代码：
   ```html
   <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=YOUR_CLUSTRMAPS_ID&cl=ffffff&w=a"></script>
   ```
6. 将 `YOUR_CLUSTRMAPS_ID` 替换为你获得的实际ID

### 方法二：使用 Flag Counter

1. 访问 [FlagCounter.com](https://flagcounter.com)
2. 点击"Get Your Counter"
3. 自定义计数器外观
4. 复制生成的代码
5. 在 `contact.html` 中找到Flag Counter部分并替换相应的ID

## 🔄 更新网站内容

### 添加新闻

编辑 `news.html`，在 `.news-section` 中添加新的 `.news-item`：

```html
<div class="news-item">
    <p class="news-content"><strong>月份 年份</strong> - 新闻内容</p>
</div>
```

### 添加团队成员

编辑 `people.html`，在 `.members-grid` 中添加新的 `.member-card`：

```html
<div class="member-card">
    <img src="images/姓名.jpg" alt="姓名" style="border-radius: 10px;">
    <h4>姓名</h4>
    <p class="title">职位</p>
    <p style="text-align: left;"><strong>Year joined:</strong> 年份</p>
    <p style="text-align: left;"><strong>Research interests:</strong> 研究兴趣</p>
</div>
```

### 添加出版物

编辑 `publications.html`，按照现有格式添加新的出版物条目。注意：
- 使用 `<span class="author-highlight">` 高亮标注实验室成员
- 使用 `<span class="journal-name">` 标注期刊名称
- 提供PDF链接和DOI链接

### 更新研究亮点轮播

编辑 `index.html`，在 `.carousel-wrapper` 中添加新的 `.carousel-slide`：

```html
<div class="carousel-slide">
    <img src="images/highlight新编号.jpg" alt="研究亮点">
    <h4>研究标题</h4>
    <p>研究描述</p>
</div>
```

## 🎨 自定义样式

所有样式定义在 `css/style.css` 中。主要配色：
- 主色调：`#667eea` 到 `#764ba2` 的渐变
- 深色文字：`#2c3e50`
- 浅色文字：`#555`
- 背景色：`#f8f9fa`

## 📱 响应式设计

网站已针对移动设备优化。断点设置在 `768px`，在此宽度以下会触发移动端布局。

## 🚀 回到顶部功能

所有页面自动包含"回到顶部"按钮：
- 滚动超过300px时自动显示
- 点击平滑滚动到页面顶部
- 样式和行为在 `css/style.css` 和 `js/main.js` 中定义

## 🔧 技术支持

如需技术支持，请联系：song2li@hkbu.edu.hk

## 📝 维护清单

定期检查：
- [ ] 更新新闻和活动
- [ ] 添加新发表的论文
- [ ] 更新团队成员信息
- [ ] 检查所有链接是否有效
- [ ] 优化图片大小以提高加载速度
- [ ] 检查访客统计是否正常工作

