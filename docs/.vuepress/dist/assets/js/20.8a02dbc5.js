(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{499:function(s,t,a){"use strict";a.r(t);var n=a(30),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"containerd镜像配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#containerd镜像配置"}},[s._v("#")]),s._v(" Containerd镜像配置")]),s._v(" "),a("blockquote",[a("p",[s._v("配置 Containerd 镜像加速域名，提高镜像拉取速度")])]),s._v(" "),a("h2",{attrs:{id:"_1、配置-crictl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置-crictl"}},[s._v("#")]),s._v(" 1、配置 crictl")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/containerd/config.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 "),a("code",[s._v('[plugins."io.containerd.grpc.v1.cri".registry.mirrors]')]),s._v(" 后面添加镜像，注意前面的缩进（空格）")]),s._v(" "),a("p",[s._v("配置 docker.io 的示例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.io"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          endpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://hnkfbj7x.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("配置k8s.gcr.io的示例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k8s.gcr.io"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          endpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.aliyuncs.com/k8sxio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("配置私有harbor镜像仓库示例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local.harbor.top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          endpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://local.harbor.top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("（不配置可以忽略）如果配置了harbor镜像仓库，还需要在"),a("code",[s._v('[plugins."io.containerd.grpc.v1.cri".registry.configs]')]),s._v("后面配置登录信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.configs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.configs."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local.harbor.top"')]),s._v(".tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          insecure_skip_verify "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n          ca_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/docker/certs.d/local.harbor.top/ca.crt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.configs."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local.harbor.top"')]),s._v(".auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n          password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Harbor12345"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_2、重启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、重启服务"}},[s._v("#")]),s._v(" 2、重启服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl restart containerd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、检查-crictl-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、检查-crictl-配置"}},[s._v("#")]),s._v(" 3、检查 "),a("code",[s._v("crictl")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否配置 crictl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/crictl.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有配置，则执行命令进行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/crictl.yaml")]),s._v("\nruntime-endpoint: unix:///run/containerd/containerd.sock\nimage-endpoint: unix:///run/containerd/containerd.sock\ntimeout: 10\ndebug: true\n\nEOF")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看生成的配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/crictl.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看配置是否生效")]),s._v("\ncrictl info\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_4、测试拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、测试拉取镜像"}},[s._v("#")]),s._v(" 4、测试拉取镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像测试")]),s._v("\ncrictl pull docker.io/library/maven:3.6.3-openjdk-17\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看拉取的结果")]),s._v("\ncrictl image\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);