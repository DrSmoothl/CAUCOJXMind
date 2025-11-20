import MindElixir from "https://cdn.jsdelivr.net/npm/mind-elixir@^3.0.0/dist/MindElixir.js";

// 思维导图数据结构（从 jsmind 转换为 MindElixir 格式）
const mindMapData = {
    nodeData: {
        id: "root",
        topic: "算法",
        root: true,
        expanded: true,
        children: [
            {
                id: "基础算法",
                topic: "基础算法",
                expanded: true,
                children: [
                    { id: "枚举", topic: "枚举" },
                    { 
                        id: "模拟", 
                        topic: "模拟",
                        children: [
                            { id: "思维模拟", topic: "思维模拟" },
                            { id: "暴力模拟", topic: "暴力模拟" }
                        ]
                    },
                    { id: "递归", topic: "递归" },
                    { id: "贪心", topic: "贪心" },
                    { id: "二分", topic: "二分" },
                    { id: "排序", topic: "排序" },
                    { id: "构造", topic: "构造" },
                    { id: "位运算", topic: "位运算" },
                    { id: "高精度", topic: "高精度" },
                    { id: "区间合并", topic: "区间合并" },
                    { id: "前缀和与差分", topic: "前缀和与差分" },
                    { id: "离散化", topic: "离散化" },
                    { id: "双指针", topic: "双指针" },
                    { id: "打表", topic: "打表" },
                    { id: "快速幂", topic: "快速幂" }
                ]
            },
            {
                id: "数据结构",
                topic: "数据结构",
                expanded: true,
                children: [
                    {
                        id: "栈",
                        topic: "栈",
                        children: [
                            { id: "普通栈", topic: "普通栈" },
                            { id: "单调栈", topic: "单调栈" }
                        ]
                    },
                    {
                        id: "队列",
                        topic: "队列",
                        children: [
                            { id: "普通队列", topic: "普通队列" },
                            { id: "双端队列", topic: "双端队列" },
                            { id: "单调队列", topic: "单调队列" }
                        ]
                    },
                    {
                        id: "链表",
                        topic: "链表",
                        children: [
                            { id: "普通链表", topic: "普通链表" },
                            { id: "双向链表", topic: "双向链表" },
                            { id: "循环链表", topic: "循环链表" }
                        ]
                    },
                    { id: "哈希表", topic: "哈希表" },
                    {
                        id: "堆",
                        topic: "堆",
                        children: [
                            { id: "普通堆", topic: "普通堆" },
                            { id: "对顶堆", topic: "对顶堆" }
                        ]
                    },
                    {
                        id: "树",
                        topic: "树",
                        children: [
                            { id: "树的遍历", topic: "树的遍历" },
                            { id: "树的重心", topic: "树的重心" },
                            { id: "树的直径", topic: "树的直径" },
                            { id: "树上差分", topic: "树上差分" },
                            { id: "LCA", topic: "LCA" },
                            { id: "dfn", topic: "dfn" },
                            { id: "树的哈希", topic: "树的哈希" },
                            { id: "括号序", topic: "括号序" },
                            { 
                                id: "最小生成树", 
                                topic: "最小生成树",
                                children: [
                                    { id: "Kruskal", topic: "Kruskal" },
                                    { id: "Prim", topic: "Prim" }
                                ]
                            },
                            { id: "重构树", topic: "重构树" },
                            { id: "树的合并与分裂", topic: "树的合并与分裂" },
                            { 
                                id: "树链剖分", 
                                topic: "树链剖分",
                                children: [
                                    { id: "重链剖分", topic: "重链剖分" },
                                    { id: "长链剖分", topic: "长链剖分" }
                                ]
                            },
                            { id: "树的启发式合并", topic: "树的启发式合并" }
                        ]
                    },
                    { 
                        id: "线段树", 
                        topic: "线段树",
                        children: [
                            { id: "基础线段树", topic: "基础线段树" },
                            { id: "带标记的线段树", topic: "带标记的线段树" },
                            { id: "可持久化线段树", topic: "可持久化线段树" },
                            { id: "李超线段树", topic: "李超线段树" }
                        ]
                    },
                    { id: "树状数组", topic: "树状数组" },
                    { 
                        id: "平衡树", 
                        topic: "平衡树",
                        children: [
                            { id: "treap", topic: "treap" },
                            { id: "splay", topic: "splay" },
                            { id: "fhqtreap", topic: "fhqtreap" },
                            { id: "可持久化平衡树", topic: "可持久化平衡树" }
                        ]
                    },
                    { 
                        id: "树套树", 
                        topic: "树套树",
                        children: [
                            { id: "线段树套线段树", topic: "线段树套线段树" },
                            { id: "线段树套平衡树", topic: "线段树套平衡树" }
                        ]
                    },
                    { id: "笛卡尔树", topic: "笛卡尔树" },
                    { id: "珂朵莉树", topic: "珂朵莉树" },
                    { id: "LCT", topic: "LCT" },
                    { id: "虚树", topic: "虚树" },
                    { id: "KD树", topic: "KD树" },
                    { 
                        id: "并查集", 
                        topic: "并查集",
                        children: [
                            { id: "并查集基础", topic: "并查集基础" },
                            { id: "带权并查集", topic: "带权并查集" },
                            { id: "可持久化并查集", topic: "可持久化并查集" }
                        ]
                    },
                    { 
                        id: "分块", 
                        topic: "分块",
                        children: [
                            { id: "莫队", topic: "莫队" },
                            { id: "链上分块", topic: "链上分块" },
                            { id: "树上分块", topic: "树上分块" }
                        ]
                    },
                    { id: "ST表", topic: "ST表" },
                    { 
                        id: "STL", 
                        topic: "STL",
                        children: [
                            { id: "bitset", topic: "bitset" },
                            { id: "set", topic: "set" }
                        ]
                    }
                ]
            },
            {
                id: "图论",
                topic: "图论",
                expanded: true,
                children: [
                    { 
                        id: "图的遍历", 
                        topic: "图的遍历",
                        children: [
                            { id: "dfs", topic: "dfs" },
                            { id: "bfs", topic: "bfs" }
                        ]
                    },
                    { id: "拓扑序", topic: "拓扑序" },
                    { 
                        id: "最短路", 
                        topic: "最短路",
                        children: [
                            { id: "Bellman-Ford", topic: "Bellman-Ford" },
                            { id: "Dijkstra", topic: "Dijkstra" },
                            { id: "Floyd", topic: "Floyd" }
                        ]
                    },
                    { id: "最小生成树-图论", topic: "最小生成树" },
                    { 
                        id: "连通性相关", 
                        topic: "连通性相关",
                        children: [
                            { id: "强连通分量", topic: "强连通分量" },
                            { id: "双连通分量", topic: "双连通分量" }
                        ]
                    },
                    { id: "Tarjan", topic: "Tarjan" },
                    { id: "SPFA", topic: "SPFA" },
                    { 
                        id: "二分图", 
                        topic: "二分图",
                        children: [
                            { id: "二分图的判定", topic: "二分图的判定" },
                            { id: "匈牙利算法", topic: "匈牙利算法" },
                            { id: "KM", topic: "KM" }
                        ]
                    },
                    { 
                        id: "网络流", 
                        topic: "网络流",
                        children: [
                            { id: "最大流/最小割", topic: "最大流/最小割" },
                            { id: "费用流", topic: "费用流" },
                            { id: "上下界网络流", topic: "上下界网络流" }
                        ]
                    },
                    { id: "欧拉（回）路", topic: "欧拉（回）路" },
                    { id: "2-SAT", topic: "2-SAT" },
                    { id: "竞赛图", topic: "竞赛图" },
                    { id: "差分约束", topic: "差分约束" },
                    { id: "斯坦纳树", topic: "斯坦纳树" },
                    { id: "支配树", topic: "支配树" },
                    { id: "仙人掌图", topic: "仙人掌图" },
                    { id: "最小树形图", topic: "最小树形图" },
                    { 
                        id: "图的匹配", 
                        topic: "图的匹配",
                        children: [
                            { id: "一般图匹配", topic: "一般图匹配" },
                            { id: "二分图匹配", topic: "二分图匹配" }
                        ]
                    },
                    { id: "图的着色", topic: "图的着色" }
                ]
            },
            {
                id: "字符串",
                topic: "字符串",
                expanded: true,
                children: [
                    { id: "KMP", topic: "KMP" },
                    { id: "字符串哈希", topic: "字符串哈希" },
                    { id: "字典树", topic: "字典树" },
                    { id: "AC自动机", topic: "AC自动机" },
                    { id: "后缀数组", topic: "后缀数组" },
                    { id: "后缀自动机", topic: "后缀自动机" },
                    { id: "回文自动机", topic: "回文自动机" },
                    { id: "扩展KMP", topic: "扩展KMP" },
                    { 
                        id: "回文串", 
                        topic: "回文串",
                        children: [
                            { id: "manacher", topic: "manacher" }
                        ]
                    },
                    { id: "最小表示法", topic: "最小表示法" },
                    { id: "Lyndon分解", topic: "Lyndon分解" }
                ]
            },
            {
                id: "动态规划",
                topic: "动态规划",
                direction: "left",
                expanded: true,
                children: [
                    { id: "记忆化搜索", topic: "记忆化搜索" },
                    { id: "线性dp", topic: "线性dp" },
                    { id: "背包dp", topic: "背包dp" },
                    { id: "区间dp", topic: "区间dp" },
                    { id: "计数类dp", topic: "计数类dp" },
                    { id: "数位dp", topic: "数位dp" },
                    { id: "状压dp", topic: "状压dp" },
                    { id: "树形dp", topic: "树形dp" },
                    { id: "换根dp", topic: "换根dp" },
                    { id: "概率期望dp", topic: "概率期望dp" },
                    { id: "DAG上的dp", topic: "DAG上的dp" },
                    { 
                        id: "dp优化", 
                        topic: "dp优化",
                        children: [
                            { id: "性质/结论优化", topic: "性质/结论优化" },
                            { id: "滚动数组优化", topic: "滚动数组优化" },
                            { id: "前缀和优化", topic: "前缀和优化" },
                            { id: "单调队列/单调栈优化", topic: "单调队列/单调栈优化" },
                            { id: "斜率优化", topic: "斜率优化" },
                            { id: "四边形不等式优化", topic: "四边形不等式优化" }
                        ]
                    }
                ]
            },
            {
                id: "数学",
                topic: "数学",
                direction: "left",
                expanded: true,
                children: [
                    { 
                        id: "数论", 
                        topic: "数论",
                        children: [
                            { 
                                id: "质因数分解", 
                                topic: "质因数分解",
                                children: [
                                    { id: "区间筛", topic: "区间筛" },
                                    { id: "Pollard-Rho", topic: "Pollard-Rho" }
                                ]
                            },
                            { id: "线性筛", topic: "线性筛" },
                            { id: "gcd/lcm", topic: "gcd/lcm" },
                            { id: "快速幂-数论", topic: "快速幂" },
                            { id: "逆元", topic: "逆元" },
                            { id: "数论分块", topic: "数论分块" },
                            { id: "扩展欧几里得", topic: "扩展欧几里得" },
                            { 
                                id: "费马定理/欧拉定理", 
                                topic: "费马定理/欧拉定理",
                                children: [
                                    { id: "扩展欧拉定理", topic: "扩展欧拉定理" }
                                ]
                            },
                            { id: "中国剩余定理", topic: "中国剩余定理" },
                            { id: "莫比乌斯反演", topic: "莫比乌斯反演" },
                            { id: "狄利克雷卷积", topic: "狄利克雷卷积" },
                            { id: "杜教筛", topic: "杜教筛" },
                            { id: "原根/阶", topic: "原根/阶" },
                            { id: "类欧几里得", topic: "类欧几里得" },
                            { 
                                id: "离散对数", 
                                topic: "离散对数",
                                children: [
                                    { id: "BSGS", topic: "BSGS" }
                                ]
                            }
                        ]
                    },
                    { 
                        id: "线性代数", 
                        topic: "线性代数",
                        children: [
                            { id: "矩阵快速幂", topic: "矩阵快速幂" },
                            { id: "高斯消元", topic: "高斯消元" },
                            { id: "行列式", topic: "行列式" },
                            { id: "线性基", topic: "线性基" },
                            { id: "矩阵求逆", topic: "矩阵求逆" },
                            { id: "矩阵树定理", topic: "矩阵树定理" }
                        ]
                    },
                    { 
                        id: "组合数学", 
                        topic: "组合数学",
                        children: [
                            { id: "组合数", topic: "组合数" },
                            { id: "鸽巢原理", topic: "鸽巢原理" },
                            { id: "二项式定理", topic: "二项式定理" },
                            { 
                                id: "容斥原理", 
                                topic: "容斥原理",
                                children: [
                                    { id: "min-max容斥", topic: "min-max容斥" },
                                    { id: "二项式反演", topic: "二项式反演" }
                                ]
                            },
                            { 
                                id: "常见组合数", 
                                topic: "常见组合数",
                                children: [
                                    { id: "错排问题", topic: "错排问题" },
                                    { id: "卡特兰数", topic: "卡特兰数" },
                                    { id: "拆分数", topic: "拆分数" },
                                    { id: "斯特林数", topic: "斯特林数" }
                                ]
                            },
                            { id: "prufer序列", topic: "prufer序列" }
                        ]
                    },
                    { 
                        id: "概率论", 
                        topic: "概率论",
                        children: [
                            { id: "概率与期望", topic: "概率与期望" }
                        ]
                    },
                    { 
                        id: "博弈论", 
                        topic: "博弈论",
                        children: [
                            { id: "思维博弈", topic: "思维博弈" },
                            { id: "SG函数", topic: "SG函数" },
                            { 
                                id: "常见结论", 
                                topic: "常见结论",
                                children: [
                                    { id: "巴什博弈", topic: "巴什博弈" },
                                    { id: "Nim游戏", topic: "Nim游戏" },
                                    { id: "anti-Nim", topic: "anti-Nim" },
                                    { id: "分裂游戏", topic: "分裂游戏" },
                                    { id: "Green Hackenbush", topic: "Green Hackenbush" },
                                    { id: "Fibonacci Nim", topic: "Fibonacci Nim" },
                                    { id: "Chomp", topic: "Chomp" },
                                    { id: "二分图博弈", topic: "二分图博弈" },
                                    { id: "Wythoff博弈", topic: "Wythoff博弈" }
                                ]
                            }
                        ]
                    },
                    { 
                        id: "多项式", 
                        topic: "多项式",
                        children: [
                            { id: "FFT/NTT", topic: "FFT/NTT" },
                            { id: "拉格朗日插值", topic: "拉格朗日插值" },
                            { id: "生成函数", topic: "生成函数" },
                            { id: "多项式基础", topic: "多项式基础" },
                            { id: "FWT/FMT", topic: "FWT/FMT" },
                            { id: "MTT", topic: "MTT" }
                        ]
                    },
                    { 
                        id: "群论", 
                        topic: "群论",
                        children: [
                            { id: "置换", topic: "置换" },
                            { id: "Burnside引理", topic: "Burnside引理" },
                            { id: "Polya定理", topic: "Polya定理" }
                        ]
                    },
                    { id: "微积分", topic: "微积分" }
                ]
            },
            {
                id: "计算几何",
                topic: "计算几何",
                direction: "left",
                expanded: true,
                children: [
                    { id: "几何基础", topic: "几何基础" },
                    { id: "Pick定理", topic: "Pick定理" },
                    { 
                        id: "距离", 
                        topic: "距离",
                        children: [
                            { id: "欧式距离", topic: "欧式距离" },
                            { id: "曼哈顿距离", topic: "曼哈顿距离" },
                            { id: "切比雪夫距离", topic: "切比雪夫距离" }
                        ]
                    },
                    { 
                        id: "点类", 
                        topic: "点类",
                        children: [
                            { id: "点积", topic: "点积" },
                            { id: "叉积", topic: "叉积" },
                            { id: "极角序", topic: "极角序" }
                        ]
                    },
                    { 
                        id: "线段相关", 
                        topic: "线段相关",
                        children: [
                            { id: "相交判定", topic: "相交判定" },
                            { id: "交点", topic: "交点" }
                        ]
                    },
                    { 
                        id: "多边形相关", 
                        topic: "多边形相关",
                        children: [
                            { 
                                id: "凸包", 
                                topic: "凸包",
                                children: [
                                    { id: "闵可夫斯基和", topic: "闵可夫斯基和" }
                                ]
                            },
                            { id: "多边形包含", topic: "多边形包含" },
                            { id: "旋转卡壳", topic: "旋转卡壳" },
                            { id: "半平面交", topic: "半平面交" }
                        ]
                    },
                    { 
                        id: "圆相关", 
                        topic: "圆相关",
                        children: [
                            { id: "交点切线", topic: "交点切线" },
                            { id: "面积交/并", topic: "面积交/并" }
                        ]
                    },
                    { id: "凸包快速操作", topic: "凸包快速操作" },
                    { id: "三维计算几何", topic: "三维计算几何" },
                    { 
                        id: "数值积分", 
                        topic: "数值积分",
                        children: [
                            { id: "辛普森积分", topic: "辛普森积分" },
                            { id: "自适应辛普森", topic: "自适应辛普森" }
                        ]
                    },
                    { id: "点定位", topic: "点定位" },
                    { id: "最小圆覆盖", topic: "最小圆覆盖" }
                ]
            },
            {
                id: "杂项",
                topic: "杂项",
                direction: "left",
                expanded: true,
                children: [
                    { id: "推式子/猜结论", topic: "推式子/猜结论" },
                    { id: "逆序对", topic: "逆序对" },
                    { id: "扫描线", topic: "扫描线" },
                    { id: "倍增", topic: "倍增" },
                    { id: "三分", topic: "三分" },
                    { id: "枚举子集", topic: "枚举子集" },
                    { id: "搜索", topic: "搜索" },
                    { id: "辗转相减法", topic: "辗转相减法" },
                    { 
                        id: "分治", 
                        topic: "分治",
                        children: [
                            { 
                                id: "树上分治", 
                                topic: "树上分治",
                                children: [
                                    { id: "点分", topic: "点分" },
                                    { id: "边分", topic: "边分" },
                                    { id: "动态点分", topic: "动态点分" }
                                ]
                            },
                            { id: "cdq分治", topic: "cdq分治" },
                            { id: "分治FFT/NTT", topic: "分治FFT/NTT" }
                        ]
                    },
                    { id: "启发式合并", topic: "启发式合并" }
                ]
            }
        ]
    }
};

// 自定义主题 - 天蓝色主题
const customTheme = {
    name: 'CAUCOJ Sky Blue',
    palette: [
        '#38bdf8', // 天蓝色
        '#7dd3fc', // 浅天蓝
        '#0ea5e9', // 亮蓝
        '#06b6d4', // 青色
        '#22d3ee', // 浅青
        '#0284c7', // 深蓝
        '#60a5fa', // 蓝色
        '#3b82f6', // 靛蓝
        '#818cf8', // 紫蓝
        '#0369a1'  // 深海蓝
    ],
    cssVar: {
        '--main-color': '#38bdf8',
        '--main-bgcolor': '#ffffff',
        '--color': '#1e293b',
        '--bgcolor': '#f8fafc',
        '--panel-color': '#1e293b',
        '--panel-bgcolor': '#ffffff',
        '--panel-border-color': '#e0f2fe'
    }
};

// Mind Elixir 配置（1.0.0+ 版本格式）
const options = {
    el: '#map',
    direction: MindElixir.SIDE,  // 两侧分布
    draggable: false,  // 禁止拖拽节点
    contextMenu: false,  // 禁用右键菜单
    toolBar: false,  // 禁用工具栏（只读模式）
    nodeMenu: false,  // 禁用节点菜单
    keypress: false,  // 禁用键盘操作
    locale: 'zh_CN',
    overflowHidden: false,
    mainLinkStyle: 2,
    mouseSelectionButton: -1,  // 禁用鼠标选择
    allowUndo: false,  // 禁用撤销
    editable: false,  // 禁止编辑
    theme: customTheme
};

// 初始化思维导图
let mind;

// 中键拖拽和滚轮缩放功能
function setupMouseControls() {
    const mapContainer = document.querySelector('.mind-elixir');
    if (!mapContainer) {
        console.error('找不到思维导图容器');
        return;
    }

    let isDragging = false;
    let startX, startY;
    let initialTransform = { x: 0, y: 0, scale: 1 };

    // 获取当前变换
    function getCurrentTransform() {
        const svg = mapContainer.querySelector('svg.map');
        if (!svg) return { x: 0, y: 0, scale: 1 };
        
        const transform = svg.getAttribute('transform') || '';
        const scaleMatch = transform.match(/scale\(([^)]+)\)/);
        const translateMatch = transform.match(/translate\(([^,]+),([^)]+)\)/);
        
        return {
            scale: scaleMatch ? parseFloat(scaleMatch[1]) : 1,
            x: translateMatch ? parseFloat(translateMatch[1]) : 0,
            y: translateMatch ? parseFloat(translateMatch[2]) : 0
        };
    }

    // 应用变换
    function applyTransform(x, y, scale) {
        const svg = mapContainer.querySelector('svg.map');
        if (svg) {
            svg.setAttribute('transform', `translate(${x},${y}) scale(${scale})`);
        }
    }

    // 中键拖拽
    mapContainer.addEventListener('mousedown', (e) => {
        if (e.button === 1) {  // 中键
            e.preventDefault();
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialTransform = getCurrentTransform();
            mapContainer.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        applyTransform(
            initialTransform.x + deltaX,
            initialTransform.y + deltaY,
            initialTransform.scale
        );
    });

    document.addEventListener('mouseup', (e) => {
        if (e.button === 1) {
            isDragging = false;
            mapContainer.style.cursor = 'default';
        }
    });

    // 滚轮缩放
    mapContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const currentTransform = getCurrentTransform();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        let newScale = currentTransform.scale + delta;
        
        // 限制缩放范围
        newScale = Math.max(0.3, Math.min(3, newScale));
        
        applyTransform(
            currentTransform.x,
            currentTransform.y,
            newScale
        );
    }, { passive: false });

    // 禁用中键默认滚动
    document.addEventListener('mousedown', (e) => {
        if (e.button === 1) {
            e.preventDefault();
        }
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    try {
        // 检查 MindElixir 是否加载
        if (typeof MindElixir === 'undefined') {
            throw new Error('MindElixir 库未加载');
        }
        
        // 创建 Mind Elixir 实例
        mind = new MindElixir(options);
        
        // 使用 init() 方法传入数据（1.0.0+ 版本要求）
        mind.init(mindMapData);
        
        // 延迟设置鼠标控制，确保 DOM 完全渲染
        setTimeout(() => {
            setupMouseControls();
            
            // 禁用所有节点的编辑功能
            const allNodes = document.querySelectorAll('me-tpc');
            allNodes.forEach(node => {
                node.setAttribute('contenteditable', 'false');
                node.style.cursor = 'default';
                node.addEventListener('dblclick', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
            
            console.log('鼠标控制已设置');
        }, 500);
        
        // 添加事件监听
        mind.bus.addListener('operation', operation => {
            console.log('操作:', operation);
        });
        
        mind.bus.addListener('selectNodes', nodes => {
            console.log('选中节点:', nodes);
        });
        
        mind.bus.addListener('expandNode', node => {
            console.log('展开节点:', node);
        });
        
        // 绑定工具栏按钮事件
        document.getElementById('btn-zoom-in').addEventListener('click', () => {
            mind.scale(0.2);
        });
        
        document.getElementById('btn-zoom-out').addEventListener('click', () => {
            mind.scale(-0.2);
        });
        
        document.getElementById('btn-center').addEventListener('click', () => {
            mind.toCenter();
        });
        
        document.getElementById('btn-refresh').addEventListener('click', () => {
            mind.refresh();
        });
        
        // 延迟居中，确保渲染完成
        setTimeout(() => {
            mind.toCenter();
        }, 300);
        
        console.log('思维导图初始化成功！');
        console.log('当前数据:', mindMapData);
        console.log('提示: 使用中键拖拽移动，滚轮缩放');
    } catch (error) {
        console.error('思维导图初始化失败:', error);
        alert('思维导图加载失败，请刷新页面重试！\n错误信息：' + error.message);
    }
});

// 窗口大小改变时自动调整
window.addEventListener('resize', () => {
    if (mind) {
        mind.refresh();
    }
});
