// 分类配置
const config = [
    { name: "毛衣", preview: 1, items: [7, 8, 9, 10, 11] },
    { name: "长裤", preview: 2, items: [12, 13, 14, 15] },
    { name: "羽绒服", preview: 3, items: [16, 17, 18, 19, 20] },
    { name: "外套", preview: 4, items: [21, 22, 23, 24, 25] },
    { name: "打底", preview: 5, items: [26, 27, 28, 29, 30] },
    { name: "风衣", preview: 6, items: [31, 32, 33, 34, 35] }
];

const navBox = document.getElementById('category-nav');
const grid = document.getElementById('productGrid');

// 生成导航栏
config.forEach(cat => {
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.innerHTML = `
        <a href="javascript:void(0)" onclick="showCat('${cat.name}')">${cat.name}</a>
        <div class="mega-menu">
            <div class="menu-list">
                <h4>${cat.name} CATEGORY</h4>
                <a href="#" onclick="showCat('${cat.name}')">查看全部 ${cat.name}</a>
                <a href="#">新品推荐</a>
            </div>
            <div class="menu-pic">
                <img src="images/product${cat.preview}.jpg">
                <span>NEW ARRIVAL</span>
            </div>
        </div>
    `;
    navBox.appendChild(item);
});

// 渲染函数：将图片编号数组转换为 HTML
function render(ids, names) {
    grid.innerHTML = '';
    ids.forEach((id, index) => {
        const div = document.createElement('div');
        div.className = 'p-card';
        // 如果是首页展示，使用特定的名称，否则使用通用名称
        const displayName = names ? names[index] : `ESSENTIAL ITEM NO.${id}`;
        div.innerHTML = `
            <img src="images/product${id}.jpg" class="zoomable">
            <p>${displayName}</p>
            <span>$${(Math.random()*100 + 120).toFixed(2)}</span>
        `;
        grid.appendChild(div);
    });
}

// 筛选功能
window.showCat = (name) => {
    const data = config.find(c => c.name === name);
    document.getElementById('current-cat-title').innerText = name;
    document.getElementById('item-count').innerText = `${data.items.length} ITEMS`;
    render(data.items);
};

// 【核心逻辑】初始加载首页：仅展示 product 1-6
const homeIds = [1, 2, 3, 4, 5, 6];
const homeNames = ["精选毛衣", "时尚长裤", "保暖羽绒", "廓形外套", "舒适打底", "极简风衣"];
render(homeIds, homeNames);

// Lightbox 图片放大功能
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoomable')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
        document.body.style.overflow = 'hidden';
    }
});
document.querySelector('.close-btn').onclick = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
};
