// 1. 动态生成 35 张商品卡片
const productGrid = document.getElementById('productGrid');
const totalProducts = 35; // 总商品数量

for (let i = 1; i <= totalProducts; i++) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // 随机生成一个价格，模拟真实数据
    const price = (Math.random() * (350 - 80) + 80).toFixed(2);
    
    card.innerHTML = `
        <img src="images/product${i}.jpg" class="zoom-target" alt="Item ${i}">
        <p>Product Name ${i}</p>
        <span>$${price}</span>
    `;
    productGrid.appendChild(card);
}

// 2. 图片放大功能 (Lightbox)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close-btn');

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('zoom-target')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
        document.body.style.overflow = 'hidden'; // 放大时禁止背景滚动
    }
});

closeBtn.onclick = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
};

// 点击遮罩层空白处关闭
lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};
