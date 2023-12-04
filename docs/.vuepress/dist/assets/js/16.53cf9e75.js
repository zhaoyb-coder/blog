(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{497:function(s,e,a){"use strict";a.r(e);var n=a(30),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装ingress-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装ingress-nginx"}},[s._v("#")]),s._v(" 安装Ingress-nginx")]),s._v(" "),a("h2",{attrs:{id:"_1、下载配置-ingress-nginx-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载配置-ingress-nginx-文件"}},[s._v("#")]),s._v(" 1、下载配置 ingress-nginx 文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INGRESS_NGINX_VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 LoadBalancer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 适合于没有 Helm 的环境，或者是倾向于使用 YAML 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://jihulab.com/mirrors-github/kubernetes/ingress-nginx/-/raw/controller-v"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INGRESS_NGINX_VERSION")]),s._v("/deploy/static/provider/cloud/deploy.yaml\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_2、修改为国内可以访问的镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、修改为国内可以访问的镜像"}},[s._v("#")]),s._v(" 2、修改为国内可以访问的镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s#registry.k8s.io/ingress-nginx/controller:v1.8.0@sha256:744ae2afd433a395eeb13dc03d3313facba92e96ad71d9feaafc85925493fee3#registry.jihulab.com/xuxiaowei-cloud/xuxiaowei-cloud/ingress-nginx/controller:v1.8.0#g"')]),s._v(" deploy.yaml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s#registry.k8s.io/ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0@sha256:a7943503b45d552785aa3b5e457f169a5661fb94d82b8a3373bcd9ebaf9aac80#registry.jihulab.com/xuxiaowei-cloud/xuxiaowei-cloud/ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0#g"')]),s._v(" deploy.yaml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s#registry.k8s.io/ingress-nginx/kube-webhook-certgen:v20230407@sha256:543c40fd093964bc9ab509d3e791f9989963021f1e9e4c9c7b6700b02bfb227b#registry.jihulab.com/xuxiaowei-cloud/xuxiaowei-cloud/ingress-nginx/kube-webhook-certgen:v20230407#g"')]),s._v(" deploy.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3、k8s-配置-ingress-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、k8s-配置-ingress-nginx"}},[s._v("#")]),s._v(" 3、k8s 配置 ingress-nginx")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl apply -f deploy.yaml\n\nkubectl get pod --all-namespaces\n\nkubectl get svc --all-namespaces\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);