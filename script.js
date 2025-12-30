// 1. 定义分类与图片对应关系
const categories = [
    { name: "羽绒服", preview: 1, subProducts: [7, 8, 9, 10, 11] },
    { name: "毛衣", preview: 2, subProducts: [12, 13, 14, 15, 16] },
    { name: "长裤", preview: 3, subProducts: [17, 18, 19, 20, 21] },
    { name: "裙子", preview: 4, subProducts: [22, 23, 24, 25, 26] },
    { name: "外套", preview: 5, subProducts: [27, 28, 29, 30, 31] },
    { name: "打底", preview: 6, subProducts: [32, 33, 34, 35] }
];

const navContainer = document.getElementById('category-nav');
const grid = document.getElementById('productGrid');

// 2. 生成导航栏 (带三级子目录预览)
categories.forEach(cat => {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';
    navItem.innerHTML = `
        <a href="javascript:void(0)">${cat.name}</a>
        <div class="mega-menu">
            <div class="menu-column">
                <h4>${cat.name}系列</h4>
                <a href="#" onclick="filterCategory('${cat.name}')">查看全部</a>
                <a href="#">新款到店</a>
                <a href="#">热销排行</a>
            </div>
            <div class="menu-display">
                <img src="images/product${cat.preview}.jpg" alt="${cat.name}">
                <span>SHOP ${cat.name}</span>
            </div>
        </div>
    `;
    navContainer.appendChild(navItem);
});

// 3. 渲染商品函数 (默认显示所有 7-35 的图)
function renderProducts(productList) {
    grid.innerHTML = '';
    productList.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        card.innerHTML = `
            <img src="images/product${id}.jpg" class="zoom-target">
            <p>STYLE ITEM NO.${id}</p>
            <span>$${(Math.random()*150 + 50).toFixed(2)}</span>
        `;
        grid.appendChild(card);
    });
}

// 4. 分类筛选逻辑 (点击导航展示对应的 7-35 图片)
window.filterCategory = function(name) {
    const cat = categories.find(c => c.name === name);
    document.getElementById('current-category-name').innerText = name;
    renderProducts(cat.subProducts);
};

// 初始加载显示 7-35 的所有图片
const allSubProducts = categories.reduce((acc, cat) => acc.concat(cat.subProducts), []);
renderProducts(allSubProducts);

// 5. Lightbox 放大逻辑
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoom-target')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});
document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
