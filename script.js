// 分类配置：1-6作为入口名及预览图，7-35分配给二级目录
const config = [
    { name: "毛衣", id: 1, items: [7, 8, 9, 10, 11] },
    { name: "长裤", id: 2, items: [12, 13, 14, 15] },
    { name: "羽绒服", id: 3, items: [16, 17, 18, 19, 20] },
    { name: "外套", id: 4, items: [21, 22, 23, 24, 25] },
    { name: "打底", id: 5, items: [26, 27, 28, 29, 30] },
    { name: "风衣", id: 6, items: [31, 32, 33, 34, 35] }
];

const grid = document.getElementById('productGrid');
const navBox = document.getElementById('category-nav');
const title = document.getElementById('current-title');

// 1. 生成导航栏（带三级目录效果）
config.forEach(cat => {
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.innerHTML = `
        <a href="javascript:void(0)" onclick="enterCategory('${cat.name}')">${cat.name}</a>
        <div class="mega-menu">
            <div class="menu-column">
                <h4>${cat.name}系列</h4>
                <a href="javascript:void(0)" onclick="enterCategory('${cat.name}')">进入子目录</a>
                <a href="#">本周新品</a>
            </div>
            <div class="menu-display">
                <img src="images/product${cat.id}.jpg" alt="Preview">
            </div>
        </div>
    `;
    navBox.appendChild(item);
});

// 2. 渲染函数：进入二级子目录
window.enterCategory = (name) => {
    const data = config.find(c => c.name === name);
    title.innerText = `COLLECTION: ${name}`;
    grid.innerHTML = ''; 
    
    data.items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card zoomable';
        card.innerHTML = `
            <img src="images/product${id}.jpg" class="zoom-target">
            <p>${name} NO.${id}</p>
        `;
        grid.appendChild(card);
    });
    // 自动滚动到产品区
    window.scrollTo({top: document.getElementById('product-area').offsetTop - 50, behavior: 'smooth'});
};

// 3. 初始首页渲染：仅展示 product1 到 product6 作为分类入口
function renderHome() {
    grid.innerHTML = '';
    config.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card clickable';
        card.onclick = () => enterCategory(cat.name);
        card.innerHTML = `
            <img src="images/product${cat.id}.jpg">
            <p>${cat.name}</p>
        `;
        grid.appendChild(card);
    });
}

renderHome();

// 4. 图片最大化功能
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoom-target')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});
document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
