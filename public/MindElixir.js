(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".mind-elixir{--gap: 30px;--root-radius: 30px;--main-radius: 20px;--root-color: #ffffff;--root-bgcolor: #4c4f69;--main-color: #444446;--main-bgcolor: #ffffff;--topic-padding: 3px;--color: #777777;--bgcolor: #f6f6f6;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif}.mind-elixir .hyper-link{text-decoration:none}.map-container{-webkit-user-select:none;user-select:none;height:100%;width:100%;overflow:scroll;font-size:15px}.map-container::-webkit-scrollbar{width:0px;height:0px}.map-container .selected{box-shadow:0 0 0 2px #4dc4ff}.map-container .lhs{direction:rtl}.map-container .lhs me-tpc{direction:ltr}.map-container .map-canvas{height:20000px;width:20000px;position:relative;-webkit-user-select:none;user-select:none;transition:transform .3s;transform:scale(1);background-color:var(--bgcolor)}.map-container .map-canvas me-nodes{position:absolute;display:flex;justify-content:center;align-items:center;height:fit-content;width:fit-content}.map-container .map-canvas me-root{padding:10px var(--gap);color:var(--root-color);background-color:var(--root-bgcolor);border-radius:var(--root-radius)}.map-container .map-canvas me-root me-tpc{display:block;font-size:25px;white-space:pre-wrap}.map-container .map-canvas me-root me-tpc #input-box{padding:10px var(--gap)}.map-container me-main>me-wrapper{position:relative;margin:20px 65px}.map-container me-main>me-wrapper>me-parent{margin:var(--gap);background-color:var(--main-bgcolor);border:2px solid var(--main-color);border-radius:var(--main-radius);padding:0}.map-container me-main>me-wrapper>me-parent>me-tpc{border-radius:var(--main-radius);color:var(--main-color);padding:8px var(--gap)}.map-container me-main>me-wrapper>me-parent>me-tpc #input-box{padding:8px var(--gap)}.map-container me-wrapper{display:block;pointer-events:none}.map-container me-children,.map-container me-parent{display:inline-block;vertical-align:middle}.map-container me-parent{position:relative;cursor:pointer;padding:6px var(--gap);margin-top:10px}.map-container me-parent me-tpc{position:relative;display:block;border-radius:3px;color:var(--color);pointer-events:all;max-width:800px;white-space:pre-wrap;padding:var(--topic-padding);line-height:1.2}.map-container me-parent me-tpc>div,.map-container me-parent me-tpc>span,.map-container me-parent me-tpc>img{pointer-events:none}.map-container me-parent me-tpc .insert-preview{position:absolute;width:100%;left:0;z-index:9}.map-container me-parent me-tpc .show{background:#7ad5ff;pointer-events:none;opacity:.7}.map-container me-parent me-tpc .before{height:14px;top:-14px}.map-container me-parent me-tpc .in{height:100%;top:0}.map-container me-parent me-tpc .after{height:14px;bottom:-14px}.map-container me-parent me-epd{position:absolute;height:18px;width:18px;opacity:.8;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdD0iMTY1NjY1NDcxNzI0MiIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgICA8cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3oiIHN0cm9rZS13aWR0aD0iNTQiIHN0cm9rZT0nYmxhY2snIGZpbGw9J3doaXRlJyA+PC9wYXRoPgogICAgPHBhdGggZD0iTTY4Mi42NjY2NjcgNDgwaC0xMzguNjY2NjY3VjM0MS4zMzMzMzNjMC0xNy4wNjY2NjctMTQuOTMzMzMzLTMyLTMyLTMycy0zMiAxNC45MzMzMzMtMzIgMzJ2MTM4LjY2NjY2N0gzNDEuMzMzMzMzYy0xNy4wNjY2NjcgMC0zMiAxNC45MzMzMzMtMzIgMzJzMTQuOTMzMzMzIDMyIDMyIDMyaDEzOC42NjY2NjdWNjgyLjY2NjY2N2MwIDE3LjA2NjY2NyAxNC45MzMzMzMgMzIgMzIgMzJzMzItMTQuOTMzMzMzIDMyLTMydi0xMzguNjY2NjY3SDY4Mi42NjY2NjdjMTcuMDY2NjY3IDAgMzItMTQuOTMzMzMzIDMyLTMycy0xNC45MzMzMzMtMzItMzItMzJ6Ij48L3BhdGg+Cjwvc3ZnPg==);background-repeat:no-repeat;background-size:contain;background-position:center;pointer-events:all;z-index:9}.map-container me-parent me-epd.minus{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdD0iMTY1NjY1NTU2NDk4NSIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgICA8cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3oiIHN0cm9rZS13aWR0aD0iNTQiIHN0cm9rZT0nYmxhY2snIGZpbGw9J3doaXRlJyA+PC9wYXRoPgogICAgPHBhdGggZD0iTTY4Mi42NjY2NjcgNTQ0SDM0MS4zMzMzMzNjLTE3LjA2NjY2NyAwLTMyLTE0LjkzMzMzMy0zMi0zMnMxNC45MzMzMzMtMzIgMzItMzJoMzQxLjMzMzMzNGMxNy4wNjY2NjcgMCAzMiAxNC45MzMzMzMgMzIgMzJzLTE0LjkzMzMzMyAzMi0zMiAzMnoiPjwvcGF0aD4KPC9zdmc+)!important;transition:opacity .3s;opacity:0}.map-container me-parent me-epd.minus:hover{opacity:.8}.map-container .icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.map-container .lines,.map-container .subLines,.map-container .topiclinks,.map-container .linkcontroller{position:absolute;height:102%;width:100%;top:0;left:0}.map-container .topiclinks,.map-container .linkcontroller{pointer-events:none}.map-container .topiclinks g,.map-container .linkcontroller g{pointer-events:all}.map-container .lines,.map-container .subLines{pointer-events:none;z-index:-1}.map-container .topiclinks *,.map-container .linkcontroller *{z-index:100}.map-container .topiclinks g{cursor:pointer}.map-container #input-box{position:absolute;top:0;left:0;padding:var(--topic-padding);background-color:#fff;color:#666;width:max-content;max-width:800px;z-index:11;direction:ltr;-webkit-user-select:auto;user-select:auto}.map-container me-tpc>img{pointer-events:none;display:block;margin-top:8px}.map-container .circle{position:absolute;height:10px;width:10px;margin-top:-5px;margin-left:-5px;border-radius:100%;background:#aaa;cursor:pointer}.map-container .tags{direction:ltr}.map-container .tags span{display:inline-block;border-radius:3px;padding:2px 4px;background:#d6f0f8;color:#276f86;margin:2px 3px 0 0;font-size:12px;line-height:16px}.map-container .icons{display:inline-block;direction:ltr;margin-right:10px}.map-container .mind-elixir-ghost{position:fixed;top:-100%;left:-100%;box-sizing:content-box;opacity:.5;background-color:#f6f6f6;max-width:200px;width:fit-content;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:8px 16px;border-radius:6px;border:#666666 2px solid}.mind-elixir .context-menu{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99}.mind-elixir .context-menu .menu-list{position:fixed;list-style:none;margin:0;padding:0;font:300 15px Roboto,sans-serif;color:#333;box-shadow:0 12px 15px #0003}.mind-elixir .context-menu .menu-list *{transition:color .4s,background-color .4s}.mind-elixir .context-menu .menu-list li{min-width:150px;overflow:hidden;white-space:nowrap;padding:6px 10px;background-color:#fff;border-bottom:1px solid #ecf0f1}.mind-elixir .context-menu .menu-list li a{color:#333;text-decoration:none}.mind-elixir .context-menu .menu-list li.disabled{color:#5e5e5e;background-color:#f7f7f7}.mind-elixir .context-menu .menu-list li.disabled:hover{cursor:default;background-color:#f7f7f7}.mind-elixir .context-menu .menu-list li:hover{cursor:pointer;background-color:#ecf0f1}.mind-elixir .context-menu .menu-list li:first-child{border-radius:5px 5px 0 0}.mind-elixir .context-menu .menu-list li:last-child{border-bottom:0;border-radius:0 0 5px 5px}.mind-elixir .context-menu .menu-list li span:last-child{float:right}.mind-elixir .mobile-menu{position:absolute;left:20px;bottom:70px;z-index:99;margin:0;padding:0;color:#333;border-radius:5px;box-shadow:0 12px 15px #0003;overflow:hidden}.mind-elixir .mobile-menu *{transition:color .4s,background-color .4s}.mind-elixir .mobile-menu div{float:left;text-align:center;width:30px;overflow:hidden;white-space:nowrap;padding:8px;background-color:#fff;border-bottom:1px solid #ecf0f1}.mind-elixir .mobile-menu div a{color:#333;text-decoration:none}.mind-elixir .mobile-menu div.disabled{color:#5e5e5e;background-color:#f7f7f7}.mind-elixir .mobile-menu div.disabled:hover{cursor:default;background-color:#f7f7f7}.mind-elixir .mobile-menu div:hover{cursor:pointer;background-color:#ecf0f1}@media (prefers-color-scheme: dark){.mind-elixir-toolbar{background:#2d3748!important;color:#fff!important}}.mind-elixir-toolbar{font-family:iconfont;position:absolute;background:#fff;padding:10px;border-radius:5px;box-shadow:0 1px 2px #0003}.mind-elixir-toolbar svg{display:inline-block}.mind-elixir-toolbar span:active{opacity:.5}.mind-elixir-toolbar.rb{right:20px;bottom:20px}.mind-elixir-toolbar.rb span+span{margin-left:10px}.mind-elixir-toolbar.lt{font-size:20px;left:20px;top:20px}.mind-elixir-toolbar.lt span{display:block}.mind-elixir-toolbar.lt span+span{margin-top:10px}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(e) {
  var t, n, i, o, s, r, a = '<svg><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M423.765333 128a42.666667 42.666667 0 0 1 3.2 85.205333L423.765333 213.333333H234.666667a64 64 0 0 0-63.872 60.245334L170.666667 277.333333v512a64 64 0 0 0 60.245333 63.872L234.666667 853.333333h512a64 64 0 0 0 63.872-60.245333L810.666667 789.333333v-189.098666a42.666667 42.666667 0 0 1 85.205333-3.2l0.128 3.2V789.333333a149.333333 149.333333 0 0 1-144.213333 149.248L746.666667 938.666667h-512a149.333333 149.333333 0 0 1-149.248-144.213334L85.333333 789.333333v-512a149.333333 149.333333 0 0 1 144.213334-149.248L234.666667 128h189.098666z m324.949334-53.248a42.666667 42.666667 0 0 1 60.330666 0l150.869334 150.869333a42.666667 42.666667 0 0 1 0 60.330667l-329.386667 329.386667a42.666667 42.666667 0 0 1-29.44 12.458666l-153.386667 2.517334a42.666667 42.666667 0 0 1-43.349333-43.349334l2.56-153.386666a42.666667 42.666667 0 0 1 12.458667-29.44z m30.165333 90.496L491.946667 452.266667l-1.493334 91.989333 92.032-1.493333 286.976-286.976-90.538666-90.538667z"  ></path></symbol><symbol id="icon-rising" viewBox="0 0 1024 1024"><path d="M553.173333 803.84h-64l0.021334-474.581333-224.021334 224-45.269333-45.226667L521.6 206.293333l301.717333 301.696-45.269333 45.269334-224.853333-224.896v475.477333z"  ></path></symbol><symbol id="icon-falling" viewBox="0 0 1024 1024"><path d="M553.173333 238.314667h-64l0.021334 474.602666-224.021334-224-45.269333 45.226667L521.6 835.861333l301.717333-301.717333-45.269333-45.226667-224.853333 224.853334V238.336z"  ></path></symbol><symbol id="icon-shanchu2" viewBox="0 0 1024 1024"><path d="M516.60601807 107.93026734c-82.64382935 0-149.71865844 65.51751709-152.5729065 147.77160644H171.37136841c-21.40603638 0-38.92044068 17.38504028-38.92044068 38.92126465 0 21.40686036 17.38504028 38.92208862 38.92126466 38.92208862h42.94308471v435.40136719c0 81.73498536 55.39828492 148.55026245 123.90106201 148.55026245h348.99444581c68.37341309 0 123.90106201-66.42553711 123.901062-148.55026245V333.80477906h38.92126465c21.40686036 0 38.92126464-17.38586426 38.92126465-38.92208863 0-21.40686036-17.38504028-38.92126464-38.92126465-38.92126465H668.91854859C666.45321656 173.44860839 599.24902344 107.93109131 516.60601807 107.93109131z m-79.65939331 147.77160644c2.85424805-42.16442872 37.2354126-74.85809326 79.78875732-74.85809326s76.93450927 32.82302857 79.39984131 74.85809326H436.94662476z m-98.86047364 589.01165771c-24.2611084 0-50.98754883-31.13717651-50.98754883-75.76693725V333.80477906h450.97036744V769.33551026c0 44.50039673-26.72644043 75.76776123-50.98754884 75.76776122H338.08615112v-0.38973999z m0 0"  ></path><path d="M390.37063599 751.17263794c17.77313232 0 32.43411255-17.7739563 32.43411255-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43411255-40.08966065-17.77478027 0-32.43493653 17.77478027-32.43493653 40.08966065v228.72875976c0 22.18469239 14.27124023 40.08883667 32.43493653 40.08883667z m117.41308594 0c17.7739563 0 32.43411255-17.7739563 32.43411255-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43411255-40.08966065-17.7739563 0-32.43493653 17.77478027-32.43493653 40.08966065v228.72875976c0 22.18469239 14.66098023 40.08883667 32.43493653 40.08883667z m123.51049804 0c17.7739563 0 32.43493653-17.7739563 32.43493652-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43493652-40.08966065-17.7739563 0-32.43411255 17.77478027-32.43411255 40.08966065v228.72875976c0 22.18469239 14.14105224 40.08883667 32.43411255 40.08883667z m0 0"  ></path></symbol><symbol id="icon-zijiedian" viewBox="0 0 1024 1024"><path d="M312.208 472c19.568-157.856 153.432-280 315.656-280 175.68 0 318.112 143.272 318.112 320S803.552 832 627.864 832c-162.224 0-296.08-122.144-315.656-280H120a40 40 0 0 1 0-80h192.208zM632 752c132.552 0 240-107.448 240-240 0-132.552-107.448-240-240-240-132.552 0-240 107.448-240 240 0 132.552 107.448 240 240 240z m-40-280v-80a40 40 0 0 1 80 0v80h80a40 40 0 0 1 0 80h-80v80a40 40 0 0 1-80 0v-80h-80a40 40 0 0 1 0-80h80z"  ></path></symbol><symbol id="icon-tongjijiedian-" viewBox="0 0 1024 1024"><path d="M803.84 131.626667H410.24A59.733333 59.733333 0 0 0 350.506667 192v45.226667H199.68a51.626667 51.626667 0 0 0-51.626667 51.626666v465.92a51.626667 51.626667 0 0 0 51.626667 51.626667h187.52v-55.466667h-162.133333a21.333333 21.333333 0 0 1-21.333334-21.333333V313.386667a21.333333 21.333333 0 0 1 21.333334-21.333334h125.653333v64a59.733333 59.733333 0 0 0 59.733333 59.733334h393.386667a59.733333 59.733333 0 0 0 59.733333-59.733334V192a59.733333 59.733333 0 0 0-59.733333-60.373333z m4.266667 224.64a4.266667 4.266667 0 0 1-4.266667 4.266666H410.24a4.266667 4.266667 0 0 1-4.266667-4.266666V192a4.266667 4.266667 0 0 1 4.266667-4.266667h393.6a4.266667 4.266667 0 0 1 4.266667 4.266667zM716.16 749.44h-81.28v-81.493333a27.733333 27.733333 0 0 0-55.466667 0v81.28h-81.493333a27.733333 27.733333 0 1 0 0 55.466666h81.28v81.28a27.733333 27.733333 0 1 0 55.466667 0v-81.066666h81.28a27.733333 27.733333 0 0 0 0-55.466667z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" fill="" ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M385 560.69999999L385 738.9c0 36.90000001 26.4 68.5 61.3 68.5l150.2 0c1.5 0 3-0.1 4.5-0.3 10.2 38.7 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-42 0-77.3 28.6-87.5 67.39999999-1.4-0.3-2.9-0.4-4.5-0.39999999L446.3 760.4c-6.8 0-14.3-8.9-14.3-21.49999999l0-427.00000001c0-12.7 7.40000001-21.5 14.30000001-21.5l150.19999999 0c1.5 0 3-0.2 4.5-0.4 10.2 38.8 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.4 0-49.9-40.5-90.6-90.5-90.59999999-42 0-77.3 28.6-87.5 67.39999999-1.4-0.2-2.9-0.4-4.49999999-0.4L446.3 243.3c-34.80000001 0-61.3 31.6-61.3 68.50000001L385 513.7l-79.1 0c-10.4-38.5-45.49999999-67-87.4-67-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c41.79999999 0 77.00000001-28.4 87.4-67L385 560.69999999z" fill="" ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M639 463.30000001L639 285.1c0-36.90000001-26.4-68.5-61.3-68.5l-150.2 0c-1.5 0-3 0.1-4.5 0.3-10.2-38.7-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c42 0 77.3-28.6 87.5-67.39999999 1.4 0.3 2.9 0.4 4.5 0.39999999L577.7 263.6c6.8 0 14.3 8.9 14.3 21.49999999l0 427.00000001c0 12.7-7.40000001 21.5-14.30000001 21.5l-150.19999999 0c-1.5 0-3 0.2-4.5 0.4-10.2-38.8-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.4 0 49.9 40.5 90.6 90.5 90.59999999 42 0 77.3-28.6 87.5-67.39999999 1.4 0.2 2.9 0.4 4.49999999 0.4L577.7 780.7c34.80000001 0 61.3-31.6 61.3-68.50000001L639 510.3l79.1 0c10.4 38.5 45.49999999 67 87.4 67 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-41.79999999 0-77.00000001 28.4-87.4 67L639 463.30000001z" fill="" ></path></symbol><symbol id="icon-side" viewBox="0 0 1024 1024"><path d="M851.91168 328.45312c-59.97056 0-108.6208 48.47104-108.91264 108.36992l-137.92768 38.4a109.14304 109.14304 0 0 0-63.46752-46.58688l1.39264-137.11872c47.29344-11.86816 82.31936-54.66624 82.31936-105.64096 0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.76288-108.91776 108.91776c0 49.18784 32.60928 90.75712 77.38368 104.27392l-1.41312 138.87488a109.19936 109.19936 0 0 0-63.50336 48.55808l-138.93632-39.48544 0.01024-0.72704c0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.75776-108.91776 108.91776c0 60.15488 48.76288 108.91264 108.91776 108.91264 39.3984 0 73.91232-20.92032 93.03552-52.2496l139.19232 39.552-0.00512 0.2304c0 25.8304 9.00096 49.5616 24.02816 68.23424l-90.14272 132.63872a108.7488 108.7488 0 0 0-34.2528-5.504c-60.15488 0-108.91776 48.768-108.91776 108.91776 0 60.16 48.76288 108.91776 108.91776 108.91776 60.16 0 108.92288-48.75776 108.92288-108.91776 0-27.14624-9.9328-51.968-26.36288-71.04l89.04704-131.03104a108.544 108.544 0 0 0 37.6832 6.70208 108.672 108.672 0 0 0 36.48512-6.272l93.13792 132.57216a108.48256 108.48256 0 0 0-24.69888 69.0688c0 60.16 48.768 108.92288 108.91776 108.92288 60.16 0 108.91776-48.76288 108.91776-108.92288 0-60.14976-48.75776-108.91776-108.91776-108.91776a108.80512 108.80512 0 0 0-36.69504 6.3488l-93.07136-132.48a108.48768 108.48768 0 0 0 24.79616-72.22784l136.09984-37.888c18.99008 31.93856 53.84192 53.3504 93.69088 53.3504 60.16 0 108.92288-48.75776 108.92288-108.91264-0.00512-60.15488-48.77312-108.92288-108.92288-108.92288z"  ></path></symbol><symbol id="icon-B" viewBox="0 0 1024 1024"><path d="M98.067692 65.457231H481.28c75.854769 0 132.411077 3.150769 169.668923 9.452307 37.336615 6.301538 70.656 19.534769 100.036923 39.620924 29.459692 20.007385 53.956923 46.710154 73.570462 80.029538 19.692308 33.398154 29.459692 70.734769 29.459692 112.167385 0 44.898462-12.130462 86.094769-36.233846 123.588923a224.886154 224.886154 0 0 1-98.461539 84.283077c58.368 17.092923 103.266462 46.08 134.695385 87.04 31.350154 40.96 47.025231 89.088 47.025231 144.462769 0 43.638154-10.082462 86.016-30.404923 127.212308-20.243692 41.196308-47.891692 74.043077-83.02277 98.697846-35.052308 24.654769-78.296615 39.778462-129.732923 45.449846-32.295385 3.465846-110.119385 5.671385-233.472 6.537846H98.067692V65.457231z m193.536 159.507692V446.621538h126.818462c75.460923 0 122.328615-1.024 140.603077-3.229538 33.083077-3.938462 59.155692-15.36 78.139077-34.343385 18.904615-18.904615 28.435692-43.874462 28.435692-74.830769 0-29.696-8.192-53.720615-24.497231-72.310154-16.384-18.510769-40.644923-29.696-72.940307-33.634461-19.140923-2.205538-74.279385-3.308308-165.415385-3.308308h-111.064615z m0 381.243077v256.315077h179.2c69.710769 0 113.979077-1.969231 132.726154-5.907692 28.750769-5.198769 52.145231-17.959385 70.262154-38.281847 18.116923-20.243692 27.096615-47.340308 27.096615-81.368615 0-28.750769-6.931692-53.169231-20.873846-73.255385a118.232615 118.232615 0 0 0-60.494769-43.795692c-26.387692-9.137231-83.574154-13.705846-171.638154-13.705846H291.603692z"  ></path></symbol><symbol id="icon-a" viewBox="0 0 1024 1024"><path d="M757.76 665.6q0 20.48 1.536 34.304t7.68 22.016 18.944 12.288 34.304 4.096q-3.072 25.6-15.36 44.032-11.264 16.384-33.28 29.696t-62.976 13.312q-11.264 0-20.48-0.512t-17.408-2.56l-6.144-2.048-1.024 0q-4.096-1.024-10.24-4.096-2.048-2.048-4.096-2.048-1.024-1.024-2.048-1.024-14.336-8.192-23.552-17.408t-14.336-17.408q-6.144-10.24-9.216-20.48-63.488 75.776-178.176 75.776-48.128 0-88.064-15.36t-69.12-44.032-45.056-68.096-15.872-88.576 16.896-89.088 47.616-67.584 74.24-42.496 96.768-14.848q48.128 0 88.576 17.408t66.048 49.152q0-8.192 0.512-16.384t0.512-15.36q0-71.68-39.936-104.448t-128-32.768q-43.008 0-84.992 6.656t-84.992 17.92q14.336-28.672 25.088-47.616t24.064-29.184q30.72-24.576 158.72-24.576 79.872 0 135.168 13.824t90.624 43.52 51.2 75.264 15.872 108.032l0 200.704zM487.424 743.424q50.176 0 79.872-33.28t29.696-95.744q0-61.44-28.672-93.696t-76.8-32.256q-52.224 0-82.944 33.28t-30.72 94.72q0 58.368 31.744 92.672t77.824 34.304z"  ></path></symbol><symbol id="icon-full" viewBox="0 0 1024 1024"><path d="M639.328 416c8.032 0 16.096-3.008 22.304-9.056l202.624-197.184-0.8 143.808c-0.096 17.696 14.144 32.096 31.808 32.192 0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808l1.248-222.208c0-0.672-0.352-1.248-0.384-1.92 0.032-0.512 0.288-0.896 0.288-1.408 0.032-17.664-14.272-32-31.968-32.032L671.552 96l-0.032 0c-17.664 0-31.968 14.304-32 31.968C639.488 145.632 653.824 160 671.488 160l151.872 0.224-206.368 200.8c-12.672 12.32-12.928 32.608-0.64 45.248C622.656 412.736 630.976 416 639.328 416z"  ></path><path d="M896.032 639.552 896.032 639.552c-17.696 0-32 14.304-32.032 31.968l-0.224 151.872-200.832-206.4c-12.32-12.64-32.576-12.96-45.248-0.64-12.672 12.352-12.928 32.608-0.64 45.248l197.184 202.624-143.808-0.8c-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808-0.096 17.696 14.144 32.096 31.808 32.192l222.24 1.248c0.064 0 0.128 0 0.192 0 0.64 0 1.12-0.32 1.76-0.352 0.512 0.032 0.896 0.288 1.408 0.288l0.032 0c17.664 0 31.968-14.304 32-31.968L928 671.584C928.032 653.952 913.728 639.584 896.032 639.552z"  ></path><path d="M209.76 159.744l143.808 0.8c0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808 0.096-17.696-14.144-32.096-31.808-32.192L131.68 95.328c-0.064 0-0.128 0-0.192 0-0.672 0-1.248 0.352-1.888 0.384-0.448 0-0.8-0.256-1.248-0.256 0 0-0.032 0-0.032 0-17.664 0-31.968 14.304-32 31.968L96 352.448c-0.032 17.664 14.272 32 31.968 32.032 0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968l0.224-151.936 200.832 206.4c6.272 6.464 14.624 9.696 22.944 9.696 8.032 0 16.096-3.008 22.304-9.056 12.672-12.32 12.96-32.608 0.64-45.248L209.76 159.744z"  ></path><path d="M362.368 617.056l-202.624 197.184 0.8-143.808c0.096-17.696-14.144-32.096-31.808-32.192-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808l-1.248 222.24c0 0.704 0.352 1.312 0.384 2.016 0 0.448-0.256 0.832-0.256 1.312-0.032 17.664 14.272 32 31.968 32.032L352.448 928c0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968s-14.272-32-31.968-32.032l-151.936-0.224 206.4-200.832c12.672-12.352 12.96-32.608 0.64-45.248S375.008 604.704 362.368 617.056z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M863.328 482.56l-317.344-1.12L545.984 162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 318.4L159.616 480.064c-0.032 0-0.064 0-0.096 0-17.632 0-31.936 14.24-32 31.904C127.424 529.632 141.728 544 159.392 544.064l322.592 1.152 0 319.168c0 17.696 14.336 32 32 32s32-14.304 32-32l0-318.944 317.088 1.12c0.064 0 0.096 0 0.128 0 17.632 0 31.936-14.24 32-31.904C895.264 496.992 880.96 482.624 863.328 482.56z"  ></path></symbol><symbol id="icon-move" viewBox="0 0 1024 1024"><path d="M863.744 544 163.424 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l700.32 0c17.696 0 32 14.336 32 32S881.44 544 863.744 544z"  ></path></symbol><symbol id="icon-living" viewBox="0 0 1024 1024"><path d="M514.133333 488.533333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="" ></path><path d="M512 64C264.533333 64 64 264.533333 64 512c0 236.8 183.466667 428.8 416 445.866667v-134.4c-53.333333-59.733333-200.533333-230.4-200.533333-334.933334 0-130.133333 104.533333-234.666667 234.666666-234.666666s234.666667 104.533333 234.666667 234.666666c0 61.866667-49.066667 153.6-145.066667 270.933334l-59.733333 68.266666V960C776.533333 942.933333 960 748.8 960 512c0-247.466667-200.533333-448-448-448z" fill="" ></path></symbol></svg>', l = (l = document.getElementsByTagName("script"))[l.length - 1].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (c) {
      console && console.log(c);
    }
  }
  function u() {
    s || (s = !0, i());
  }
  t = function() {
    var c, h, d, p;
    (p = document.createElement("div")).innerHTML = a, a = null, (d = p.getElementsByTagName("svg")[0]) && (d.setAttribute("aria-hidden", "true"), d.style.position = "absolute", d.style.width = 0, d.style.height = 0, d.style.overflow = "hidden", c = d, (h = document.body).firstChild ? (p = c, (d = h.firstChild).parentNode.insertBefore(p, d)) : h.appendChild(c));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function() {
    document.removeEventListener("DOMContentLoaded", n, !1), t();
  }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (i = t, o = e.document, s = !1, (r = function() {
    try {
      o.documentElement.doScroll("left");
    } catch {
      return void setTimeout(r, 50);
    }
    u();
  })(), o.onreadystatechange = function() {
    o.readyState == "complete" && (o.onreadystatechange = null, u());
  });
})(window);
const x = 0, P = 1, _ = 2, M = 30, w = 8, le = {
  name: "Latte",
  palette: ["#dd7878", "#ea76cb", "#8839ef", "#e64553", "#fe640b", "#df8e1d", "#40a02b", "#209fb5", "#1e66f5", "#7287fd"],
  cssVar: {
    "--main-color": "#444446",
    "--main-bgcolor": "#ffffff",
    "--color": "#777777",
    "--bgcolor": "#f6f6f6"
  }
}, ce = {
  name: "Dark",
  palette: ["#848FA0", "#748BE9", "#D2F9FE", "#4145A5", "#789AFA", "#706CF4", "#EF987F", "#775DD5", "#FCEECF", "#DA7FBC"],
  cssVar: {
    "--main-color": "#ffffff",
    "--main-bgcolor": "#4c4f69",
    "--color": "#cccccc",
    "--bgcolor": "#252526"
  }
};
function q(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}
const Ce = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), ae = function(e, t) {
  if (t.id === e)
    return t;
  if (t.children && t.children.length) {
    for (let n = 0; n < t.children.length; n++) {
      const i = ae(e, t.children[n]);
      if (i)
        return i;
    }
    return null;
  } else
    return null;
}, L = (e, t) => {
  if (e.parent = t, e.children)
    for (let n = 0; n < e.children.length; n++)
      L(e.children[n], e);
};
function de(e) {
  if (e.id = I(), e.children)
    for (let t = 0; t < e.children.length; t++)
      de(e.children[t]);
}
const Ee = (e, t) => {
  let n = Date.now();
  return function(...i) {
    Date.now() - n >= t && (e(...i), n = Date.now());
  };
};
function he(e, t, n, i) {
  const o = i - t, s = e - n;
  let r = Math.atan(Math.abs(o) / Math.abs(s)) / 3.14 * 180;
  s < 0 && o > 0 && (r = 180 - r), s < 0 && o < 0 && (r = 180 + r), s > 0 && o < 0 && (r = 360 - r);
  const a = 20, l = 30, u = r + l, c = r - l;
  return {
    x1: n + Math.cos(Math.PI * u / 180) * a,
    y1: i - Math.sin(Math.PI * u / 180) * a,
    x2: n + Math.cos(Math.PI * c / 180) * a,
    y2: i - Math.sin(Math.PI * c / 180) * a
  };
}
function U(e, t, n) {
  let i, o;
  const s = (e.cy - n) / (t - e.cx);
  return s > e.h / e.w || s < -e.h / e.w ? e.cy - n < 0 ? (i = e.cx - e.h / 2 / s, o = e.cy + e.h / 2) : (i = e.cx + e.h / 2 / s, o = e.cy - e.h / 2) : e.cx - t < 0 ? (i = e.cx + e.w / 2, o = e.cy - e.w * s / 2) : (i = e.cx - e.w / 2, o = e.cy + e.w * s / 2), {
    x: i,
    y: o
  };
}
function G(e, t, n) {
  let i, o;
  const s = (e.cy - n) / (t - e.cx);
  return s > e.h / e.w || s < -e.h / e.w ? e.cy - n < 0 ? (i = e.cx - e.h / 2 / s, o = e.cy + e.h / 2) : (i = e.cx + e.h / 2 / s, o = e.cy - e.h / 2) : e.cx - t < 0 ? (i = e.cx + e.w / 2, o = e.cy - e.w * s / 2) : (i = e.cx - e.w / 2, o = e.cy + e.w * s / 2), {
    x: i,
    y: o
  };
}
function I() {
  return ((/* @__PURE__ */ new Date()).getTime().toString(16) + Math.random().toString(16).substr(2)).substr(2, 16);
}
const ke = function() {
  const e = I();
  return {
    topic: this.newTopicName,
    id: e
  };
};
function xe(e, t) {
  let n = !0;
  for (; t.parent; ) {
    if (t.parent === e) {
      n = !1;
      break;
    }
    t = t.parent;
  }
  return n;
}
const T = (e) => {
  var i;
  const t = (i = e.parent) == null ? void 0 : i.children, n = t.indexOf(e);
  return { siblings: t, index: n };
};
function we(e) {
  const { siblings: t, index: n } = T(e), i = t[n];
  n === 0 ? (t[n] = t[t.length - 1], t[t.length - 1] = i) : (t[n] = t[n - 1], t[n - 1] = i);
}
function Me(e) {
  const { siblings: t, index: n } = T(e), i = t[n];
  n === t.length - 1 ? (t[n] = t[0], t[0] = i) : (t[n] = t[n + 1], t[n + 1] = i);
}
function Y(e) {
  const { siblings: t, index: n } = T(e);
  return t.splice(n, 1), t.length;
}
function Le(e, t) {
  const { siblings: n, index: i } = T(e);
  n.splice(i + 1, 0, t);
}
function $e(e, t) {
  const { siblings: n, index: i } = T(e);
  n.splice(i, 0, t);
}
function Se(e, t) {
  const { siblings: n, index: i } = T(e);
  n[i] = t, t.children = [e];
}
function Te(e, t) {
  Y(e), t.children ? t.children.push(e) : t.children = [e];
}
function Pe(e, t) {
  Y(e);
  const { siblings: n, index: i } = T(t);
  n.splice(i, 0, e);
}
function Oe(e, t) {
  Y(e);
  const { siblings: n, index: i } = T(t);
  n.splice(i + 1, 0, e);
}
function ue(e) {
  return JSON.parse(
    JSON.stringify(e, (n, i) => {
      if (n !== "parent")
        return i;
    })
  );
}
const j = {
  afterMoving: !1,
  // 区别click事件
  mousedown: !1,
  lastX: 0,
  lastY: 0,
  onMove(e, t) {
    if (this.mousedown) {
      if (this.afterMoving = !0, !this.lastX) {
        this.lastX = e.pageX, this.lastY = e.pageY;
        return;
      }
      const n = this.lastX - e.pageX, i = this.lastY - e.pageY;
      t.scrollTo(t.scrollLeft + n, t.scrollTop + i), this.lastX = e.pageX, this.lastY = e.pageY;
    }
  },
  clear() {
    this.afterMoving = !1, this.mousedown = !1, this.lastX = 0, this.lastY = 0;
  }
}, Z = (e) => e.tagName === "ME-TPC";
function Ae(e) {
  e.map.addEventListener("click", (t) => {
    var i;
    const n = t.target;
    if (n.tagName === "ME-EPD")
      e.expandNode(n.previousSibling);
    else if (e.editable)
      Z(n) ? e.selectNode(n, !1, t) : n.tagName === "path" ? ((i = n == null ? void 0 : n.parentElement) == null ? void 0 : i.tagName) === "g" && e.selectLink(n.parentElement) : n.className === "circle" || (e.unselectNode(), e.hideLinkController && e.hideLinkController());
    else
      return;
  }), e.map.addEventListener("dblclick", (t) => {
    if (t.preventDefault(), !e.editable)
      return;
    const n = t.target;
    Z(n) && e.beginEdit(n);
  }), e.map.addEventListener("mousemove", (t) => {
    t.target.contentEditable !== "true" && j.onMove(t, e.container);
  }), e.map.addEventListener("mousedown", (t) => {
    t.target.contentEditable !== "true" && (j.afterMoving = !1, j.mousedown = !0);
  }), e.map.addEventListener("mouseleave", () => {
    j.clear();
  }), e.map.addEventListener("mouseup", () => {
    j.clear();
  });
}
const De = {
  create() {
    return {
      handlers: {},
      showHandler: function() {
        console.log(this.handlers);
      },
      addListener: function(e, t) {
        this.handlers[e] === void 0 && (this.handlers[e] = []), this.handlers[e].push(t);
      },
      fire: function(e, ...t) {
        if (this.handlers[e] instanceof Array) {
          const n = this.handlers[e];
          for (let i = 0; i < n.length; i++)
            n[i](...t);
        }
      },
      removeListener: function(e, t) {
        if (!this.handlers[e])
          return;
        const n = this.handlers[e];
        if (!t)
          n.length = 0;
        else if (n.length)
          for (let i = 0; i < n.length; i++)
            n[i] === t && this.handlers[e].splice(i, 1);
      }
    };
  }
}, R = document, je = function() {
  console.time("layout"), this.nodes.innerHTML = "";
  const e = this.createTopic(this.nodeData);
  Q(e, this.nodeData), e.draggable = !1;
  const t = R.createElement("me-root");
  t.appendChild(e);
  const n = this.nodeData.children || [];
  if (this.direction === _) {
    let i = 0, o = 0;
    n.map((s) => {
      s.direction === x ? i += 1 : s.direction === P ? o += 1 : i <= o ? (s.direction = x, i += 1) : (s.direction = P, o += 1);
    });
  }
  He(this, n, t), console.timeEnd("layout");
}, He = function(e, t, n) {
  const i = R.createElement("me-main");
  i.className = "lhs";
  const o = R.createElement("me-main");
  o.className = "rhs";
  for (let s = 0; s < t.length; s++) {
    const r = t[s], { grp: a } = e.createWrapper(r);
    e.direction === _ ? r.direction === x ? i.appendChild(a) : o.appendChild(a) : e.direction === x ? i.appendChild(a) : o.appendChild(a);
  }
  e.nodes.appendChild(i), e.nodes.appendChild(n), e.nodes.appendChild(o), e.nodes.appendChild(e.lines);
}, Be = function(e, t) {
  const n = R.createElement("me-children");
  for (let i = 0; i < t.length; i++) {
    const o = t[i], { grp: s } = e.createWrapper(o);
    n.appendChild(s);
  }
  return n;
}, k = document, E = (e, t) => (t ? t.mindElixirBox : k).querySelector(`[data-nodeid=me${e}]`), Q = function(e, t) {
  if (e.textContent = t.topic, t.style && (e.style.color = t.style.color || "", e.style.background = t.style.background || "", e.style.fontSize = t.style.fontSize + "px", e.style.fontWeight = t.style.fontWeight || "normal"), t.image) {
    const n = t.image;
    if (n.url && n.width && n.height) {
      const i = k.createElement("img");
      i.src = n.url, i.style.width = n.width + "px", i.style.height = n.height + "px", e.appendChild(i), e.image = i;
    } else
      console.warn("image url/width/height are required");
  }
  if (t.hyperLink) {
    const n = k.createElement("a");
    n.className = "hyper-link", n.target = "_blank", n.innerText = "🔗", n.href = t.hyperLink, e.appendChild(n), e.linkContainer = n, console.log(n);
  } else
    e.linkContainer && (e.linkContainer.remove(), e.linkContainer = null);
  if (t.icons && t.icons.length) {
    const n = k.createElement("span");
    n.className = "icons", n.innerHTML = t.icons.map((i) => `<span>${q(i)}</span>`).join(""), e.appendChild(n), e.icons = n;
  }
  if (t.tags && t.tags.length) {
    const n = k.createElement("div");
    n.className = "tags", n.innerHTML = t.tags.map((i) => `<span>${q(i)}</span>`).join(""), e.appendChild(n), e.tags = n;
  }
  t.branchColor && (e.style.borderColor = t.branchColor);
}, _e = function(e, t) {
  const n = k.createElement("me-wrapper"), { p: i, tpc: o } = this.createParent(e);
  if (n.appendChild(i), !t && e.children && e.children.length > 0) {
    const s = X(e.expanded);
    if (i.appendChild(s), e.expanded !== !1) {
      const r = Be(this, e.children);
      n.appendChild(r);
    }
  }
  return { grp: n, top: i, tpc: o };
}, ze = function(e) {
  const t = k.createElement("me-parent"), n = this.createTopic(e);
  return Q(n, e), t.appendChild(n), { p: t, tpc: n };
}, Ve = function(e) {
  const t = k.createElement("me-children");
  return t.append(...e), t;
}, Fe = function(e) {
  const t = k.createElement("me-tpc");
  return t.nodeObj = e, t.dataset.nodeid = "me" + e.id, t.draggable = this.draggable, t;
};
function qe(e) {
  const t = k.createRange();
  t.selectNodeContents(e);
  const n = window.getSelection();
  n && (n.removeAllRanges(), n.addRange(t));
}
const Re = function(e) {
  if (console.time("createInputDiv"), !e)
    return;
  const t = k.createElement("div"), n = e.childNodes[0].textContent;
  e.appendChild(t), t.id = "input-box", t.textContent = n, t.contentEditable = "true", t.spellcheck = !1, t.style.cssText = `min-width:${e.offsetWidth - 8}px;`, this.direction === x && (t.style.right = "0"), t.focus(), qe(t), this.inputDiv = t, this.bus.fire("operation", {
    name: "beginEdit",
    obj: e.nodeObj
  }), t.addEventListener("keydown", (i) => {
    var s;
    i.stopPropagation();
    const o = i.key;
    if (o === "Enter" || o === "Tab") {
      if (i.shiftKey)
        return;
      i.preventDefault(), (s = this.inputDiv) == null || s.blur(), this.map.focus();
    }
  }), t.addEventListener("blur", () => {
    var s;
    if (!t)
      return;
    const i = e.nodeObj, o = ((s = t.textContent) == null ? void 0 : s.trim()) || "";
    console.log(o), o === "" ? i.topic = n : i.topic = o, t.remove(), this.inputDiv = null, o !== n && (e.childNodes[0].textContent = i.topic, this.linkDiv(), this.bus.fire("operation", {
      name: "finishEdit",
      obj: i,
      origin: n
    }));
  }), console.timeEnd("createInputDiv");
}, X = function(e) {
  const t = k.createElement("me-epd");
  return t.expanded = e !== !1, t.className = e !== !1 ? "minus" : "", t;
}, A = document, D = "http://www.w3.org/2000/svg", Ie = function(e, t) {
  const n = A.createElementNS(D, "path");
  return n.setAttribute("d", e), n.setAttribute("stroke", t || "#666"), n.setAttribute("fill", "none"), n.setAttribute("stroke-width", "3"), n;
}, F = function(e) {
  const t = A.createElementNS(D, "svg");
  return t.setAttribute("class", e), t;
}, ee = function(e, t, n, i) {
  const o = A.createElementNS(D, "line");
  return o.setAttribute("x1", String(e)), o.setAttribute("y1", String(t)), o.setAttribute("x2", String(n)), o.setAttribute("y2", String(i)), o.setAttribute("stroke", "#bbb"), o.setAttribute("fill", "none"), o.setAttribute("stroke-width", "2"), o;
}, Ye = function(e, t) {
  const n = A.createElementNS(D, "path");
  return n.setAttribute("d", e), n.setAttribute("stroke", t || "#555"), n.setAttribute("fill", "none"), n.setAttribute("stroke-linecap", "square"), n.setAttribute("stroke-width", "2"), n;
}, Xe = function(e, t) {
  const n = A.createElementNS(D, "g"), i = A.createElementNS(D, "path"), o = A.createElementNS(D, "path");
  return o.setAttribute("d", t), o.setAttribute("stroke", "rgb(235, 95, 82)"), o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "cap"), o.setAttribute("stroke-width", "2"), i.setAttribute("d", e), i.setAttribute("stroke", "rgb(235, 95, 82)"), i.setAttribute("fill", "none"), i.setAttribute("stroke-linecap", "cap"), i.setAttribute("stroke-width", "2"), n.appendChild(i), n.appendChild(o), n;
}, We = (e, t) => {
  let n = 0, i = 0;
  for (; t && t !== e; )
    n += t.offsetLeft, i += t.offsetTop, t = t.offsetParent;
  return { offsetLeft: n, offsetTop: i };
};
let fe = me;
const Ue = function(e) {
  console.time("linkDiv");
  const t = this.map.querySelector("me-root");
  this.nodes.style.top = `${1e4 - this.nodes.offsetHeight / 2}px`, this.nodes.style.left = `${1e4 - t.offsetLeft - t.offsetWidth / 2}px`;
  const n = this.map.querySelectorAll("me-main > me-wrapper");
  this.lines.innerHTML = "", fe = this.subLinkStyle === 2 ? Je : me;
  for (let i = 0; i < n.length; i++) {
    const o = n[i], s = o.querySelector("me-tpc"), r = o.firstChild, a = o.parentNode.className;
    let l = t.offsetLeft + t.offsetWidth / 2;
    const u = t.offsetTop + t.offsetHeight / 2;
    let c;
    const h = this.theme.palette, d = s.nodeObj.branchColor || h[i % h.length], { offsetLeft: p, offsetTop: g } = We(this.nodes, r);
    a === "lhs" ? c = p + r.offsetWidth : c = p;
    const f = g + r.offsetHeight / 2;
    let m = "";
    if (this.mainLinkStyle === 2)
      this.direction === _ && (a === "lhs" ? l = l - t.offsetWidth / 6 : l = l + t.offsetWidth / 6), m = Ge({ x1: l, y1: u, x2: c, y2: f });
    else {
      const y = (1 - Math.abs(f - o.parentElement.offsetTop - o.parentElement.offsetHeight / 2) / o.parentElement.offsetHeight) * 0.25 * (t.offsetWidth / 2);
      a === "lhs" ? l = l - t.offsetWidth / 10 - y : l = l + t.offsetWidth / 10 + y, m = Ke({ x1: l, y1: u, x2: c, y2: f });
    }
    this.lines.appendChild(Ie(m, d));
    const b = o.children[0].children[1];
    if (b && (b.style.top = (b.parentNode.offsetHeight - b.offsetHeight) / 2 + "px", a === "lhs" ? b.style.left = "-10px" : b.style.right = "-10px"), !(e && e !== o) && o.childElementCount) {
      const v = F("subLines"), y = o.lastChild;
      y.tagName === "svg" && y.remove(), o.appendChild(v);
      const N = o.firstChild, C = o.children[1].children, H = pe(C, N, a, !0);
      v.appendChild(Ye(H, d));
    }
  }
  this.linkSvgGroup.innerHTML = "";
  for (const i in this.linkData) {
    const o = this.linkData[i];
    this.createLink(E(o.from), E(o.to), !0, o);
  }
  console.timeEnd("linkDiv");
}, pe = function(e, t, n, i) {
  let o = "";
  const s = t.offsetTop, r = t.offsetLeft, a = t.offsetWidth, l = t.offsetHeight;
  for (let u = 0; u < e.length; u++) {
    const c = e[u], h = c.firstChild, d = h.offsetTop, p = h.offsetLeft, g = h.offsetWidth, f = h.offsetHeight;
    o += fe({ pT: s, pL: r, pW: a, pH: l, cT: d, cL: p, cW: g, cH: f, direction: n, isFirst: i });
    const m = h.children[1];
    if (m) {
      if (m.style.bottom = -(m.offsetHeight / 2) + "px", n === "lhs" ? m.style.left = "10px" : n === "rhs" && (m.style.right = "10px"), !m.expanded)
        continue;
    } else
      continue;
    const b = c.children[1].children;
    b.length > 0 && (o += pe(b, h, n));
  }
  return o;
};
function Ge({ x1: e, y1: t, x2: n, y2: i }) {
  return `M ${e} ${t} V ${i > t ? i - 20 : i + 20} C ${e} ${i} ${e} ${i} ${n > e ? e + 20 : e - 20} ${i} H ${n}`;
}
function Ke({ x1: e, y1: t, x2: n, y2: i }) {
  return `M ${e} ${t} Q ${e} ${i} ${n} ${i}`;
}
function Je({ pT: e, pL: t, pW: n, pH: i, cT: o, cL: s, cW: r, cH: a, direction: l, isFirst: u }) {
  let c;
  u ? c = e + i / 2 : c = e + i;
  const h = o + a;
  let d = 0, p = 0, g = 0;
  return l === "lhs" ? (d = t + M, p = s, g = s + r) : l === "rhs" && (d = t + n - M, p = s + r, g = s), h < c + 50 && h > c - 50 ? `M ${d} ${c} H ${g} V ${h} H ${p}` : h >= c ? `M ${d} ${c} H ${g} V ${h - w} A ${w} ${w} 0 0 ${d > p ? 1 : 0} ${d > p ? g - w : g + w} ${h} H ${p}` : `M ${d} ${c} H ${g} V ${h + w} A ${w} ${w} 0 0 ${d > p ? 0 : 1} ${d > p ? g - w : g + w} ${h} H ${p}`;
}
function me({ pT: e, pL: t, pW: n, pH: i, cT: o, cL: s, cW: r, cH: a, direction: l, isFirst: u }) {
  let c = 0, h = 0;
  u ? c = e + i / 2 : c = e + i;
  const d = o + a;
  let p = 0, g = 0, f = 0;
  const m = Math.min(Math.abs(c - d) / 800, 1.2) * M;
  return l === "lhs" ? (f = t, p = f + M, g = f - M, h = s + M, `M ${p} ${c} C ${f} ${c} ${f + m} ${d} ${g} ${d} H ${h}`) : (f = t + n, p = f - M, g = f + M, h = s + r - M, `M ${p} ${c} C ${f} ${c} ${f - m} ${d} ${g} ${d} H ${h}`);
}
const te = {
  addChild: "插入子节点",
  addParent: "插入父节点",
  addSibling: "插入同级节点",
  removeNode: "删除节点",
  focus: "专注",
  cancelFocus: "取消专注",
  moveUp: "上移",
  moveDown: "下移",
  link: "连接",
  clickTips: "请点击目标节点"
}, ne = {
  cn: te,
  zh_CN: te,
  zh_TW: {
    addChild: "插入子節點",
    addParent: "插入父節點",
    addSibling: "插入同級節點",
    removeNode: "刪除節點",
    focus: "專注",
    cancelFocus: "取消專注",
    moveUp: "上移",
    moveDown: "下移",
    link: "連接",
    clickTips: "請點擊目標節點"
  },
  en: {
    addChild: "Add child",
    addParent: "Add parent",
    addSibling: "Add sibling",
    removeNode: "Remove node",
    focus: "Focus Mode",
    cancelFocus: "Cancel Focus Mode",
    moveUp: "Move up",
    moveDown: "Move down",
    link: "Link",
    clickTips: "Please click the target node"
  },
  ru: {
    addChild: "Добавить дочерний элемент",
    addParent: "Добавить родительский элемент",
    addSibling: "Добавить на этом уровне",
    removeNode: "Удалить узел",
    focus: "Режим фокусировки",
    cancelFocus: "Отменить режим фокусировки",
    moveUp: "Поднять выше",
    moveDown: "Опустить ниже",
    link: "Ссылка",
    clickTips: "Пожалуйста, нажмите на целевой узел"
  },
  ja: {
    addChild: "子ノードを追加する",
    addParent: "親ノードを追加します",
    addSibling: "兄弟ノードを追加する",
    removeNode: "ノードを削除",
    focus: "集中",
    cancelFocus: "集中解除",
    moveUp: "上へ移動",
    moveDown: "下へ移動",
    link: "コネクト",
    clickTips: "ターゲットノードをクリックしてください"
  },
  pt: {
    addChild: "Adicionar item filho",
    addParent: "Adicionar item pai",
    addSibling: "Adicionar item irmao",
    removeNode: "Remover item",
    focus: "Modo Foco",
    cancelFocus: "Cancelar Modo Foco",
    moveUp: "Mover para cima",
    moveDown: "Mover para baixo",
    link: "Link",
    clickTips: "Favor clicar no item alvo"
  }
};
function Qe(e, t) {
  const n = (v) => {
    const y = document.createElement("div");
    return y.innerText = v, y.style.cssText = "position:absolute;bottom:20px;left:50%;transform:translateX(-50%);", y;
  }, i = (v, y, N) => {
    const C = document.createElement("li");
    return C.id = v, C.innerHTML = `<span>${q(y)}</span><span>${q(N)}</span>`, C;
  }, o = ne[e.locale] ? e.locale : "en", s = ne[o], r = i("cm-add_child", s.addChild, "tab"), a = i("cm-add_parent", s.addParent, ""), l = i("cm-add_sibling", s.addSibling, "enter"), u = i("cm-remove_child", s.removeNode, "delete"), c = i("cm-fucus", s.focus, ""), h = i("cm-unfucus", s.cancelFocus, ""), d = i("cm-up", s.moveUp, "PgUp"), p = i("cm-down", s.moveDown, "Pgdn"), g = i("cm-down", s.link, ""), f = document.createElement("ul");
  if (f.className = "menu-list", f.appendChild(r), f.appendChild(a), f.appendChild(l), f.appendChild(u), (!t || t.focus) && (f.appendChild(c), f.appendChild(h)), f.appendChild(d), f.appendChild(p), (!t || t.link) && f.appendChild(g), t && t.extend)
    for (let v = 0; v < t.extend.length; v++) {
      const y = t.extend[v], N = i(y.name, y.name, y.key || "");
      f.appendChild(N), N.onclick = (C) => {
        y.onclick(C);
      };
    }
  const m = document.createElement("div");
  m.className = "context-menu", m.appendChild(f), m.hidden = !0, e.container.append(m);
  let b = !0;
  e.container.oncontextmenu = function(v) {
    if (v.preventDefault(), !e.editable)
      return;
    const y = v.target;
    if (y.tagName === "ME-TPC") {
      y.parentElement.tagName === "ME-ROOT" ? b = !0 : b = !1, b ? (c.className = "disabled", d.className = "disabled", p.className = "disabled", l.className = "disabled", u.className = "disabled") : (c.className = "", d.className = "", p.className = "", l.className = "", u.className = ""), e.selectNode(y), m.hidden = !1;
      const N = f.offsetHeight, C = f.offsetWidth;
      N + v.clientY > window.innerHeight ? (f.style.top = "", f.style.bottom = "0px") : (f.style.bottom = "", f.style.top = v.clientY + 15 + "px"), C + v.clientX > window.innerWidth ? (f.style.left = "", f.style.right = "0px") : (f.style.right = "", f.style.left = v.clientX + 10 + "px");
    }
  }, m.onclick = (v) => {
    v.target === m && (m.hidden = !0);
  }, r.onclick = () => {
    e.addChild(), m.hidden = !0;
  }, a.onclick = () => {
    e.insertParent(), m.hidden = !0;
  }, l.onclick = () => {
    b || (e.insertSibling(), m.hidden = !0);
  }, u.onclick = () => {
    b || (e.removeNode(), m.hidden = !0);
  }, c.onclick = () => {
    b || (e.focusNode(e.currentNode), m.hidden = !0);
  }, h.onclick = () => {
    e.cancelFocus(), m.hidden = !0;
  }, d.onclick = () => {
    b || (e.moveUpNode(), m.hidden = !0);
  }, p.onclick = () => {
    b || (e.moveDownNode(), m.hidden = !0);
  }, g.onclick = () => {
    m.hidden = !0;
    const v = e.currentNode, y = n(s.clickTips);
    e.container.appendChild(y), e.map.addEventListener(
      "click",
      (N) => {
        N.preventDefault(), y.remove();
        const C = N.target;
        C.parentElement.tagName === "ME-PARENT" || C.parentElement.tagName === "ME-ROOT" ? e.createLink(v, e.currentNode) : console.log("link cancel");
      },
      {
        once: !0
      }
    );
  };
}
const Ze = (e) => {
  const t = e.map.querySelectorAll(".lhs>me-wrapper>me-parent>me-tpc");
  e.selectNode(t[Math.ceil(t.length / 2) - 1]);
}, et = (e) => {
  const t = e.map.querySelectorAll(".rhs>me-wrapper>me-parent>me-tpc");
  e.selectNode(t[Math.ceil(t.length / 2) - 1]);
}, ie = (e) => {
  e.selectNode(e.map.querySelector("me-root>me-tpc"));
};
function tt(e) {
  const t = {
    13: () => {
      e.insertSibling();
    },
    9: () => {
      e.addChild();
    },
    113: () => {
      e.beginEdit();
    },
    38: () => {
      e.selectPrevSibling();
    },
    40: () => {
      e.selectNextSibling();
    },
    37: () => {
      var o;
      if (!e.currentNode)
        return;
      const n = e.currentNode.nodeObj, i = e.currentNode.offsetParent.offsetParent.parentElement;
      e.currentNode.nodeObj.root ? Ze(e) : i.className === "rhs" ? (o = n.parent) != null && o.root ? ie(e) : e.selectParent() : i.className === "lhs" && e.selectFirstChild();
    },
    39: () => {
      var o;
      if (!e.currentNode)
        return;
      const n = e.currentNode.nodeObj, i = e.currentNode.offsetParent.offsetParent.parentElement;
      n.root ? et(e) : i.className === "lhs" ? (o = n.parent) != null && o.root ? ie(e) : e.selectParent() : i.className === "rhs" && e.selectFirstChild();
    },
    33() {
      e.moveUpNode();
    },
    34() {
      e.moveDownNode();
    },
    67: (n) => {
      (n.metaKey || n.ctrlKey) && (e.waitCopy = e.currentNode);
    },
    86: (n) => {
      !e.waitCopy || !e.currentNode || (n.metaKey || n.ctrlKey) && (e.copyNode(e.waitCopy, e.currentNode), e.waitCopy = null);
    },
    // ctrl +
    187: (n) => {
      if (n.metaKey || n.ctrlKey) {
        if (e.scaleVal > 1.6)
          return;
        e.scale(e.scaleVal += 0.2);
      }
    },
    // ctrl -
    189: (n) => {
      if (n.metaKey || n.ctrlKey) {
        if (e.scaleVal < 0.6)
          return;
        e.scale(e.scaleVal -= 0.2);
      }
    }
  };
  e.map.onkeydown = (n) => {
    if (n.preventDefault(), !!e.editable && n.target === n.currentTarget)
      if (n.keyCode === 8 || n.keyCode === 46)
        e.currentLink ? e.removeLink() : e.removeNode();
      else {
        const i = t[n.keyCode];
        i && i(n);
      }
  };
}
function nt(e, t) {
  const n = (d, p) => {
    const g = document.createElement("div");
    return g.id = d, g.innerHTML = `<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-${p}"></use>
  </svg>`, g;
  }, i = n("cm-add_child", "zijiedian"), o = n("cm-add_sibling", "tongjijiedian-"), s = n("cm-remove_child", "shanchu2"), r = n("cm-up", "rising"), a = n("cm-down", "falling"), l = n("cm-edit", "edit"), u = document.createElement("ul");
  if (u.className = "menu-list", t && t.extend)
    for (let d = 0; d < t.extend.length; d++) {
      const p = t.extend[d], g = n(p.name, p.name);
      u.appendChild(g), g.onclick = (f) => {
        p.onclick(f);
      };
    }
  const c = document.createElement("mmenu");
  c.className = "mobile-menu", c.appendChild(i), c.appendChild(o), c.appendChild(s), c.appendChild(r), c.appendChild(a), c.appendChild(l), c.hidden = !0, e.container.append(c);
  let h = !0;
  e.bus.addListener("unselectNode", function() {
    c.hidden = !0;
  }), e.bus.addListener("selectNode", function(d) {
    c.hidden = !1, d.root ? h = !0 : h = !1;
  }), c.onclick = (d) => {
    d.target === c && (c.hidden = !0);
  }, i.onclick = () => {
    e.addChild();
  }, o.onclick = () => {
    h || e.insertSibling();
  }, s.onclick = () => {
    h || e.removeNode();
  }, r.onclick = (d) => {
    h || e.moveUpNode();
  }, a.onclick = (d) => {
    h || e.moveDownNode();
  }, l.onclick = (d) => {
    e.beginEdit();
  };
}
const K = document, it = function(e, t) {
  if (!t)
    return J(e), e;
  const n = e.getElementsByClassName("insert-preview"), i = `insert-preview ${t} show`;
  if (n.length > 0)
    n[0].className = i;
  else {
    const o = K.createElement("div");
    o.className = i, e.appendChild(o);
  }
  return e;
}, J = function(e) {
  if (!e)
    return;
  const t = e.getElementsByClassName("insert-preview");
  for (const n of t || [])
    n.remove();
}, oe = function(e, t) {
  const n = t.parentElement.parentElement.contains(e);
  return e && e.tagName === "ME-TPC" && e !== t && !n && e.nodeObj.root !== !0;
}, ot = function(e) {
  const t = document.createElement("div");
  return t.className = "mind-elixir-ghost", e.map.appendChild(t), t;
};
function st(e) {
  let t = null, n = null, i = null;
  const o = ot(e), s = 12;
  e.map.addEventListener("dragstart", (r) => {
    var a;
    t = r.target, t.parentElement.parentElement.style.opacity = "0.5", o.innerHTML = t.innerHTML, (a = r.dataTransfer) == null || a.setDragImage(o, 0, 0), j.clear();
  }), e.map.addEventListener("dragend", async (r) => {
    if (!t)
      return;
    t.parentElement.parentElement.style.opacity = "1";
    const a = r.target;
    if (a.style.opacity = "", !i)
      return;
    J(i);
    const l = t.nodeObj;
    switch (n) {
      case "before":
        e.moveNodeBefore(t, i), e.selectNode(E(l.id));
        break;
      case "after":
        e.moveNodeAfter(t, i), e.selectNode(E(l.id));
        break;
      case "in":
        e.moveNode(t, i);
        break;
    }
    t = null;
  }), e.map.addEventListener(
    "dragover",
    Ee(function(r) {
      if (!t)
        return;
      J(i);
      const a = K.elementFromPoint(r.clientX, r.clientY - s);
      if (oe(a, t)) {
        i = a;
        const l = a.getBoundingClientRect().y;
        r.clientY > l + a.clientHeight ? n = "after" : r.clientY > l + a.clientHeight / 2 && (n = "in");
      } else {
        const l = K.elementFromPoint(r.clientX, r.clientY + s);
        if (oe(l, t)) {
          i = l;
          const u = l.getBoundingClientRect().y;
          r.clientY < u ? n = "before" : r.clientY < u + l.clientHeight / 2 && (n = "in");
        } else
          n = i = null;
      }
      i && it(i, n);
    }, 200)
  );
}
function rt(e) {
  let t = [], n = -1, i = e.getData();
  e.bus.addListener("operation", (o) => {
    if (o.name === "beginEdit")
      return;
    t = t.slice(0, n + 1);
    const s = e.getData();
    t.push({ prev: i, currentNodeId: o.obj.id, next: s }), i = s, n = t.length - 1, console.log("operation", o.obj.id, t);
  }), e.undo = function() {
    if (n > -1) {
      const o = t[n];
      i = o.prev, e.refresh(o.prev), e.selectNode(E(o.currentNodeId)), n--, console.log("current", i);
    }
  }, e.redo = function() {
    if (n < t.length - 1) {
      n++;
      const o = t[n];
      i = o.next, e.refresh(o.next), e.selectNode(E(o.currentNodeId));
    }
  }, e.map.addEventListener("keydown", (o) => {
    (o.metaKey || o.ctrlKey) && o.shiftKey && o.key === "Z" ? e.redo() : (o.metaKey || o.ctrlKey) && o.key === "z" && e.undo();
  });
}
const O = (e, t) => {
  const n = document.createElement("span");
  return n.id = e, n.innerHTML = `<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-${t}"></use>
  </svg>`, n;
};
function lt(e) {
  const t = document.createElement("div"), n = O("fullscreen", "full"), i = O("toCenter", "living"), o = O("zoomout", "move"), s = O("zoomin", "add"), r = document.createElement("span");
  return r.innerText = "100%", t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(s), t.className = "mind-elixir-toolbar rb", n.onclick = () => {
    e.container.requestFullscreen();
  }, i.onclick = () => {
    e.toCenter();
  }, o.onclick = () => {
    e.scaleVal < 0.6 || e.scale(e.scaleVal -= 0.2);
  }, s.onclick = () => {
    e.scaleVal > 1.6 || e.scale(e.scaleVal += 0.2);
  }, t;
}
function ct(e) {
  const t = document.createElement("div"), n = O("tbltl", "left"), i = O("tbltr", "right"), o = O("tblts", "side");
  return t.appendChild(n), t.appendChild(i), t.appendChild(o), t.className = "mind-elixir-toolbar lt", n.onclick = () => {
    e.initLeft();
  }, i.onclick = () => {
    e.initRight();
  }, o.onclick = () => {
    e.initSide();
  }, t;
}
function at(e) {
  e.container.append(lt(e)), e.container.append(ct(e));
}
const dt = function(e, t = !0) {
  this.theme = e;
  const n = this.theme.cssVar, i = Object.keys(n);
  for (let o = 0; o < i.length; o++) {
    const s = i[o];
    this.mindElixirBox.style.setProperty(s, n[s]);
  }
  t && this.refresh();
};
function ge(e) {
  return {
    nodeData: e.isFocusMode ? e.nodeDataBackup : e.nodeData,
    linkData: e.linkData,
    direction: e.direction,
    theme: e.theme
  };
}
const ht = function(e, t, n) {
  if (e) {
    if (console.time("selectNode"), typeof e == "string") {
      const i = E(e);
      return i ? this.selectNode(i) : void 0;
    }
    this.currentNode && (this.currentNode.className = ""), e.className = "selected", e.scrollIntoView({ block: "nearest", inline: "nearest" }), this.currentNode = e, t ? this.bus.fire("selectNewNode", e.nodeObj) : this.bus.fire("selectNode", e.nodeObj, n), console.timeEnd("selectNode");
  }
}, ut = function() {
  this.currentNode && (this.currentNode.className = ""), this.currentNode = null, this.bus.fire("unselectNode");
}, ft = function() {
  if (!this.currentNode || this.currentNode.dataset.nodeid === "meroot")
    return !1;
  const e = this.currentNode.parentElement.parentElement.nextSibling;
  let t;
  if (e)
    t = e.firstChild.firstChild;
  else
    return !1;
  return this.selectNode(t), !0;
}, pt = function() {
  if (!this.currentNode || this.currentNode.dataset.nodeid === "meroot")
    return !1;
  const e = this.currentNode.parentElement.parentElement.previousSibling;
  let t;
  if (e)
    t = e.firstChild.firstChild;
  else
    return !1;
  return this.selectNode(t), !0;
}, mt = function() {
  if (!this.currentNode)
    return;
  const e = this.currentNode.parentElement.nextSibling;
  if (e && e.firstChild) {
    const t = e.firstChild.firstChild.firstChild;
    this.selectNode(t);
  }
}, gt = function() {
  if (!this.currentNode || this.currentNode.dataset.nodeid === "meroot")
    return;
  const e = this.currentNode.parentElement.parentElement.parentElement.previousSibling;
  if (e) {
    const t = e.firstChild;
    this.selectNode(t);
  }
}, bt = function() {
  const e = ge(this);
  return JSON.stringify(e, (t, n) => {
    if (t !== "parent")
      return t === "from" || t === "to" ? n.nodeObj.id : n;
  });
}, vt = function() {
  return JSON.parse(this.getDataString());
}, yt = function() {
  const e = ge(this).nodeData;
  let t = "# " + e.topic + `

`;
  function n(i, o) {
    for (let s = 0; s < i.length; s++)
      o <= 6 ? t += "".padStart(o, "#") + " " + i[s].topic + `

` : t += "".padStart(o - 7, "	") + "- " + i[s].topic + `
`, i[s].children && n(i[s].children || [], o + 1);
  }
  return n(e.children || [], 2), t;
}, Nt = function() {
  this.editable = !0;
}, Ct = function() {
  this.editable = !1;
}, Et = function(e) {
  this.scaleVal = e, this.map.style.transform = "scale(" + e + ")";
}, kt = function() {
  this.container.scrollTo(1e4 - this.container.offsetWidth / 2, 1e4 - this.container.offsetHeight / 2);
}, xt = function(e) {
  e(this);
}, wt = function(e) {
  e.nodeObj.root || (this.tempDirection === null && (this.tempDirection = this.direction), this.isFocusMode || (this.nodeDataBackup = this.nodeData, this.isFocusMode = !0), this.nodeData = e.nodeObj, this.nodeData.root = !0, this.initRight(), this.toCenter());
}, Mt = function() {
  this.isFocusMode = !1, this.tempDirection !== null && (delete this.nodeData.root, this.nodeData = this.nodeDataBackup, this.direction = this.tempDirection, this.tempDirection = null, this.refresh(), this.toCenter());
}, Lt = function() {
  this.direction = 0, this.refresh();
}, $t = function() {
  this.direction = 1, this.refresh();
}, St = function() {
  this.direction = 2, this.refresh();
}, Tt = function(e) {
  this.locale = e, this.refresh();
}, Pt = function(e, t) {
  const n = e.nodeObj;
  typeof t == "boolean" ? n.expanded = t : n.expanded !== !1 ? n.expanded = !1 : n.expanded = !0, this.layout(), this.linkDiv(), this.bus.fire("expandNode", n);
}, Ot = function(e) {
  e = JSON.parse(JSON.stringify(e)), e && (this.nodeData = e.nodeData, this.linkData = e.linkData || {}), L(this.nodeData), this.layout(), this.linkDiv();
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cancelFocus: Mt,
  disableEdit: Ct,
  enableEdit: Nt,
  expandNode: Pt,
  focusNode: wt,
  getData: vt,
  getDataMd: yt,
  getDataString: bt,
  initLeft: Lt,
  initRight: $t,
  initSide: St,
  install: xt,
  refresh: Ot,
  scale: Et,
  selectFirstChild: mt,
  selectNextSibling: ft,
  selectNode: ht,
  selectParent: gt,
  selectPrevSibling: pt,
  setLocale: Tt,
  toCenter: kt,
  unselectNode: ut
}, Symbol.toStringTag, { value: "Module" })), W = function(e) {
  const n = e.parentElement.parentElement.lastElementChild;
  (n == null ? void 0 : n.tagName) === "svg" && (n == null || n.remove());
}, be = function(e, t) {
  var n, i;
  if (e === x)
    return x;
  if (e === P)
    return P;
  if (e === _) {
    const o = ((n = document.querySelector(".lhs")) == null ? void 0 : n.childElementCount) || 0, s = ((i = document.querySelector(".rhs")) == null ? void 0 : i.childElementCount) || 0;
    return o <= s ? (t.direction = x, x) : (t.direction = P, P);
  }
}, Dt = function(e, t) {
  console.log(t);
  const n = e.nodeObj, i = ue(n);
  i.style && t.style && (t.style = Object.assign(i.style, t.style));
  const o = Object.assign(n, t);
  Q(e, o), this.linkDiv(), this.bus.fire("operation", {
    name: "reshapeNode",
    obj: o,
    origin: i
  });
}, jt = function(e, t) {
  const n = e || this.currentNode;
  if (!n)
    return;
  const i = n.nodeObj;
  if (i.root === !0) {
    this.addChild();
    return;
  }
  const o = t || this.generateNewObj();
  Le(i, o), L(this.nodeData);
  const s = n.parentElement;
  console.time("insertSibling_DOM");
  const { grp: r, top: a } = this.createWrapper(o);
  s.parentNode.parentNode.insertBefore(r, s.parentNode.nextSibling), this.linkDiv(r.offsetParent), t || this.createInputDiv(a.firstChild), this.selectNode(a.firstChild, !0), console.timeEnd("insertSibling_DOM"), this.bus.fire("operation", {
    name: "insertSibling",
    obj: o
  });
}, Ht = function(e, t) {
  const n = e || this.currentNode;
  if (!n)
    return;
  const i = n.nodeObj;
  if (i.root === !0) {
    this.addChild();
    return;
  }
  const o = t || this.generateNewObj();
  $e(i, o), L(this.nodeData);
  const s = n.parentElement;
  console.time("insertSibling_DOM");
  const { grp: r, top: a } = this.createWrapper(o);
  s.parentNode.parentNode.insertBefore(r, s.parentNode), this.linkDiv(r.offsetParent), t || this.createInputDiv(a.firstChild), this.selectNode(a.firstChild, !0), console.timeEnd("insertSibling_DOM"), this.bus.fire("operation", {
    name: "insertBefore",
    obj: o
  });
}, Bt = function(e, t) {
  const n = e || this.currentNode;
  if (!n)
    return;
  W(n);
  const i = n.nodeObj;
  if (i.root === !0)
    return;
  const o = t || this.generateNewObj();
  Se(i, o), L(this.nodeData);
  const s = n.parentElement.parentElement;
  console.time("insertParent_DOM");
  const { grp: r, top: a } = this.createWrapper(o, !0);
  a.appendChild(X(!0)), s.insertAdjacentElement("afterend", r);
  const l = this.createChildren([s]);
  a.insertAdjacentElement("afterend", l), this.linkDiv(), t || this.createInputDiv(a.firstChild), this.selectNode(a.firstChild, !0), console.timeEnd("insertParent_DOM"), this.bus.fire("operation", {
    name: "insertParent",
    obj: o
  });
}, ve = function(e, t) {
  var a, l;
  if (!e)
    return null;
  const n = e.nodeObj;
  n.expanded === !1 && (this.expandNode(e, !0), e = E(n.id));
  const i = t || this.generateNewObj();
  n.children ? n.children.push(i) : n.children = [i], L(this.nodeData);
  const o = e.parentElement, { grp: s, top: r } = this.createWrapper(i);
  if (o.tagName === "ME-PARENT") {
    if (o.children[1])
      o.nextSibling.appendChild(s);
    else {
      const u = this.createChildren([s]);
      o.appendChild(X(!0)), o.insertAdjacentElement("afterend", u);
    }
    this.linkDiv(s.offsetParent);
  } else
    o.tagName === "ME-ROOT" && (be(this.direction, i) === x ? (a = document.querySelector(".lhs")) == null || a.appendChild(s) : (l = document.querySelector(".rhs")) == null || l.appendChild(s), this.linkDiv());
  return { newTop: r, newNodeObj: i };
}, _t = function(e, t) {
  console.time("addChild");
  const n = e || this.currentNode;
  if (!n)
    return;
  const i = ve.call(this, n, t);
  if (!i)
    return;
  const { newTop: o, newNodeObj: s } = i;
  this.bus.fire("operation", {
    name: "addChild",
    obj: s
  }), console.timeEnd("addChild"), t || this.createInputDiv(o.firstChild), this.selectNode(o.firstChild, !0);
}, zt = function(e, t) {
  console.time("copyNode");
  const n = ue(e.nodeObj);
  de(n);
  const i = ve.call(this, t, n);
  if (!i)
    return;
  const { newNodeObj: o } = i;
  console.timeEnd("copyNode"), this.bus.fire("operation", {
    name: "copyNode",
    obj: o
  });
}, Vt = function(e) {
  const t = e || this.currentNode;
  if (!t)
    return;
  const n = t.parentNode.parentNode, i = t.nodeObj;
  we(i), n.parentNode.insertBefore(n, n.previousSibling), this.linkDiv(), this.bus.fire("operation", {
    name: "moveUpNode",
    obj: i
  });
}, Ft = function(e) {
  const t = e || this.currentNode;
  if (!t)
    return;
  const n = t.parentNode.parentNode, i = t.nodeObj;
  Me(i), n.nextSibling ? n.nextSibling.insertAdjacentElement("afterend", n) : n.parentNode.prepend(n), this.linkDiv(), this.bus.fire("operation", {
    name: "moveDownNode",
    obj: i
  });
}, qt = function(e) {
  var u;
  const t = e || this.currentNode;
  if (!t)
    return;
  console.log("removeNode", t);
  const n = t.nodeObj;
  if (n.root === !0)
    throw new Error("Can not remove root node");
  const i = n.parent.children, o = i.findIndex((c) => c === n), s = i[o + 1], r = s && s.id, a = Y(n), l = t.parentNode;
  if (a === 0) {
    const c = l.parentNode.parentNode;
    c.tagName !== "ME-MAIN" && c.previousSibling.children[1].remove(), this.selectParent();
  } else
    this.selectPrevSibling() || this.selectNextSibling();
  for (const c in this.linkData) {
    const h = this.linkData[c];
    if (h.from === n.id || h.to === n.id) {
      const d = this.mindElixirBox.querySelector(`[data-linkid=${this.linkData[c].id}]`);
      this.removeLink(d);
    }
  }
  l.parentNode.remove(), this.linkDiv(), this.bus.fire("operation", {
    name: "removeNode",
    obj: n,
    originSiblingId: r,
    originParentId: (u = n == null ? void 0 : n.parent) == null ? void 0 : u.id
  });
}, Rt = function(e, t) {
  var a;
  const n = e.nodeObj, i = t.nodeObj, o = (a = n == null ? void 0 : n.parent) == null ? void 0 : a.id;
  if (i.expanded === !1 && (this.expandNode(t, !0), e = E(n.id), t = E(i.id)), !xe(n, i)) {
    console.warn("Invalid move");
    return;
  }
  console.time("moveNode"), Te(n, i), L(this.nodeData);
  const s = e.parentElement, r = t.parentElement;
  if (r.tagName === "ME-PARENT")
    if (W(e), r.children[1])
      r.nextSibling.appendChild(s.parentElement);
    else {
      const l = this.createChildren([s.parentElement]);
      r.appendChild(X(!0)), r.parentElement.insertBefore(l, r.nextSibling);
    }
  else
    r.tagName === "ME-ROOT" && (be(this.direction, n), r.nextSibling.appendChild(s.parentElement));
  this.linkDiv(), this.bus.fire("operation", {
    name: "moveNode",
    obj: n,
    toObj: i,
    originParentId: o
  }), console.timeEnd("moveNode");
}, It = function(e, t) {
  var u;
  const n = e.nodeObj, i = t.nodeObj, o = (u = n.parent) == null ? void 0 : u.id;
  Pe(n, i), L(this.nodeData), W(e);
  const r = e.parentElement.parentNode;
  t.parentElement.parentNode.insertAdjacentElement("beforebegin", r), this.linkDiv(), this.bus.fire("operation", {
    name: "moveNodeBefore",
    obj: n,
    toObj: i,
    originParentId: o
  });
}, Yt = function(e, t) {
  var u;
  const n = e.nodeObj, i = t.nodeObj, o = (u = n.parent) == null ? void 0 : u.id;
  Oe(n, i), L(this.nodeData), W(e);
  const r = e.parentElement.parentElement;
  t.parentElement.parentElement.insertAdjacentElement("afterend", r), this.linkDiv(), this.bus.fire("operation", {
    name: "moveNodeAfter",
    obj: n,
    toObj: i,
    originParentId: o
  });
}, Xt = function(e) {
  const t = e || this.currentNode;
  t && this.createInputDiv(t);
}, Wt = function(e, t) {
  e.childNodes[0].textContent = t, e.nodeObj.topic = t, this.linkDiv();
}, ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addChild: _t,
  beginEdit: Xt,
  copyNode: zt,
  insertBefore: Ht,
  insertParent: Bt,
  insertSibling: jt,
  moveDownNode: Ft,
  moveNode: Rt,
  moveNodeAfter: Yt,
  moveNodeBefore: It,
  moveUpNode: Vt,
  removeNode: qt,
  reshapeNode: Dt,
  setNodeTopic: Wt
}, Symbol.toStringTag, { value: "Module" })), Ut = function(e) {
  return {
    dom: e,
    mousedown: !1,
    lastX: 0,
    lastY: 0,
    handleMouseMove(t) {
      if (t.stopPropagation(), this.mousedown) {
        if (!this.lastX) {
          this.lastX = t.pageX, this.lastY = t.pageY;
          return;
        }
        const n = this.lastX - t.pageX, i = this.lastY - t.pageY;
        this.cb && this.cb(n, i), this.lastX = t.pageX, this.lastY = t.pageY;
      }
    },
    handleMouseDown(t) {
      t.stopPropagation(), this.mousedown = !0;
    },
    handleClear(t) {
      t.stopPropagation(), this.clear();
    },
    cb: null,
    init(t, n) {
      this.cb = n, this.handleClear = this.handleClear.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleMouseDown = this.handleMouseDown.bind(this), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseleave", this.handleClear), t.addEventListener("mouseup", this.handleClear), this.dom.addEventListener("mousedown", this.handleMouseDown);
    },
    destory(t) {
      t.removeEventListener("mousemove", this.handleMouseMove), t.removeEventListener("mouseleave", this.handleClear), t.removeEventListener("mouseup", this.handleClear), this.dom.removeEventListener("mousedown", this.handleMouseDown);
    },
    clear() {
      this.mousedown = !1, this.lastX = 0, this.lastY = 0;
    }
  };
}, se = {
  create: Ut
}, Gt = function(e, t, n, i) {
  const o = this.map.getBoundingClientRect();
  if (!e || !t)
    return;
  const s = e.getBoundingClientRect(), r = t.getBoundingClientRect(), a = (s.x + s.width / 2 - o.x) / this.scaleVal, l = (s.y + s.height / 2 - o.y) / this.scaleVal, u = (r.x + r.width / 2 - o.x) / this.scaleVal, c = (r.y + r.height / 2 - o.y) / this.scaleVal;
  let h, d, p, g;
  n && i ? (h = a + i.delta1.x, d = l + i.delta1.y, p = u + i.delta2.x, g = c + i.delta2.y) : (l + c) / 2 - l <= s.height / 2 ? (h = (s.x + s.width - o.x) / this.scaleVal + 100, d = l, p = (r.x + r.width - o.x) / this.scaleVal + 100, g = c) : (h = (a + u) / 2, d = (l + c) / 2, p = (a + u) / 2, g = (l + c) / 2);
  const f = {
    cx: a,
    cy: l,
    w: s.width,
    h: s.height
  }, m = {
    cx: u,
    cy: c,
    w: r.width,
    h: r.height
  }, b = U(f, h, d), v = b.x, y = b.y, N = G(m, p, g), C = N.x, H = N.y, z = he(p, g, C, H), S = {
    id: "",
    label: "",
    from: e.nodeObj.id,
    to: t.nodeObj.id,
    delta1: {
      x: h - a,
      y: d - l
    },
    delta2: {
      x: p - u,
      y: g - c
    }
  }, V = Xe(
    `M ${v} ${y} C ${h} ${d} ${p} ${g} ${C} ${H}`,
    `M ${z.x1} ${z.y1} L ${C} ${H} L ${z.x2} ${z.y2}`
  );
  n && i ? (S.id = i.id, this.linkData[i.id] = S) : (S.id = I(), this.linkData[S.id] = S, this.currentLink = V), V.linkObj = S, V.dataset.linkid = S.id, this.linkSvgGroup.appendChild(V), n || this.showLinkController(h, d, p, g, S, f, m);
}, Kt = function(e) {
  let t;
  if (e ? t = e : t = this.currentLink, !t)
    return;
  console.log(t), this.hideLinkController();
  const n = t.linkObj.id;
  console.log(n), delete this.linkData[n], t.remove(), t = null;
}, Jt = function(e) {
  this.currentLink = e;
  const t = e.linkObj;
  if (!t)
    return;
  const n = t.from, i = t.to, o = this.map.getBoundingClientRect(), s = E(n).getBoundingClientRect(), r = E(i).getBoundingClientRect(), a = (s.x + s.width / 2 - o.x) / this.scaleVal, l = (s.y + s.height / 2 - o.y) / this.scaleVal, u = (r.x + r.width / 2 - o.x) / this.scaleVal, c = (r.y + r.height / 2 - o.y) / this.scaleVal, h = {
    cx: a,
    cy: l,
    w: s.width,
    h: s.height
  }, d = {
    cx: u,
    cy: c,
    w: r.width,
    h: r.height
  }, p = a + t.delta1.x, g = l + t.delta1.y, f = u + t.delta2.x, m = c + t.delta2.y;
  this.showLinkController(p, g, f, m, t, h, d);
}, Qt = function() {
  this.linkController.style.display = "none", this.P2.style.display = "none", this.P3.style.display = "none";
}, Zt = function(e, t, n, i, o, s, r) {
  this.linkController.style.display = "initial", this.P2.style.display = "initial", this.P3.style.display = "initial";
  const a = U(s, e, t);
  let l = a.x, u = a.y;
  const c = G(r, n, i);
  let h = c.x, d = c.y;
  this.P2.style.cssText = `top:${t}px;left:${e}px;`, this.P3.style.cssText = `top:${i}px;left:${n}px;`, this.line1.setAttribute("x1", l), this.line1.setAttribute("y1", u), this.line1.setAttribute("x2", e), this.line1.setAttribute("y2", t), this.line2.setAttribute("x1", n), this.line2.setAttribute("y1", i), this.line2.setAttribute("x2", h), this.line2.setAttribute("y2", d), this.helper1 && (this.helper1.destory(this.map), this.helper2.destory(this.map)), this.helper1 = se.create(this.P2), this.helper2 = se.create(this.P3), this.helper1.init(this.map, (p, g) => {
    var m;
    e = e - p / this.scaleVal, t = t - g / this.scaleVal;
    const f = U(s, e, t);
    l = f.x, u = f.y, this.P2.style.top = t + "px", this.P2.style.left = e + "px", (m = this.currentLink) == null || m.children[0].setAttribute("d", `M ${l} ${u} C ${e} ${t} ${n} ${i} ${h} ${d}`), this.line1.setAttribute("x1", l), this.line1.setAttribute("y1", u), this.line1.setAttribute("x2", e), this.line1.setAttribute("y2", t), o.delta1.x = e - s.cx, o.delta1.y = t - s.cy;
  }), this.helper2.init(this.map, (p, g) => {
    var b, v;
    n = n - p / this.scaleVal, i = i - g / this.scaleVal;
    const f = G(r, n, i);
    h = f.x, d = f.y;
    const m = he(n, i, h, d);
    this.P3.style.top = i + "px", this.P3.style.left = n + "px", (b = this.currentLink) == null || b.children[0].setAttribute("d", `M ${l} ${u} C ${e} ${t} ${n} ${i} ${h} ${d}`), (v = this.currentLink) == null || v.children[1].setAttribute("d", `M ${m.x1} ${m.y1} L ${h} ${d} L ${m.x2} ${m.y2}`), this.line2.setAttribute("x1", n), this.line2.setAttribute("y1", i), this.line2.setAttribute("x2", h), this.line2.setAttribute("y2", d), o.delta2.x = n - r.cx, o.delta2.y = i - r.cy;
  });
}, en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createLink: Gt,
  hideLinkController: Qt,
  removeLink: Kt,
  selectLink: Jt,
  showLinkController: Zt
}, Symbol.toStringTag, { value: "Module" }));
function tn(e, t) {
  return async function(...n) {
    const i = this.before[t];
    i && !await i.apply(this, n) || e.apply(this, n);
  };
}
const re = Object.keys(ye), Ne = {};
for (let e = 0; e < re.length; e++) {
  const t = re[e];
  Ne[t] = tn(ye[t], t);
}
const nn = {
  getObjById: ae,
  generateNewObj: ke,
  layout: je,
  linkDiv: Ue,
  createInputDiv: Re,
  createWrapper: _e,
  createParent: ze,
  createChildren: Ve,
  createTopic: Fe,
  findEle: E,
  changeTheme: dt,
  ...At,
  ...Ne,
  ...en,
  init(e) {
    if (!e || !e.nodeData)
      return new Error("MindElixir: `data` is required");
    e.direction !== void 0 && (this.direction = e.direction), this.changeTheme(e.theme || this.theme, !1), this.nodeData = e.nodeData, L(this.nodeData), this.linkData = e.linkData || {}, this.toolBar && at(this), this.keypress && tt(this), Ce() && this.mobileMenu ? nt(this) : this.contextMenu && Qe(this, this.contextMenuOption), this.draggable && st(this), this.allowUndo && rt(this), this.toCenter(), this.layout(), this.linkDiv();
  }
}, B = document;
function $({
  el: e,
  direction: t,
  locale: n,
  draggable: i,
  editable: o,
  contextMenu: s,
  contextMenuOption: r,
  toolBar: a,
  keypress: l,
  before: u,
  newTopicName: c,
  allowUndo: h,
  mainLinkStyle: d,
  subLinkStyle: p,
  overflowHidden: g,
  mobileMenu: f,
  theme: m
}) {
  console.log("ME_version " + $.version, this);
  let b = null;
  const v = Object.prototype.toString.call(e);
  if (v === "[object HTMLDivElement]" ? b = e : v === "[object String]" && (b = document.querySelector(e)), !b)
    throw new Error("MindElixir: el is not a valid element");
  b.className += " mind-elixir", b.innerHTML = "", b.style.setProperty("--gap", M + "px"), this.mindElixirBox = b, this.before = u || {}, this.locale = n || "en", this.contextMenuOption = r, this.contextMenu = s === void 0 ? !0 : s, this.toolBar = a === void 0 ? !0 : a, this.keypress = l === void 0 ? !0 : l, this.mobileMenu = f || !1, this.direction = typeof t == "number" ? t : 1, this.draggable = i === void 0 ? !0 : i, this.newTopicName = c || "new node", this.editable = o === void 0 ? !0 : o, this.allowUndo = h === void 0 ? !1 : h, this.currentNode = null, this.currentLink = null, this.inputDiv = null, this.scaleVal = 1, this.tempDirection = null, this.mainLinkStyle = d || 0, this.subLinkStyle = p || 0, this.overflowHidden = g || !1, this.bus = De.create(), this.container = B.createElement("div"), this.container.className = "map-container";
  const y = window.matchMedia("(prefers-color-scheme: dark)");
  this.theme = m || (y.matches ? ce : le);
  const N = B.createElement("div");
  N.className = "map-canvas", this.map = N, this.map.setAttribute("tabindex", "0"), this.container.appendChild(this.map), this.mindElixirBox.appendChild(this.container), this.nodes = B.createElement("me-nodes"), this.nodes.className = "main-node-container", this.lines = F("lines"), this.linkController = F("linkcontroller"), this.P2 = B.createElement("div"), this.P3 = B.createElement("div"), this.P2.className = this.P3.className = "circle", this.P2.style.display = this.P3.style.display = "none", this.line1 = ee(0, 0, 0, 0), this.line2 = ee(0, 0, 0, 0), this.linkController.appendChild(this.line1), this.linkController.appendChild(this.line2), this.linkSvgGroup = F("topiclinks"), this.map.appendChild(this.nodes), this.map.appendChild(this.linkController), this.map.appendChild(this.linkSvgGroup), this.map.appendChild(this.P2), this.map.appendChild(this.P3), this.overflowHidden ? this.container.style.overflow = "hidden" : Ae(this);
}
$.prototype = nn;
$.LEFT = x;
$.RIGHT = P;
$.SIDE = _;
$.THEME = le;
$.DARK_THEME = ce;
$.version = "3.0.0";
$.E = E;
$.new = (e) => ({
  nodeData: {
    id: I(),
    topic: e || "new topic",
    root: !0,
    children: []
  },
  linkData: {}
});
export {
  $ as default,
  nn as methods
};
