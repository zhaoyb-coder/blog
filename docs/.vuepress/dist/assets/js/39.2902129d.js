(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{354:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gc问题排查思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc问题排查思路"}},[s._v("#")]),s._v(" GC问题排查思路")]),s._v(" "),a("p",[s._v("线上出现问题绝大部份都是内存、CPU、网络这三大类，而我们写代码能导致的问题，大部分都是内存问题。"),a("br"),s._v("\n代码不规范，配置不合理，导致内存泄漏，GC频繁，最终导致CPU占用过高，监控系统报警，更严重的导致OOM。"),a("br"),s._v("\n那么，如果线上出现CPU飙升、内存占用率飙升，我们应该如何定位问题？下面是我工作中总结的三把斧经验，分享出来进行互勉～")]),s._v(" "),a("h2",{attrs:{id:"_1、首先定位导致问题的进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、首先定位导致问题的进程"}},[s._v("#")]),s._v(" 1、首先定位导致问题的进程")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" 查看服务器状态\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("定位哪个进程占用CPU过高，或者内存占用过高，找到对应的pid"),a("br"),s._v("\n例如当前pid是 10086，根据经验来说，Java内部有三类线程，C2即时编译线程、GC线程、应用线程，所以根据进程定位出来进程中的哪个线程导致这个问题")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Hp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v("   得到线程号 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23307")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%x"')]),s._v("    得到16进制数字 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2089")]),s._v(" 方便在日志中查找\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2、打印线程日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、打印线程日志"}},[s._v("#")]),s._v(" 2、打印线程日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jstack "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstack_log.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("把堆栈信息输出到文件jstack_log.txt中，然后使用vim编辑器打开，全局搜索线程号2089")]),s._v(" "),a("div",{staticClass:"language-sehll line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gg, /2089, enter, n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看具体的日志，一般情况下，看日志就能大致看出来问题所在，举个例子："),a("br"),s._v("\n比如我们在日志中看到了GC执行的日志，Concurrent Mark-Sweep GC Thread xxxx\n那么我们可以想到，是CMS垃圾收集器频繁GC导致CPU占用率过高，又或者在日志中看到了concurrent mode failure，那么就可以知道是CMS垃圾收集的速度赶不上应用程序运行的速度，导致内存不够用，CMS使用Serial进行垃圾收集，会造成长时间STW，后续如果不及时处理，严重的会产生OOM。"),a("br"),s._v("\n再比如。通过观察GC日志，发现GC运行并没有处于很健康的状态，那么这个情况就比较复杂了，根据经验来看，（GC主要观测两个维度，频率和时长）首先看YGC，如果YGC超过5s一次，或者时间更长，那么说明新生代给的内存过大了，应该缩小新生代内存，如果频率很高1s一次，就应该扩大新生代的大小。"),a("br"),s._v("\n那FGC呢，我们要尽可能的减少FGC的次数（最好一次没有），首先，一下几点会引发FGC：1、Old区太小；2、元数据区域太小；3、System.gc()；4、在线jmap；5、CMSPromotion failed 或者 concurrent mode failure。"),a("br"),s._v("\n基于CMS的优化就是控制好比例，让CMS垃圾收集的速率能够超过应用程序产生垃圾的速率；"),a("br"),s._v("\n基于Old内存区域的优化，需要观察如果FGC后，Old区还有大量对象，说明Old区太小，需要扩大内存，如果FGC后Old区基本没有数据了，说明这些对象还是属于比较短命的对象，不应该进入Old区，通常做法是增大新生代，让这些对象在YGC中被消灭，或者通过设置大对象参数，或者晋升年龄参数。")]),s._v(" "),a("h2",{attrs:{id:"_3、打印jvm参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、打印jvm参数"}},[s._v("#")]),s._v(" 3、打印JVM参数")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" 打印进程启动类名字\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xxxx 找到详细启动信息\n或者jinfo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样，我们可以得到进程启动的时候的一些参数，比如最大内存、最小内存等， 最后根据业务场景分析是否需要增加内存。")]),s._v(" "),a("h2",{attrs:{id:"_4、下载堆转储dump文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、下载堆转储dump文件"}},[s._v("#")]),s._v(" 4、下载堆转储dump文件")]),s._v(" "),a("p",[s._v("参数-XX:+HeapDumpOnOutOfMemoryError可以在应用程序发生OOM时自动生成堆转储文件，方便分析当时的内存状态，"),a("br"),s._v("\n如果是没有发生OOM时，想要获取这个文件，可以在线上执行命令jmap -dump:format=b,file=/tmp/dump.hprof pid （注意：执行此命令会导致FGC，线上谨慎使用），得到dump文件之后，使用工具（MAT，Jprofile，jvisualvm）就可以查看内存的状态，具体关注大对象。")]),s._v(" "),a("h2",{attrs:{id:"_5、常见的内存泄漏场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、常见的内存泄漏场景"}},[s._v("#")]),s._v(" 5、常见的内存泄漏场景")]),s._v(" "),a("h3",{attrs:{id:"_5-1、静态变量的持续引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、静态变量的持续引用"}},[s._v("#")]),s._v(" 5.1、静态变量的持续引用")]),s._v(" "),a("p",[s._v("如果我们代码内部写了一个静态的集合类，比如Map，示例代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" userMap "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从数据库查询数据")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" userList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadFromDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2024-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        userMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2024-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("userList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//......")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("这个代码在运行初期不会又问题，但是运行几个月之后大量的内存泄漏就有可能导致OOM，这种分析也很简单，得到堆转储的dump文件之后，使用jvisualvm分析大内存对象一看就知道了")]),s._v(" "),a("h3",{attrs:{id:"_5-2、线程池滥用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、线程池滥用"}},[s._v("#")]),s._v(" 5.2、线程池滥用")]),s._v(" "),a("p",[s._v("项目中经常遇到的问题，我开发业务需要用到多线程编程，需要使用线程池，那么我又不想使用别人现有的，于是自己定义了一个线程池，这样问题就来了，大家都这样干的时候，项目代码中就会出现很多的线程池，都有自己的核心线程数，这会导致什么问题呢？  会导致GC发生的时候，GC线程拿不到更多的CPU资源，使得GC速度变慢，跟不上应用程序生产垃圾的速度，频繁GC，进入恶性循环，最终导致OOM（但是统一线程池能解决问题吗？ 只能说各有各的难处，技术世界没有银弹）")]),s._v(" "),a("h3",{attrs:{id:"_5-3、堆外线程导致内存占用升高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3、堆外线程导致内存占用升高"}},[s._v("#")]),s._v(" 5.3、堆外线程导致内存占用升高")]),s._v(" "),a("p",[s._v("堆外内存常见的可以使用参数-XX:MaxDirectMemorySize来控制应用进程使用的最大堆外内存，但是还有遗漏的可能，比如使用了JNI或者Unsafe.allocateMemory\n其实对于Java来说，我们最常使用堆外内存的方法就是NIO中的ByteBuffer.allocateDirect()，这个方法是受MaxDirectMemorySize参数控制的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);