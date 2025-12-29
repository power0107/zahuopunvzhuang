// 1. 动态填充 35 张图片
const grid = document.getElementById('productGrid');
const totalItems = 35; 

for (let i = 1; i <= totalItems; i++) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // 模拟美式电商的价格显示
    const price = (Math.random() * (300 - 60) + 60).toFixed(2);
    
    card.innerHTML = `
        <img src="images/product${i}.jpg" class="zoom-target" alt="Product ${i}">
        <div class="info">
            <p>ITEM COLLECTION NO. ${i}</p>
            <span>$${price}</span>
        </div>
    `;
    grid.appendChild(card);
}

// 2. 图片放大逻辑
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

// 关闭放大层
closeBtn.onclick = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
};

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};
