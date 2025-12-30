// 分类数据配置
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
const count = document.getElementById('item-count');

// 生成导航
config.forEach(cat => {
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.innerHTML = `
        <a href="javascript:void(0)" onclick="enterCategory('${cat.name}')">${cat.name}</a>
        <div class="mega-menu">
            <div class="menu-list">
                <h4>${cat.name}系列</h4>
                <a href="javascript:void(0)" onclick="enterCategory('${cat.name}')">进入子目录</a>
            </div>
            <div class="menu-pic">
                <img src="images/product${cat.id}.jpg">
            </div>
        </div>
    `;
    navBox.appendChild(item);
});

// 进入二级子目录的函数
window.enterCategory = (name) => {
    const data = config.find(c => c.name === name);
    title.innerText = `COLLECTION: ${name}`;
    count.innerText = `${data.items.length} ITEMS`;
    
    grid.innerHTML = '';
    data.items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        card.innerHTML = `
            <img src="images/product${id}.jpg" class="zoomable">
            <p>${name} NO.${id}</p>
            <span>$${(Math.random()*150 + 100).toFixed(2)}</span>
        `;
        grid.appendChild(card);
    });
    // 跳转到产品区
    window.scrollTo({top: document.getElementById('product-area').offsetTop - 100, behavior: 'smooth'});
};

// 初始首页渲染：仅展示 product1 到 product6
function renderHome() {
    grid.innerHTML = '';
    config.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card home-entry';
        card.onclick = () => enterCategory(cat.name); // 点击图片进入二级目录
        card.innerHTML = `
            <div class="img-container">
                <img src="images/product${cat.id}.jpg">
                <div class="overlay">ENTER ${cat.name}</div>
            </div>
            <p>${cat.name}</p>
            <span class="shop-link">点击浏览更多</span>
        `;
        grid.appendChild(card);
    });
}

renderHome();

// Lightbox 放大功能
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoomable')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});
document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
