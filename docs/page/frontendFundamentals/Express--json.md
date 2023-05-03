>[success] # json
~~~
1.想通过json 格式 传输数据 直接使用'res.json'
~~~
>[success] # url
* 动态url
~~~
router.get('/books/book/:id',service.getBookById);
~~~
* 获取动态url 值
~~~
let id = req.params.id;
~~~
~~~
exports.getBookById = (req,res) => {
    let id = req.params.id;
    let sql = 'select * from book where id=?';
    let data = [id];
    db.base(sql,data,(result)=>{
        res.json(result[0]);
    });
};
~~~