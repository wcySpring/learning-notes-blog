[TOC]
>[success] # 使用数据库的service.js 编写
~~~
1.先看 下面的express -- 配合数据库章节在看这个案例
2.整个案例的db.js 使用的是下面章节分装的数据库api
~~~
>[danger] ##### 数据库service.js
~~~
const path = require('path');
const fs = require('fs');
const db = require('./db.js');


// 渲染主页面
exports.showIndex = (req,res) =>{
    let sql = 'select * from book';
    db.base(sql,null,(data)=>{
        res.render('index',{list:data})
    });

};

// 跳转添加图书页面
exports.toaddBook = (req,res) =>{
    res.render('addBook');
};

// 处理添加的post
exports.addBook = (req,res) =>{
      let info = req.body;
      let book = {};
      for(let i in info){
          book[i] = info[i];
      }
    let sql = "insert into book set ?";
    db.base(sql,book,(result)=>{
        if(result.affectedRows == 1){
            res.redirect('/');
        }
    })
};


// 跳转编辑图书页面
exports.toEditBook = (req,res) => {
    let id = req.query.id;
    let sql = 'select * from book where id=?';
    let data = [id];
    db.base(sql,data,(result)=>{
            console.log(result,result[0])
            res.render('editBook',result[0]);

    });
};
// 编辑图书更新数据
exports.editBook = (req,res) => {
    let info = req.body;
    let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
    let data = [info.name,info.author,info.category,info.description,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.redirect('/');
        }
    });
};

// 删除图书信息
exports.deleteBook = (req,res) => {
    let id = req.query.id;
    let sql = 'delete from book where id=?';
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.redirect('/');
        }
    });
};

~~~