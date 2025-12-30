// 1. 严格对应你截图中的文件夹图片编号
const config = [
    { name: "毛衣", id: 1, items: [29, 30, 31, 32] }, // 对应你截图 images/毛衣 文件夹里的文件
    { name: "长裤", id: 2, items: [12, 13, 14, 15] },
    { name: "羽绒服", id: 3, items: [16, 17, 18, 19, 20] },
    { name: "外套", id: 4, items: [21, 22, 23, 24, 25] }, 
    { name: "打底", id: 5, items: [26, 27, 28] },
    { name: "裙子", id: 6, items: [33, 34, 35] }
];

const grid = document.getElementById('productGrid');
const title = document.getElementById('current-title');

// 2. 进入二级子目录函数
window.enterCategory = function(name) {
    const data = config.find(c => c.name === name);
    if (!data) return;

    title.innerText = `COLLECTION: ${name}`;
    grid.innerHTML = ''; 

    data.items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        
        // 【修正核心】：路径必须是 images/分类名/product编号.jpg
        const imgPath = `images/${name}/product${id}.jpg`;
        
        // 【修正核心】：src 必须引用 imgPath 变量，而不是写死占位图链接
        card.innerHTML = `
            <img src="${imgPath}" class="zoomable" 
                 onerror="this.src='https://via.placeholder.com/400x500?text=路径错误_${id}'">
            <p>${name} NO.${id}</p>
        `;
        grid.appendChild(card);
    });
    
    // 自动滚动到产品区
    const productArea = document.getElementById('product-area');
    if(productArea) productArea.scrollIntoView({ behavior: 'smooth' });
};

// 3. 首页渲染 (1-6)
function renderHome() {
    if(!grid) return;
    grid.innerHTML = '';
    config.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card home-entry';
        card.onclick = function() { enterCategory(cat.name); };
        
        // 首页图在 images 根目录下
        card.innerHTML = `
            <div class="img-wrap">
                <img src="images/product${cat.id}.jpg" onerror="this.src='https://via.placeholder.com/400x500?text=首页图丢失_${cat.id}'">
                <div class="overlay">VIEW MORE</div>
            </div>
            <p>${cat.name}</p>
        `;
        grid.appendChild(card);
    });
}

renderHome();
