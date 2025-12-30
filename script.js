document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    
    // 自动循环生成 78 张图片
    for (let i = 1; i <= 78; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // 我们假设图片在 images/ 文件夹下
        const imgPath = `images/product${i}.jpg`;
        
        card.innerHTML = `
            <div class="img-box">
                <img src="${imgPath}" alt="Item ${i}" loading="lazy" 
                     onerror="checkAltPath(this, ${i})">
            </div>
        `;
        grid.appendChild(card);
    }
});

// 纠错函数：如果 images/ 路径失败，尝试根目录路径
function checkAltPath(img, index) {
    if (img.getAttribute('data-tried-alt') !== 'true') {
        img.setAttribute('data-tried-alt', 'true');
        img.src = `product${index}.jpg`; // 尝试直接在根目录找
    } else {
        // 如果都找不到，隐藏该区块
        img.parentElement.parentElement.style.display = 'none';
        console.log(`Product ${index} 真的找不到了`);
    }
}
