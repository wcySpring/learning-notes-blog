import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ab95ac3d.js";const p="/learning-notes-blog/images/59a7340e51861e59614ebb4e77a5edb350c47415cec8331ad0baf39cacf8b046.png",o="/learning-notes-blog/images/3175face53788113883d382bf6354fbc4e175d806c65c0fdc98326d1a1802d93.png",e="/learning-notes-blog/images/0e8f7b30b63456cc305d6b9b76839e282117040a62c267357e9082b25f13c4d2.png",r="/learning-notes-blog/images/8d93c077b1a43b015610dad65f3baf0ac293ab77df01e3f058bacc8ce7cfbee7.png",m=JSON.parse('{"title":"","description":"js 程序执行的基础概念 - js 代码执行过程","frontmatter":{"description":"js 程序执行的基础概念 - js 代码执行过程"},"headers":[],"relativePath":"A.前端知识整理/3.浏览器和JS引擎执行过程/1.Js引擎基础概念了解.md","filePath":"A.前端知识整理/3.浏览器和JS引擎执行过程/1.Js引擎基础概念了解.md","lastUpdated":1687659923000}'),t={name:"A.前端知识整理/3.浏览器和JS引擎执行过程/1.Js引擎基础概念了解.md"},c=l('<ol><li>js 是通过浏览器的js引擎进行执行，现阶段最流行的引擎就是V8引擎</li><li>V8是用C ++编写的Google开源高性能JavaScript和<a href="https://www.jianshu.com/p/e4d002780cf8" target="_blank" rel="noreferrer">WebAssembly</a>(WASM不是一种编程语言,它是一种将用一种编程语言编写的代码转换为浏览器可理解的机器代码的技术)引擎，它用于Chrome和Node.js等</li><li>它实现ECMAScript和WebAssembly，可以在Windows 7或更高版本，macOS 10.12+和使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行</li><li>V8可以独立运行，也可以嵌入到任何C ++应用程序。最后可以将字节码编译为CPU可以直接执行的机器码</li></ol><p><img src="'+p+'" alt="图 1"></p><h2 id="了解一些-v8-模块" tabindex="-1">了解一些 V8 模块 <a class="header-anchor" href="#了解一些-v8-模块" aria-label="Permalink to &quot;了解一些 V8 模块&quot;">​</a></h2><ol><li><strong>Parse</strong>模块会将JavaScript代码转换成<strong>AST</strong>（抽象语法树），这是因为解释器并<strong>不直接认识JavaScript代码</strong>；如果函数没有被调用，那么是不会被转换成AST的；</li></ol><ul><li><strong>参考</strong>：Parse的V8官方文档：<a href="https://v8.dev/blog/scanner" target="_blank" rel="noreferrer">https://v8.dev/blog/scanner</a></li></ul><ol start="2"><li><strong>Ignition</strong>是一个解释器，会将<strong>AST转换成ByteCode</strong>（字节码），同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）；如果函数只调用一次，Ignition会解释执行ByteCode；<strong>在转换一层为字节码的好处</strong>JS运行所处的环境是不一定的，可能是windows或Linux或iOS，不同的操作系统其CPU所能识别的机器指令也是不一样的。字节码是一种中间码，本身就有跨平台的特性，然后V8引擎再根据当前所处的环境将字节码编译成对应的机器指令给当前环境的CPU执行。</li></ol><ul><li><strong>参考</strong>： Ignition的V8官方文档：<a href="https://v8.dev/blog/ignition-interpreter" target="_blank" rel="noreferrer">https://v8.dev/blog/ignition-interpreter</a></li></ul><ol start="3"><li><strong>TurboFan是一个编译器</strong>，可以将字节码编译为<strong>CPU可以直接执行的机器码</strong> 如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过TurboFan转换成优化的机器码，提高代码的执行性能；但是，机器码实际上也会被还原为ByteCode，这是因为如果后续执行函数的过程中，类型发生了变化（比如sum函数原来执行的是number类型，后来执行变成了string类型），之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码；如果在编写代码时给函数传递固定类型的参数，是可以从一定程度上优化我们代码执行效率的，所以TypeScript编译出来的JavaScript代码的性能是比较好的；</li></ol><ul><li><strong>参考</strong>： TurboFan的V8官方文档：<a href="https://v8.dev/blog/turbofan-jit" target="_blank" rel="noreferrer">https://v8.dev/blog/turbofan-jit</a></li></ul><p><img src="'+o+`" alt="图 2"></p><h2 id="js-执行过程" tabindex="-1">js 执行过程 <a class="header-anchor" href="#js-执行过程" aria-label="Permalink to &quot;js 执行过程&quot;">​</a></h2><p><strong>为什么需要引擎</strong> 原因JavaScript是一门高级编程语言，所有的高级编程语言都是需要转换成最终的机器指令来执行的；其<strong>底层最终都是交给CPU执行，但是CPU只认识自己的指令集，也就是机器语言</strong>，而JavaScript引擎主要功能就是帮助我们将JavaScript代码翻译CPU所能认识指令，最终被CPU执行，有了引擎的转换所以js 可以一套代码做到可以在各个平台上运行</p><p>V8 引擎为例，在 V8 引擎中 JavaScript 代码的运行过程主要分成三个阶，这三个阶段会对代码进行 <strong>词法分析、生成抽象语法树、生成字节码、创建执行上下文、解释执行字节码</strong>等操作</p><ol><li><p><strong>语法分析阶段</strong>：在这个阶段，V8 引擎会使用<strong>词法分析器</strong>（Lexer）对 JavaScript 代码进行扫描，将代码分解成一个个的词法单元（Token）。然后，通过<strong>语法分析器</strong>（Parser）将这些词法单元组合成抽象语法树（Abstract Syntax Tree，AST）。抽象语法树是一种树形结构，用于表示代码的语法结构。如果在这个过程中发现语法错误（SyntaxError）会在控制台抛出异常，V8 引擎会抛出异常并终止执行。</p></li><li><p><strong>编译阶段</strong>：在这个阶段，V8 引擎会对抽象语法树进行处理，生成字节码（Bytecode）。字节码是一种介于源代码和机器码之间的中间代码，可以被快速解释执行。同时，V8 引擎会创建执行上下文（Execution Context），每当代码进入一个不同的运行环境时，V8 引擎都会创建一个新的执行上下文。 ，包括以下几个部分：</p><ul><li><strong>变量对象（Variable Object）</strong> ：用于存储变量、函数声明和函数参数。</li><li><strong>作用域链（Scope Chain）</strong> ：由当前执行上下文的变量对象和所有父级执行上下文的变量对象组成，用于解析变量和函数的访问。</li><li><strong>this 指向</strong> ：根据函数调用方式的不同，确定 this 的指向。</li></ul></li><li><p><strong>执行阶段</strong>：在这个阶段，V8 引擎会将编译阶段中创建的执行上下文压入调用栈。调用栈是一个后进先出（LIFO）的数据结构，用于存储执行上下文。当前正在运行的执行上下文位于调用栈的顶部。接着，V8 引擎会逐行解释执行字节码。在执行过程中，引擎会根据作用域链来解析变量和函数的访问，处理变量赋值、函数调用等操作。当代码执行结束后，V8 引擎会将执行上下文从调用栈中弹出。</p></li></ol><h3 id="模拟语法阶段" tabindex="-1">模拟语法阶段 <a class="header-anchor" href="#模拟语法阶段" aria-label="Permalink to &quot;模拟语法阶段&quot;">​</a></h3><p>例通过 espree JavaScript 解析器 模拟语法阶段</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">espree</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;espree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 词法分析</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">tokens</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">espree</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">tokenize</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;function a(){}&#39;</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">ecmaVersion</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">tokens</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// ast 语法树生成</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ast</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">espree</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;function a(){}&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ast</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><strong>词法分析</strong>，它读取字符流（我们的代码）并使用定义的规则将它们组合成标记（token）此外，它将删除空格字符，注释等。最后，整个代码字符串将被拆分为一个标记列表。（一个数组，里面包含很多对象）</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">[</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">Token</span><span style="color:#ABB2BF;"> { </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;Keyword&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;function&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">start</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">end</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">Token</span><span style="color:#ABB2BF;"> { </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;Identifier&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;a&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">start</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">end</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">Token</span><span style="color:#ABB2BF;"> { </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;Punctuator&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;(&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">start</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">end</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">Token</span><span style="color:#ABB2BF;"> { </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;Punctuator&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;)&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">start</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">end</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">Token</span><span style="color:#ABB2BF;"> { </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;Punctuator&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">{</span><span style="color:#FFFFFF;">&#39;,</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">start</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">end</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">13</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">Token</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">{</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;Punctuator&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">}</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">start:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">13</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">end:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">14</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><strong>语法分析</strong>:将在词法分析后获取一个简单的标记列表，并语法分析阶段会把一个令牌流转换成抽象语法树（AST） 的形式。 验证语言语法并抛出语法错误（如果发生这种情况)</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;type&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;Program&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;start&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;end&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">14</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;body&quot;</span><span style="color:#ABB2BF;">:[</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;type&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;FunctionDeclaration&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;start&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;end&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">14</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;id&quot;</span><span style="color:#ABB2BF;">:{</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;type&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;Identifier&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;start&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;end&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;name&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;a&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;params&quot;</span><span style="color:#ABB2BF;">:[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            ],</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;body&quot;</span><span style="color:#ABB2BF;">:{</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;type&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;BlockStatement&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;start&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;end&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">14</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E06C75;">&quot;body&quot;</span><span style="color:#ABB2BF;">:[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">                ]</span></span>
<span class="line"><span style="color:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;expression&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">&quot;generator&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;sourceType&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;script&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li>如图 对<code> const name = &#39;curry&#39;</code> 的ast 语法树 可以使用 <a href="https://astexplorer.net/" target="_blank" rel="noreferrer">AST Explorer</a> 查看 <img src="`+e+'" alt="图 3"></li></ul><h3 id="引擎总结" tabindex="-1">引擎总结 <a class="header-anchor" href="#引擎总结" aria-label="Permalink to &quot;引擎总结&quot;">​</a></h3><ol><li><p>首先，浏览器的Blink内核会将JavaScript源代码交给V8引擎。V8引擎是谷歌开发的JavaScript引擎，负责处理和执行JavaScript代码。</p></li><li><p>接着，Stream（流）会获取到JavaScript源代码，并对其进行编码转换，以便后续的处理过程。</p></li><li><p>然后，Scanner（扫描器）会进行词法分析，将代码拆分成一个个有意义的词法单元，称为tokens。这就像是把一段话拆分成一个个单词。</p></li><li><p>tokens会经过语法分析，转换成AST（抽象语法树）。这个过程包括两个阶段：Parser（解析器）和PreParser（预解析器）。</p><ul><li>Parser：负责将tokens直接转换成AST树，这是一个结构化的表示，用于表示代码的语法结构。</li><li>PreParser：负责预解析。这个阶段是为了提高性能。因为JavaScript代码并不是一开始就全部执行，所以V8引擎采用了Lazy Parsing（延迟解析）方案，对不必要的函数代码进行预解析。这意味着先解析急需执行的代码内容，而对函数的全量解析会在函数被调用时进行。</li></ul></li><li><p>生成AST后，Ignition（点火器）会将AST转换成字节码，然后再转换成机器码。最后，代码进入执行过程，浏览器会根据机器码执行相应的操作。 <img src="'+r+'" alt="图 2"></p></li></ol><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><p><a href="https://javascript.ruanyifeng.com/advanced/interpreter.html" target="_blank" rel="noreferrer">JavaScript解释器</a></p><p><a href="https://juejin.cn/post/6844903650670673933#heading-2" target="_blank" rel="noreferrer">前端进阶之 JS 抽象语法树</a></p><p><a href="https://jobbym.github.io/2018/12/12/%E4%B8%80%E6%97%A5%E4%B8%80%E7%BB%83-JS-AST%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91/" target="_blank" rel="noreferrer">一日一练-JS AST抽象语法树</a></p><p><a href="https://juejin.cn/post/6844903788629721096" target="_blank" rel="noreferrer">JS引擎线程的执行过程的三个阶段</a></p>',29),B=[c];function F(y,i,A,u,b,d){return n(),a("div",null,B)}const C=s(t,[["render",F]]);export{m as __pageData,C as default};
