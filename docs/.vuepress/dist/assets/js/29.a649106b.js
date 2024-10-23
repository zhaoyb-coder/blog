(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{343:function(s,e,r){"use strict";r.r(e);var t=r(8),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"cgroup是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cgroup是什么"}},[s._v("#")]),s._v(" Cgroup是什么")]),s._v(" "),e("h3",{attrs:{id:"_1、cgroup介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、cgroup介绍"}},[s._v("#")]),s._v(" 1、Cgroup介绍")]),s._v(" "),e("blockquote",[e("p",[s._v("Cgroup是control group的简写，属于Linux内核提供的一个特性，用于限制和隔离一组进程对系统资源的使用，也就是做资源QoS，这些资源主要包括CPU、内存、block I/O和网络带宽。")]),s._v(" "),e("p",[s._v("Cgroup从2.6.24开始进入内核主线，目前各大发行版都默认打开了Cgroup特性。")])]),s._v(" "),e("p",[s._v("Cgroup实现了一个通用的进程分组的框架，而不同资源的具体管理则是由各个Cgroup子系统实现的，其中各个子系统及其作用如下：")]),s._v(" "),e("ul",[e("li",[s._v("devices:设备权限控制")]),s._v(" "),e("li",[s._v("cpuset:分配指定的CPU和内存结点")]),s._v(" "),e("li",[s._v("cpu：控制CPU占有率")]),s._v(" "),e("li",[s._v("cpuacct：统计CPU使用情况")]),s._v(" "),e("li",[s._v("memory：限制内存的使用上线")]),s._v(" "),e("li",[s._v("freezer：冻结（暂停）Cgroup中的进程")]),s._v(" "),e("li",[s._v("net_cls：配合tc（traffic controller）限制网络带宽")]),s._v(" "),e("li",[s._v("net_prio:设置进程的网络流量优先级")]),s._v(" "),e("li",[s._v("huge_tlb：限制HugeTLB的使用")]),s._v(" "),e("li",[s._v("perf_event:允许Perf工具基于Cgroup分组做性能监测")])]),s._v(" "),e("p",[s._v("在Cgroup出现之前，只能对一个进程做一些资源控制，例如通过sched_setaffinity系统调用限定一个进程的CPU亲和性，或者用ulimit限制一个进程的打开文件上限、栈大小等。另外，使用ulimit可以对少数资源基于用户做资源控制，例如限制一个用户能创建的进程数。而Cgroup可以对进程进行任意的分组，如何分组是用户自定义的，例如安卓的应用分为前台应用和后台应用，前台应用是直接跟用户交互的，需要响应速度快，因此前台应用对资源的申请需要得到更多的保证。为此安卓将前台应用和后台应用划分到不同的Cgroup中，并且对放置前台应用的Cgroup配置了较高的系统资源限额。")]),s._v(" "),e("h3",{attrs:{id:"_2、cgroup的接口和使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、cgroup的接口和使用"}},[s._v("#")]),s._v(" 2、Cgroup的接口和使用")]),s._v(" "),e("p",[s._v("Cgroup的原生接口通过cgroupfs提供，类似于procfs和sysfs，是一种虚拟文件系统。以下用一个实例演示如何使用Cgroup")]),s._v(" "),e("p",[s._v("1、挂载cgroupfs")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount –t cgroup –o cpuset cpuset /sys/fs/cgroup/cpuset")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("首先必须将cgroupfs挂载起来，这个动作一般已经在启动时由Linux发行版做好了。可以把cgroupfs挂载在任意一个目录上，不过标准的挂载点是/sys/fs/cgroup")]),s._v(" "),e("p",[s._v("2、查看cgroupfs")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /sys/fs/cgroup/cpuset cgroup.clone_children  cpuset.memory_pressure cgroup.procs           ")]),s._v("\ncpuset.memory_pressure_enabled cgroup.sane_behavior   \ncpuset.memory_spread_page cpuset.cpu_exclusive  \ncpuset.memory_spread_slab cpuset.cpus            \ncpuset.mems cpuset.effective_cpus  \ncpuset.sched_load_balance cpuset.effective_mems  \ncpuset.sched_relax_domain_level \ncpuset.mem_exclusive   notify_on_release \ncpuset.mem_hardwall    release_agent \ncpuset.memory_migrate  tasks\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);