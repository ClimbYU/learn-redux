## 为什么要用redux

react是一个UI层的库对于组件之间的状态管理一般通过props的方式进行管理，对于这种方式如果组件嵌套少的情况下问题不大，但是一旦遇到多级组件嵌套或者跨组件之间通信时就会相当的繁琐，而且
对于一些全局状态的管理也不是特别方便。

## react的context特性  

某个组件只要往自己的 context 里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。一个组件的 context 只有它的子组件能够访问，它的父组件是不能访问到的，你可以理解每个组件的 context 就是瀑布的源头，只能往下流不能往上飞。context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。但是这种机制对于前端应用状态管理来说是很有帮助的，因为毕竟很多状态都会在组件之间进行共享，context 会给我们带来很大的方便。一些第三方的前端应用状态管理的库（例如 Redux）就是充分地利用了这种机制给我们提供便利的状态管理服务。但我们一般不需要手动写 context，也不要用它，只需要用好这些第三方的应用状态管理库就行了。

## redux [中文文档]（https://cn.redux.js.org/）

![Image text](https://github.com/ClimbYU/learn-redux/blob/master/readme-images/redux.jpg)

### 三大原则

#### 单一数据源：
整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
#### State 是只读的
唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
#### 使用纯函数来执行修改
为了描述 action 如何改变 state tree ，你需要编写 reducers。

### 概念

#### 关于Action
action是store数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。

#### 关于reducer
Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
修改传入参数；
执行有副作用的操作，如 API 请求和路由跳转；
调用非纯函数，如 Date.now() 或 Math.random()。

#### 关于store
Store 就是把action与reducer联系到一起的对象。Store 有以下职责：

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。

#### 与react配合使用
这里需要强调一下：Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。
两个重要api：
Provider：用于提供全局的store
Connect：将页面组件与redux相结合

## Redux与React-redux源码那些事 可以参考本仓库min-redux文件夹

### redux的createStore 
createStore采用的是观察者模式来实现的。它提供了三个方法：
getState:用于获取全局的state
subscribe：用于订阅事件
dispatch：用于出发事件
###  redux的applyMiddleware
applyMiddleware的存在使得redux使用中间件成为可能。applyMiddleware可以将原有的state经过中间间的修饰后返回新的state
![Image text](https://github.com/ClimbYU/learn-redux/blob/master/readme-images/applyMiddleware.jpg)
### redux的combineReducers
combineReducers的作用是可以将一系列的reduxer整合成一个reducer
### React-redux
react-redux实际就是将react的context进行了封装，使的用户改变context的途径只有action这一种，增强了应用的安全性及可追踪性。


