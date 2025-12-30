document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    
    // 自动寻找 images 文件夹下的图片
    // 重要：确保你的 GitHub 文件夹名叫 images (全小写)
    const folder = 'images/'; 

    for (let i = 1; i <= 78; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // 动态生成路径并尝试加载
        const imgPath = `${folder}product${i}.jpg`;
        
        card.innerHTML = `
            <div class="img-wrap">
                <img src="${imgPath}" alt="Item ${i}" loading="lazy" 
                     onerror="console.error('Missing: ' + this.src); this.parentElement.parentElement.style.display='none';">
            </div>
        `;
        grid.appendChild(card);
    }
});
