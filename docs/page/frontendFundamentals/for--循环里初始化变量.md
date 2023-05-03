>[success] # 循环里初始化变量
~~~
1.有时候可能需要循环一个数组或者数组对象，这时候
往往在循环中有一些判断逻辑需要对一些参数进行归类
划分，对这些参数进行清空重赋值状况
~~~
>[danger] ##### 举个例子
~~~
1.下面错误的地方就是，虽然知道是因为每次循环后要重新，
去接收一些新的数据，但是每次循环就会创建一个新的let 对
应声明的初始化变量，所以将这些初始化不要在for 中声明，
直接在for 外面声明一次即可
~~~
* 错误代码
~~~
filtersDatasourceFields(datasourceFieldsList: { __t: 'FORM_NumbericElement'; [key: string]: any }[]) {
        this.dataSourceFieldsList = []
        for (var i = 0; i < datasourceFieldsList.length; i++) {
            // 错误的地方
            let filedTypeMap = null
            let filedTypeName = ''
            let groupRule = ''
            let name = ''
            filedTypeMap = this.filedsTypeMap[datasourceFieldsList[i].__t]
            if (typeof filedTypeMap === 'undefined') continue
            filedTypeName = filedTypeMap.name
            groupRule = filedTypeMap.type
            name = datasourceFieldsList[i].caption ? datasourceFieldsList[i].caption : datasourceFieldsList[i].name
            this.dataSourceFieldsList.push({
                dataSourceId: '', // 数据源id
                dataSourceType: this.fromDataSource, // 数据源类型
                fieldId: datasourceFieldsList[i].eleId, // 表单组件id
                sortType: 'DEFAULT', // 排序（默认排序方式）
                groupRule: groupRule, // 汇总方式（默认维度汇总方式）
                filedTypeName: filedTypeName, //  组件表单字段名称
                name: name, // 组件统称
                type: groupRule, // 类型
            })
        }
    }
~~~
* 正确
~~~
filtersDatasourceFields(datasourceFieldsList: { __t: 'FORM_NumbericElement'; [key: string]: any }[]) {
        // 之声明一次即可
        let filedTypeMap = null
        let filedTypeName = ''
        let groupRule = ''
        let name = ''
        this.dataSourceFieldsList = []
        for (var i = 0; i < datasourceFieldsList.length; i++) {
            filedTypeMap = this.filedsTypeMap[datasourceFieldsList[i].__t]
            if (typeof filedTypeMap === 'undefined') continue
            filedTypeName = filedTypeMap.name
            groupRule = filedTypeMap.type
            name = datasourceFieldsList[i].caption ? datasourceFieldsList[i].caption : datasourceFieldsList[i].name
            this.dataSourceFieldsList.push({
                dataSourceId: '', // 数据源id
                dataSourceType: this.fromDataSource, // 数据源类型
                fieldId: datasourceFieldsList[i].eleId, // 表单组件id
                sortType: 'DEFAULT', // 排序（默认排序方式）
                groupRule: groupRule, // 汇总方式（默认维度汇总方式）
                filedTypeName: filedTypeName, //  组件表单字段名称
                name: name, // 组件统称
                type: groupRule, // 类型
            })
        }
    }
~~~