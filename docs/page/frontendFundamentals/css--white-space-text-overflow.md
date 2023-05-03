>[success] # css -- white-space / text-overflow
* **white-space**用于设置**空白处理和换行规则**
1. **normal**：合并所有连续的空白，允许单词超屏时自动换行,**默认属性**
2. **nowrap**：合并所有连续的空白，不允许单词超屏时自动换行
3. **pre**：阻止合并所有连续的空白，不允许单词超屏时自动换行
4. **pre-wrap**：阻止合并所有连续的空白，允许单词超屏时自动换行
5. **pre-line**：合并所有连续的空白（但保留换行），允许单词超屏时自动换行

* text-overflow通常用来设置文字溢出时的行为
1. **clip**：溢出的内容直接裁剪掉（字符可能会显示不完整）
2. **ellipsis**：溢出那行的结尾处用省略号表示
3. **text-overflow** 生效的前提是overflow不为visible