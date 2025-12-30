const config = [
    { name: "毛衣", id: 1, items: [29, 30, 31, 32] },
    { name: "长裤", id: 2, items: [12, 13, 14, 15] },
    { name: "羽绒服", id: 3, items: [16, 17, 18, 19, 20] },
    { name: "外套", id: 4, items: [21, 22, 23, 24, 25] },
    { name: "打底", id: 5, items: [26, 27, 28] },
    { name: "裙子", id: 6, items: [33, 34, 35] }
];

const grid = document.getElementById('productGrid');

// 首页初始加载：1-6号图并列一排
function renderHome() {
    grid.innerHTML = '';
    config.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card';
        card.onclick = () => enterCategory(cat.name);
        card.innerHTML = `
            <img src="images/product${cat.id}.jpg">
            <p>${cat.name}</p>
        `;
        grid.appendChild(card);
    });
}

// 进入二级分类（逻辑保持：去对应的文件夹找图）
window.enterCategory = function(name) {
    const data = config.find(c => c.name === name);
    if (!data) return;

    grid.innerHTML = ''; 
    data.items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        card.innerHTML = `
            <img src="images/${name}/product${id}.jpg">
            <p>Style No.${id}</p>
        `;
        grid.appendChild(card);
    });
};

renderHome();
