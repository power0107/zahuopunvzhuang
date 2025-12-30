// 映射你截图中的真实编号
const config = [
    { name: "毛衣", id: 1, items: [29, 30, 31, 32] },
    { name: "长裤", id: 2, items: [12, 13, 14, 15] },
    { name: "羽绒服", id: 3, items: [16, 17, 18, 19, 20] },
    { name: "外套", id: 4, items: [21, 22, 23, 24, 25] },
    { name: "打底", id: 5, items: [26, 27, 28] },
    { name: "裙子", id: 6, items: [33, 34, 35] }
];

const grid = document.getElementById('productGrid');
const title = document.getElementById('current-title');

// 进入二级子目录函数
window.enterCategory = function(name) {
    const data = config.find(c => c.name === name);
    if (!data) return;

    title.innerText = name;
    grid.innerHTML = ''; 

    data.items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        // 关键：读取子文件夹内的图片
        const imgPath = `images/${name}/product${id}.jpg`;
        
        card.innerHTML = `
            <img src="${imgPath}" onerror="this.src='https://via.placeholder.com/400x500?text=图片路径错误'">
            <p>GENERAL STORE NO.${id}</p>
        `;
        grid.appendChild(card);
    });
    
    document.getElementById('product-area').scrollIntoView({ behavior: 'smooth' });
};

// 首页初始渲染 (1-6)
function renderHome() {
    grid.innerHTML = '';
    config.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card';
        card.onclick = () => enterCategory(cat.name);
        card.innerHTML = `
            <img src="images/product${cat.id}.jpg" onerror="this.src='https://via.placeholder.com/400x500?text=首页图丢失'">
            <p>${cat.name}系列</p>
        `;
        grid.appendChild(card);
    });
}

renderHome();
