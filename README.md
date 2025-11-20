# CAUCOJ 算法标签思维导图

使用 Mind Elixir 展示 OJ 算法分类的思维导图。

## 🚀 运行方法

由于使用了 ES6 模块，需要通过 HTTP 服务器运行，不能直接打开 HTML 文件。

### 方法 1: 使用 Flask 服务器（推荐）

**快速启动（Windows）:**
```bash
双击运行 start-flask.bat
```

**或手动启动:**
```bash
# 安装依赖
pip install flask

# 启动服务器
python server.py
```

然后在浏览器中访问: `http://localhost:8080`

### 方法 2: 使用 Python 内置服务器

如果你安装了 Python，在项目目录下运行：

**Python 3:**
```bash
python -m http.server 8080
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8080
```

然后在浏览器中访问: `http://localhost:8080`

### 方法 3: 使用 VS Code Live Server

1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

### 方法 4: 使用 Node.js

如果你安装了 Node.js，可以使用 `http-server`:

```bash
npx http-server -p 8080
```

然后在浏览器中访问: `http://localhost:8080`

## 📁 文件说明

- `index.html` - 主页面
- `style.css` - 样式文件
- `app.js` - 应用逻辑和数据
- `server.py` - Flask 服务器脚本
- `start-flask.bat` - Flask 服务器快速启动脚本（Windows）
- `start.bat` - Python HTTP 服务器启动脚本（Windows）
- `requirements.txt` - Python 依赖包列表

## 🎯 功能特性

- ✨ 天蓝色主题，简洁优雅
- 📊 9 个算法主分类
- 🏷️ 200+ 个具体知识点
- 🔍 支持缩放、拖拽
- 📱 响应式设计
- ↩️ 支持撤销/重做
- 🌐 Flask 服务器支持

## 🎨 使用说明

- **放大/缩小**: 点击工具栏按钮或使用鼠标滚轮
- **移动视图**: 拖拽画布
- **展开/折叠**: 点击节点
- **居中显示**: 点击居中按钮
