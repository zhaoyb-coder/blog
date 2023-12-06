(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{504:function(t,e,a){"use strict";a.r(e);var s=a(30),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql锁-技术分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁-技术分析"}},[t._v("#")]),t._v(" Mysql锁-技术分析")]),t._v(" "),a("p",[t._v("本文所有的分析都是基于Innodb存储引擎，对于经常听说的"),a("code",[t._v("共享锁、排它锁、记录锁、间隙锁、临键锁、意向锁")]),t._v("进行详细的解释和演练展示（Mysql8.0版本）")]),t._v(" "),a("blockquote",[a("p",[t._v("关于锁：")]),t._v(" "),a("p",[t._v("锁都是基于索引去找到数据记录再加锁的，而索引的规则是：通过其它索引找到主键索引，所以数据表如果没有索引，那么做更新等操作会进行锁表；如果通过主键或者唯一索引进行加锁，只会锁具体的行（也就是记录锁），如果是非唯一索引，SQL优化器会根据数据分布自动选择记录锁或者临键锁")])]),t._v(" "),a("h2",{attrs:{id:"_1、共享锁和排它锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、共享锁和排它锁"}},[t._v("#")]),t._v(" 1、共享锁和排它锁")]),t._v(" "),a("p",[t._v("共享锁(Shared Lock)又被称之为"),a("code",[t._v("读锁")]),t._v("、"),a("code",[t._v("S锁")]),t._v("，当前数据被某个事务获取了共享锁之后，还可以被其它事务获取共享锁，但是不能被其它事务获取排它锁")]),t._v(" "),a("p",[t._v("排它锁（exclusive Lock)又被称之为"),a("code",[t._v("写锁")]),t._v("、"),a("code",[t._v("X锁")]),t._v("，当前数据被某个事务获取了排它锁之后，不可以被其它事务获取排它锁，也不能被其它事务获取共享锁")]),t._v(" "),a("p",[t._v("默认Select操作是不加锁的，更新、增加、删除操作会自动加入排它锁")]),t._v(" "),a("p",[t._v("也可以使用关键字强制为Select操作增加共享锁和排它锁（"),a("code",[t._v("不推荐")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 共享锁 lock in share mode 或者 for share")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 排它锁 for update")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("演练展示：")]),t._v(" "),a("p",[t._v("共享锁展示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206130429579.png",alt:"image-20231206130429579"}})]),t._v(" "),a("p",[t._v("排它锁展示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206130638934.png",alt:"image-20231206130638934"}})]),t._v(" "),a("h2",{attrs:{id:"_2、意向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、意向锁"}},[t._v("#")]),t._v(" 2、意向锁")]),t._v(" "),a("p",[t._v("Mysql的意向锁分为意向共享锁（Intention Shared Lock，IS）、意向排它锁（Intention Exclusive, IX）")]),t._v(" "),a("ul",[a("li",[t._v("作用范围：表级别的锁，用于表示事务将要在这个表的某个部分设置共享或者排它锁")]),t._v(" "),a("li",[t._v("阻塞情况：意向锁通常不会导致实际的锁定，而是用于表明事务的意向")])]),t._v(" "),a("p",[t._v("意向锁的引入主要是为了在表级别和行级别提供更大的并发性，允许多个事务在不冲突的情况下，同时操作数据库。"),a("code",[t._v("这些意向锁不是直接由用户请求的，而是Mysql自动管理的")]),t._v("用于确保多个事务同时进行时，它们之间的锁不会相互冲突。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置意向共享锁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置意向排它锁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WRITE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("注意：事务提交只会自动释放行级锁，不会自动释放表级锁，这是因为行级锁是在事务内部管理的，而表级锁可能会跨越事务。所以，如果有表级锁的情况，必须在适当的时候执行"),a("code",[t._v("UNLOCK TABLES;")]),t._v("进行表级锁的释放")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("共享锁（S）、排他锁（X）、意向共享锁（IS）、意向排他锁（IX）的兼容关系")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IS")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IX")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("√")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("√")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("×")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("IS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("√")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("√")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("IX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")])])])]),t._v(" "),a("p",[t._v("演练展示：")]),t._v(" "),a("p",[t._v("意向共享锁（IS）不兼容 意向排他锁（IX）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206135835532.png",alt:"image-20231206135835532"}})]),t._v(" "),a("h2",{attrs:{id:"_3、记录锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、记录锁"}},[t._v("#")]),t._v(" 3、记录锁")]),t._v(" "),a("blockquote",[a("p",[t._v("记录锁是一个锁的概念，是一种锁定机制，并不是真是存在的某一类锁")]),t._v(" "),a("p",[t._v("记录锁分为共享锁（Shared Lock）和排他锁（Exclusive Lock）")])]),t._v(" "),a("p",[t._v("前置条件：")]),t._v(" "),a("p",[t._v("数据表t_test，ID主键索引，name唯一索引，age普通索引，city无索引")]),t._v(" "),a("h3",{attrs:{id:"_3-1、无索引更新-锁表场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、无索引更新-锁表场景"}},[t._v("#")]),t._v(" 3.1、无索引更新-锁表场景")]),t._v(" "),a("p",[t._v("事务2以city为条件进行加排它锁，但是city没有索引，导致事务2锁表")]),t._v(" "),a("p",[t._v("事务1以id=3为条件获取共享锁，因为事务2锁了整个表，导致等待")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206144538583.png",alt:"image-20231206144538583"}})]),t._v(" "),a("h3",{attrs:{id:"_3-2、有索引更新-锁固定行场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、有索引更新-锁固定行场景"}},[t._v("#")]),t._v(" 3.2、有索引更新-锁固定行场景")]),t._v(" "),a("p",[t._v("事务2通过age=20的索引找到主键索引2,3两条数据，进行记录锁（排它锁）")]),t._v(" "),a("p",[t._v("事务1通过主键id=6设置记录锁（排它锁）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206150202945.png",alt:"image-20231206150202945"}})]),t._v(" "),a("h3",{attrs:{id:"_3-3、类型错误-导致索引失效锁表场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、类型错误-导致索引失效锁表场景"}},[t._v("#")]),t._v(" 3.3、类型错误-导致索引失效锁表场景")]),t._v(" "),a("p",[t._v("id字段设置的类型是varchar，但是查询的时候使用id=1进行查询，导致数据类型不一致，索引失效，最终导致锁表，所以事务2再进行id = '6'的加锁时导致等待。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206150440330.png",alt:"image-20231206150440330"}})]),t._v(" "),a("h2",{attrs:{id:"_4、间隙锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、间隙锁"}},[t._v("#")]),t._v(" 4、间隙锁")]),t._v(" "),a("blockquote",[a("p",[t._v("间隙锁用于锁定一定范围内键之间的间隙，而不是具体的记录。")]),t._v(" "),a("p",[t._v("间隙锁的目的是为了防止并发事务插入新的键值，从而确保事务之间的一致性")])]),t._v(" "),a("p",[t._v("间隙锁的机制是为了解决幻读的问题，通过使用间隙锁，可以确保在一个事务中的查询操作所涉及的键范围内不会发生插入新记录的情况。如果操作的数据跨多个范围，就是加多个区域的间隙锁("),a("code",[t._v("左开右闭")]),t._v("的区间)")]),t._v(" "),a("p",[t._v("举例：（"),a("code",[t._v("RR隔离级别下")]),t._v("）")]),t._v(" "),a("p",[t._v("假如我们的数据表中存在id=5、10、20、25、30这五条数据")]),t._v(" "),a("ul",[a("li",[t._v("查询where id > 7 for update;那**"),a("code",[t._v("锁住的数据范围就是5到正无穷大（5，+∞]，是以5开始的，并不是7开始，因为数据库中并没有id=7的数据")]),t._v("**，另一个事务就无法插入id=6的数据")]),t._v(" "),a("li",[t._v("查询where id > 7 and id < 23,那锁住的区间就是(5,10]、(10,20]、(20,25],也就是说5-25之间的所有数据都不能插入")]),t._v(" "),a("li",[t._v("查询 where id = 7,因为id=7的数据不存在，锁住的也是一个最近的区间(5,10]")])]),t._v(" "),a("h3",{attrs:{id:"_4-1、where-id-7-情况展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、where-id-7-情况展示"}},[t._v("#")]),t._v(" 4.1、where id > 7 情况展示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206153113285.png",alt:"image-20231206153113285"}})]),t._v(" "),a("h3",{attrs:{id:"_4-2、where-id-7-and-id-23-情况展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、where-id-7-and-id-23-情况展示"}},[t._v("#")]),t._v(" 4.2、where id > 7 and id < 23 情况展示")]),t._v(" "),a("p",[t._v("id=18的数据无法插入")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206153336202.png",alt:"image-20231206153336202"}})]),t._v(" "),a("p",[t._v("id=24的数据无法插入")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206153435683.png",alt:"image-20231206153435683"}})]),t._v(" "),a("h3",{attrs:{id:"_4-3、where-id-7-情况展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、where-id-7-情况展示"}},[t._v("#")]),t._v(" 4.3、where id = 7 情况展示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231206153636094.png",alt:"image-20231206153636094"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("注意：基于唯一索引或者主键索引，此时的间隙锁比较容易理解，但是基于非唯一索引的情况，SQL最终的执行的结果是由优化器决定的（有可能和索引有关，有可能和数据总量有关）")])]),t._v(" "),a("h2",{attrs:{id:"_5、临键锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、临键锁"}},[t._v("#")]),t._v(" 5、临键锁")]),t._v(" "),a("blockquote",[a("p",[t._v("临键锁（Next-Key Lock）是一种特殊的锁定机制，结合了行锁和间隙锁的特性，用于提供更强的隔离性，以防止幻读和其他并发问题")])]),t._v(" "),a("p",[t._v("简单来说，临键锁 = 间隙锁 + 记录锁。临键锁的工作方式是通过在查询的每一行上设置行锁，并且在每两个相邻键之间设置间隙锁，来确保事务一致性和隔离性")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("MySQL默认的锁就是临键锁，所以在执行SQL的时候，记录锁和间隙锁是会同时存在的。范围是左开右闭的区间")])])]),t._v(" "),a("h2",{attrs:{id:"_6、页锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、页锁"}},[t._v("#")]),t._v(" 6、页锁")]),t._v(" "),a("blockquote",[a("p",[t._v("页锁（Page-Level Locking）是一种锁定机制，允许数据库在表的页级别上实施锁定，以确保在并发访问时的数据一致性和隔离性。在 MySQL 中，页锁是一种相对较低级别的锁，介于行级锁和表级锁之间")])]),t._v(" "),a("p",[t._v("页锁锁定表中的页面（Page页），每个页面包含多个行，可以减少锁定的开销")]),t._v(" "),a("p",[t._v("默认的Innodb引擎支持行级表，而不是页锁，因为Innodb使用了更精细的多版本控制MVCC机制，可以在行级别实现高度的并发性。")]),t._v(" "),a("h2",{attrs:{id:"_7、死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、死锁"}},[t._v("#")]),t._v(" 7、死锁")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("检测死锁的语句")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNODB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("STATUS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('-- 执行上述语句后，查找输出中的 "LATEST DETECTED DEADLOCK" 部分，其中包含有关最近检测到的死锁的详细信息')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("检测哪些表被锁定")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" your_database_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" In_use "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("显示当前执行的所有进程和其详细信息")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 锁定的表将在 State 列中显示相关信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FULL")]),t._v(" PROCESSLIST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);