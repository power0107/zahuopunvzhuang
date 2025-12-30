// 重新定义配置，匹配你截图中的文件夹名称
const config = [
    { name: "毛衣", id: 1, items: [7, 8, 9, 10, 11] },
    { name: "长裤", id: 2, items: [12, 13, 14, 15] },
    { name: "羽绒服", id: 3, items: [16, 17, 18, 19, 20] },
    { name: "外套", id: 4, items: [21, 22, 23, 24, 25] },
    { name: "打底", id: 5, items: [26, 27, 28, 29, 30] },
    { name: "裙子", id: 6, items: [31, 32, 33, 34, 35] }
];

const grid = document.getElementById('productGrid');
const title = document.getElementById('current-title');

// 进入二级子目录函数
window.enterCategory = function(name) {
    const data = config.find(c => c.name === name);
    title.innerText = `COLLECTION: ${name}`;
    grid.innerHTML = ''; 

    data.items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        
        // 【核心修改点】：路径现在包含中文文件夹名
        // 比如：images/毛衣/product7.jpg
        const imgPath = `images/${name}/product${id}.jpg`;
        
        card.innerHTML = `
            <img src="${imgPath}" class="zoomable" 
                 onerror="this.src='https://via.placeholder.com/400x500?text=图片路径错误'">
            <p>${name} NO.${id}</p>
        `;
        grid.appendChild(card);
    });
    
    document.getElementById('product-area').scrollIntoView({ behavior: 'smooth' });
};

// 首页渲染 (1-6) - 保持不变，因为这些图在 images 根目录下
function renderHome() {
    grid.innerHTML = '';
    config.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card home-entry';
        card.onclick = function() { enterCategory(cat.name); };
        
        card.innerHTML = `
            <div class="img-wrap">
                <img src="images/product${cat.id}.jpg">
                <div class="overlay">VIEW MORE</div>
            </div>
            <p>${cat.n}</p>
        `;
        grid.appendChild(card);
    });
}

renderHome();
