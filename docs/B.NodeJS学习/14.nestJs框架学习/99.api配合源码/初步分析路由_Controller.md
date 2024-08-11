---
description: 入口文件
---

使用 `nestjs` 时候入口文件代码

~~~ts
// 导入 NestFactory 模块，它用于创建Nest 应用实例
import { NestFactory } from '@nestjs/core'

// 导入跟模块
import { AppModule } from './app.module'
// 定义一个异步函数，用于创建并且启动 Nest 应用
async function bootstrap() {

	// 使用 NestFactory 创建一个 Nest 应用实例 并传入根模块 AppModule
	// 在底层，NestFactory.create() 方法使用了一个内部的 HTTP 服务器（Express 或 Fastify）来处理传入的请求
	const app = await NestFactory.create(AppModule)
	// NestFactory 它提供了一些静态方法来建立和配置整个应用程序
	// // 设置全局路由前缀
	// app.setGlobalPrefix("api");

	// // 启用 CORS
	// app.enableCors();

	// 使用 app.listen 方法监听 3000 端口
	await app.listen(3000)
}

bootstrap()
~~~

在 `'@nestjs/core'` 包里有一个 `NestFactory` 核心 NestFactory 类。NestFactory 公开了一些允许创建应用实例的静态方法。create() 方法返回一个应用对象，其中参数 `AppModule` 作为参数传递给 `NestFactory.create()`，用于告诉 `NestJS` 应用程序的结构、依赖关系和配置。

在上传的案例仓库 `packages\@nestjs\core\nest-factory.ts`  编写入口

~~~ ts

import { Logger } from './logger'
import { NestApplication } from './nest-application'

// 工厂函数要返回 app 实例对象
import { Logger } from './logger';
// 引入 Logger 模块
import { NestApplication } from './nest-application';
// 引入 NestApplication 模块
export class NestFactory {
// 导出 NestFactory 类
  static async create<T>(module: any): Promise<NestApplication> {
  // 定义一个静态的异步方法 create，接收一个参数 module，返回一个 Promise，Promise 的类型是 NestApplication
    Logger.log('Starting Nest application...', 'NestFactory');
    // 使用 Logger 记录一条信息，表示正在启动 Nest 应用
    const app = new NestApplication(module);
    // 创建一个新的 NestApplication 实例，传入 module 参数
    return app;
    // 返回创建的 NestApplication 实例
  }
}
~~~

`NestApplication` 是应用程序的核心接口，代表了一个已创建并准备就绪的 NestJS 应用实例。通过 `NestFactory.create()` 方法创建的应用程序实例就是 `NestApplication` `类型。NestApplication` 提供了多个方法，用于管理应用程序的 生命周期、配置中间件、处理请求、以及与底层的 HTTP 服务器进行交互。这里可以看一个例子，其实下面例子中 app 就是express 实例（因为使用的是默认形式创建）

~~~js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	// app 就是返回的 类型。NestApplication
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');  // 设置全局路由前缀
  await app.listen(3000);  // 启动应用并监听 3000 端口
}
bootstrap();
~~~

## 编写核心部分 nest-application

在 NestJS 中，`NestApplication` 是应用程序的核心接口，代表了一个已创建并准备就绪的 NestJS 应用实例。通过 `NestFactory.create()` 方法创建的应用程序实例就是 `NestApplication` 类型。`NestApplication` 提供了多个方法，用于管理应用程序的生命周期、配置中间件、处理请求、以及与底层的 HTTP 服务器进行交互。

以下是 `NestApplication` 的主要作用和功能：

1. **应用程序配置**：
   - 通过 `app.setGlobalPrefix(prefix)` 设置全局路由前缀。
   - 通过 `app.useGlobalPipes(pipes)` 设置全局管道。
   - 通过 `app.useGlobalFilters(filters)` 设置全局异常过滤器。
   - 通过 `app.useGlobalGuards(guards)` 设置全局守卫。
   - 通过 `app.useGlobalInterceptors(interceptors)` 设置全局拦截器。

2. **中间件管理**：
   - `NestApplication` 提供了 `app.use()` 方法，可以在应用程序中注册中间件，用于处理请求、响应周期中的各种操作。

3. **启动和关闭应用程序**：
   - `app.listen(port)` 方法用于启动 HTTP 服务器并监听指定的端口，以处理传入的请求。
   - `app.close()` 方法用于优雅地关闭应用程序和释放资源。

4. **与 HTTP 服务器的交互**：
   - 通过 `app.getHttpServer()` 可以获取底层的 HTTP 服务器实例（例如 Express 或 Fastify 实例），从而可以进一步自定义服务器行为。
   - 通过 `app.getHttpAdapter()` 可以获取 HTTP 适配器，用于与不同的底层 HTTP 实现（如 Express 或 Fastify）交互。

5. **生命周期钩子**：
   - 你可以在 `NestApplication` 中实现和使用生命周期钩子方法，例如 `onModuleInit()`、`onModuleDestroy()` 等，以便在模块初始化和销毁时执行特定的逻辑。

6. **热重载支持**：
   - 当结合工具如 Webpack 和 `@nestjs/cli` 使用时，`NestApplication` 可以支持热重载功能，从而在开发过程中无需手动重启应用。


### 关于路由收集 控制器

实现是 express 版本 因此，在 `NestApplication` 一定会创建 express 实例作为对象，其实接下来就是在不停的拼接 express 的实现， 在传入的根 `AppModule` 类其实就是 用于告诉 `express` 应用程序的结构、依赖关系和配置

首先 完成第一部分的 路由映射的收集实现 在这之前要知道关于 `express` 路由定义

~~~ts
// 导入express模块
const express = require('express')

// 创建express实例
const app = express()

// 定义路由 首页
app.get('/', (req, res) => {
	res.send('Hello World!')
})
~~~

在来看 nest 中的控制器 Controller 控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求

~~~ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
~~~

将装饰器的部分进行收集 收集后拼接成express 的形式 即可
~~~ts
// 导入express模块
const express = require('express')

// 创建express实例
const app = express()

// 定义路由 首页
app.get('/cats', (req, res) => {
	// findAll
	res.send('This action returns all cats')
})
~~~

因此可以明确的是 Controller  装饰器用来进行收集，使用一些请求方法装饰器来收集 函数调用的 函数，将他们进行重新组装成express 作为我们的目标
