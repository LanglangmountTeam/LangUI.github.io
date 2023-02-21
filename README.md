<div class="pic-plus">
  <img src='/src/assets/img/logo.jpg'/>
</div>

<div class="title">致力于开源学习的UI组件库</div>

<div class="summary">
  <div class="summary-item">
    <a>
      <img src="https://camo.githubusercontent.com/cdc69c438472be59734e5d67d12533d15e48bc94b27429f31b2d3b7d88b6639a/68747470733a2f2f7472617669732d63692e6f72672f456c656d6546452f656c656d656e742e7376673f6272616e63683d6d6173746572"/>
    </a>
    <a>
      <img src="https://camo.githubusercontent.com/78f47a09877ba9d28da1887a93e5c3bc2efb309c1e910eb21135becd2998238a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667"/>
    </a>
    <a>
      <img src="/src/assets/img/coberageLabel.jpg"/>
    </a>
    <a>
      <img src="./src/assets/img/npmLabel.jpg"/>
    </a>


  </div>
</div>

## ✨ 特性

<div >
  <li>🌈 模块化、可迭代性强，耦合度合理、结构清晰、组件与样式分离</li>
  <li>📦 开箱即用的高质量 Vue 组件</li>
  <li>🛡 使用 TypeScript 开发规范性好</li>
  <li>⚙️ 全链路开发和设计工具体系</li>
  <li>🚀 20+ 个高质量组件，覆盖PC端主流场景</li>
  <li>💪 单元测试覆盖率超过 70%，提供稳定性保障</li>
  <li>🍭 支持按需引入和 Tree Shaking</li>
</div>

## 安装
<pre>
  <code >npm i lang-ui </code>
</pre>

## 快速开始
<pre>
  <code>import LangUi from 'lang-ui';</code>
  <code>import 'lang-ui/dist/lib/assets/(请前往node_module/lang-ui/dist/lib/assets/查看css文件名字)';</code>
  <code>const app = createApp(App);</code>
  <code>app.use(LangUi).mount('#app');</code>
</pre>
由于 Vue 3 不再支持 IE11，Lang-UI 也不再支持 IE 浏览器

## 在线文档

<a target="_blank" href="https://langlangmountteam.github.io/lang-ui-docs/">https://langlangmountteam.github.io/lang-ui-docs/</a>

## 在线演示站点
- <a target="_blank" href="https://407zk09371.oicp.vip/">https://407zk09371.oicp.vip/</a>

## 使用仓库相关命令

### 安装依赖
<pre>
  <code>npm install </code>
</pre>

### 启动本地测试项目
<pre>
  <code>npm run dev </code>
</pre>

### 打包组件库
<pre>
  <code>rollup -c </code>
</pre>

### 单元测试
<pre>
  <code>npm run test </code>
</pre>

### 测试覆盖率
<pre>
  <code>pnpm run coverage </code>
</pre>





