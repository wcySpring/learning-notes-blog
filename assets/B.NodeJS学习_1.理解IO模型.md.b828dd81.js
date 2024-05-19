import{_ as t,o,c as l,V as d}from"./chunks/framework.96db2af4.js";const h=JSON.parse('{"title":"","description":"了解 I/O 模型基本概念","frontmatter":{"description":"了解 I/O 模型基本概念","tags":["node","I/O"]},"headers":[],"relativePath":"B.NodeJS学习/1.理解IO模型.md","filePath":"B.NodeJS学习/1.理解IO模型.md","lastUpdated":1716106198000}'),i={name:"B.NodeJS学习/1.理解IO模型.md"},e=d('<p><strong>I/O（输入/输出）是计算机系统的核心组成部分之一</strong>。它是计算机与外部环境进行交互的主要方式，包括与用户的交互（如键盘输入、屏幕显示等），与硬件设备的交互（如读写磁盘、网络通信等），以及程序之间的交互（如文件操作、进程通信等）。甚至输入文字、保存文件、播放音乐等等，都需要涉及到计算机和外部设备之间的交互等等</p><p><strong>操作系统</strong>是管理和控制计算机硬件和软件资源的程序，<strong>它负责管理和调度I/O操作</strong>。例如，当一个程序需要读取磁盘上的一个文件时，它会发出一个I/O请求，这个请求会被操作系统接收并处理，操作系统会调度磁盘，将文件的内容读取到内存中，然后通知程序可以进行后续的操作。</p><p>这个过程具体来看，将数据从程序的内存中写入到<strong>磁盘（外部设备）</strong> 文件中，将数据从<strong>磁盘（外部设备）<strong>文件读取到程序的</strong>内存中（外部设备）</strong> 文件系统是实现文件IO操作的一种机制，它将磁盘上的数据组织成文件和目录的形式，使得程序可以通过文件名和路径来访问这些数据。操作系统提供了一些API，使得程序可以进行文件IO操作，如文件打开和关闭、文件读取和写入、文件指针操作和文件属性查询等。程序通常使用文件输入流和文件输出流来进行文件读写操作，它们是操作系统提供的高级API，封装了底层的IO操作，使得程序员可以更方便地进行文件读写操作</p><p>操作系统提供了一些常用的文件IO操作API（在操作系统中提供的一组用于读取和写入文件的标准函数，这些函数定义了一组通用的接口，可以被多个应用程序和编程语言所使用），以下是其中一些常见的API：</p><ol><li><p>open()：打开文件，返回文件句柄。可以指定文件名和打开模式（只读、只写、追加等）。</p></li><li><p>close()：关闭文件。</p></li><li><p>read()：从文件中读取数据。可以指定读取的字节数。</p></li><li><p>write()：向文件中写入数据。可以指定要写入的数据和字节数。</p></li><li><p>lseek()：移动文件指针。可以指定要移动的偏移量和起始位置。</p></li><li><p>feof()：检查文件是否到达文件尾。</p></li><li><p>ferror()：检查文件是否出错。</p></li><li><p>rewind()：将文件指针指向文件开始位置。</p></li><li><p>fgets()：从文件中读取一行数据。可以指定读取的最大字符数和文件句柄。</p></li><li><p>fputs()：将字符串写入文件。可以指定要写入的字符串和文件句柄。</p></li><li><p>fprintf()：将格式化的数据写入文件。可以指定要写入的格式化字符串、参数和文件句柄。</p></li></ol><p>在实际开发中这些方法在不同编程语言中的调用方式和参数可能会有所不同但编程语言提供的操作I/O事件方法具备作用都是类似，正是这样<strong>编程语言提供了一些工具和机制，帮助程序捕捉和处理 I/O 事件，使得程序能够更好地处理和响应这些事件，从而提供更好的用户体验或实现特定的功能</strong></p><p>综合来说 I/O模型是计算机系统与外部设备之间进行数据交互的过程，包括读取和写入数据。编程语言提供了一些API，帮助程序捕捉和处理I/O事件，使得程序能够更好地处理和响应这些事件，从而提供更好的用户体验或实现特定的功能。<strong>I/O 就是指内存与外部设备之间的交互（数据拷贝）我们所说的IO操作不只是磁盘IO，网络IO，也包括内存IO。只要是读写，都算是IO。</strong>。</p><h2 id="io-模型的种类" tabindex="-1">io 模型的种类 <a class="header-anchor" href="#io-模型的种类" aria-label="Permalink to &quot;io 模型的种类&quot;">​</a></h2><table><thead><tr><th>I/O 模型</th><th>概念和原理</th></tr></thead><tbody><tr><td>阻塞 I/O (Blocking I/O)</td><td><strong>概念</strong>：调用 I/O 操作时，线程会阻塞，直到 I/O 操作完成为止。 <strong>原理</strong>：线程进入等待状态，操作系统将控制权交给 I/O 子系统，直到 I/O 操作完成后再恢复线程运行。</td></tr><tr><td>非阻塞 I/O (Non-blocking I/O)</td><td><strong>概念</strong>：调用 I/O 操作时，线程不会阻塞，可以立即返回，并继续处理其他任务。 <strong>原理</strong>：通过设置非阻塞标志，I/O 操作如果不能立即完成会返回一个错误，而不会让线程进入等待状态。</td></tr><tr><td>多路复用 I/O (I/O Multiplexing)</td><td><strong>概念</strong>：使用单个线程监视多个文件描述符，以确定哪些文件描述符可以进行 I/O 操作。 <strong>原理</strong>：通过 <code>select</code>、<code>poll</code> 或 <code>epoll</code> 等系统调用监视多个文件描述符，一旦其中的某些文件描述符变为就绪状态，就进行 I/O 操作。</td></tr><tr><td>信号驱动 I/O (Signal-driven I/O)</td><td><strong>概念</strong>：使用信号机制通知应用程序某个文件描述符可以进行 I/O 操作。 <strong>原理</strong>：设置文件描述符的信号驱动 I/O 模式，并注册信号处理函数，当 I/O 事件发生时，操作系统向应用程序发送信号，调用信号处理函数处理 I/O 事件。</td></tr><tr><td>异步 I/O (Asynchronous I/O)</td><td><strong>概念</strong>：I/O 操作由操作系统异步完成，操作系统在 I/O 操作完成时通知应用程序。 <strong>原理</strong>：应用程序发起 I/O 请求后立即返回，操作系统异步处理 I/O 请求，并在完成后通过回调或通知机制告知应用程序。</td></tr><tr><td>事件驱动 I/O (Event-driven I/O)</td><td><strong>概念</strong>：基于事件循环的编程模型，使用事件触发机制处理 I/O 事件。 <strong>原理</strong>：应用程序注册 I/O 事件处理器，当事件发生时，事件循环调度相应的处理器来处理 I/O 事件。</td></tr><tr><td>直接 I/O (Direct I/O)</td><td><strong>概念</strong>：直接与硬件设备进行 I/O 操作，绕过操作系统的缓存。 <strong>原理</strong>：通过特殊的系统调用或设备接口，直接访问硬件设备，进行数据传输，不经过操作系统的缓存区。</td></tr><tr><td>内存映射 I/O (Memory-mapped I/O)</td><td><strong>概念</strong>：将文件或设备映射到应用程序的地址空间中，允许应用程序像访问内存一样访问文件或设备。 <strong>原理</strong>：通过 <code>mmap</code> 系统调用将文件或设备映射到进程的虚拟地址空间，读取或写入文件时直接操作映射的内存区域。</td></tr></tbody></table><ol><li><p><strong>阻塞 I/O</strong>：</p><ul><li>适用场景：简单的同步操作，不需要处理高并发。</li><li>优点：编程简单，逻辑清晰。</li><li>缺点：效率低下，资源浪费。</li></ul></li><li><p><strong>非阻塞 I/O</strong>：</p><ul><li>适用场景：需要提高 I/O 操作的效率，减少等待时间。</li><li>优点：线程不需要等待，可以做其他事情。</li><li>缺点：需要反复检查 I/O 操作状态，编程复杂度增加。</li></ul></li><li><p><strong>多路复用 I/O</strong>：</p><ul><li>适用场景：需要处理多个 I/O 事件，尤其是高并发连接。</li><li>优点：单线程可以监视多个 I/O 操作，提高资源利用率。</li><li>缺点：编程复杂度增加，<code>select</code> 和 <code>poll</code> 在大数量描述符下效率较低。</li></ul></li><li><p><strong>信号驱动 I/O</strong>：</p><ul><li>适用场景：需要异步处理 I/O 事件。</li><li>优点：应用程序可以继续执行其他操作，直到接收到 I/O 信号。</li><li>缺点：信号处理机制复杂，编程难度大。</li></ul></li><li><p><strong>异步 I/O</strong>：</p><ul><li>适用场景：需要高性能和高并发的 I/O 操作。</li><li>优点：真正的异步处理，不需要等待 I/O 操作完成。</li><li>缺点：依赖操作系统支持，编程复杂度高。</li></ul></li><li><p><strong>事件驱动 I/O</strong>：</p><ul><li>适用场景：Web 服务器等需要处理大量并发连接的应用。</li><li>优点：高效处理并发请求，资源利用率高。</li><li>缺点：事件驱动编程模型复杂，调试困难。</li></ul></li><li><p><strong>直接 I/O</strong>：</p><ul><li>适用场景：需要直接访问硬件设备的高性能应用。</li><li>优点：提高 I/O 操作的性能。</li><li>缺点：编程复杂度高，不适用于所有类型的设备。</li></ul></li><li><p><strong>内存映射 I/O</strong>：</p><ul><li>适用场景：需要高效读取或写入大文件的数据密集型应用。</li><li>优点：提高文件 I/O 的效率。</li><li>缺点：内存使用量大，可能导致内存不足</li></ul></li></ol><h2 id="在不同编编程语言" tabindex="-1">在不同编编程语言 <a class="header-anchor" href="#在不同编编程语言" aria-label="Permalink to &quot;在不同编编程语言&quot;">​</a></h2><table><thead><tr><th>I/O 模型</th><th>描述</th><th>相关编程语言</th></tr></thead><tbody><tr><td>阻塞 I/O (Blocking I/O)</td><td>线程会阻塞直到 I/O 操作完成。每个请求会占用一个线程。</td><td>C、Java、Python</td></tr><tr><td>非阻塞 I/O (Non-blocking I/O)</td><td>线程在等待 I/O 操作时不会阻塞，可以继续处理其他请求。</td><td>C、Java、Python、Node.js</td></tr><tr><td>多路复用 I/O (I/O Multiplexing)</td><td>使用 <code>select</code>、<code>poll</code> 或 <code>epoll</code> 等系统调用同时监视多个 I/O 事件。</td><td>C、Python、Java</td></tr><tr><td>信号驱动 I/O (Signal-driven I/O)</td><td>使用信号处理机制通知程序 I/O 事件的发生，程序可以继续执行其他操作。</td><td>C、Python</td></tr><tr><td>异步 I/O (Asynchronous I/O)</td><td>I/O 操作由操作系统完成，完成后通过回调通知程序，程序无需等待 I/O 操作完成。</td><td>C、Java、Python、Node.js</td></tr><tr><td>事件驱动 I/O (Event-driven I/O)</td><td>使用事件循环机制处理 I/O 事件，适合处理大量并发连接。</td><td>Node.js、Python、JavaScript</td></tr><tr><td>直接 I/O (Direct I/O)</td><td>直接访问硬件设备的 I/O 操作，绕过操作系统缓存。</td><td>C、C++</td></tr><tr><td>内存映射 I/O (Memory-mapped I/O)</td><td>将文件或设备映射到内存，允许程序直接访问文件或设备的内容。</td><td>C、C++、Python</td></tr></tbody></table><h3 id="具体编程语言中的-i-o-模型示例" tabindex="-1">具体编程语言中的 I/O 模型示例： <a class="header-anchor" href="#具体编程语言中的-i-o-模型示例" aria-label="Permalink to &quot;具体编程语言中的 I/O 模型示例：&quot;">​</a></h3><ol><li><p><strong>C</strong>:</p><ul><li>阻塞 I/O：标准文件 I/O 函数，如 <code>fread</code> 和 <code>fwrite</code>。</li><li>非阻塞 I/O：使用 <code>fcntl</code> 设置文件描述符为非阻塞模式。</li><li>多路复用 I/O：使用 <code>select</code>、<code>poll</code> 或 <code>epoll</code>。</li><li>信号驱动 I/O：使用 <code>sigaction</code> 和 <code>sigqueue</code>。</li></ul></li><li><p><strong>Java</strong>:</p><ul><li>阻塞 I/O：使用传统的 I/O 类，如 <code>FileInputStream</code> 和 <code>FileOutputStream</code>。</li><li>非阻塞 I/O：使用 <code>java.nio</code> 包中的类，如 <code>SocketChannel</code>。</li><li>异步 I/O：使用 <code>java.nio.channels.AsynchronousSocketChannel</code>。</li></ul></li><li><p><strong>Python</strong>:</p><ul><li>阻塞 I/O：使用内置的 I/O 函数，如 <code>open</code> 和 <code>read</code>。</li><li>非阻塞 I/O：使用 <code>os.set_blocking</code> 或 <code>socket.setblocking</code>。</li><li>多路复用 I/O：使用 <code>select</code> 模块。</li><li>异步 I/O：使用 <code>asyncio</code> 模块。</li></ul></li><li><p><strong>Node.js</strong>:</p><ul><li>非阻塞 I/O 和事件驱动 I/O：Node.js 的核心 I/O 操作都是非阻塞的，并使用事件循环机制处理并发请求。</li><li>异步 I/O：使用回调、Promise 或 <code>async/await</code> 进行异步编程。</li></ul></li></ol>',14),r=[e];function n(s,I,O,c,a,p){return o(),l("div",null,r)}const u=t(i,[["render",n]]);export{h as __pageData,u as default};
