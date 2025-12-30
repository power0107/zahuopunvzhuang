document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    const imagePath = 'images/'; // 确保文件夹名为 images
    
    // 加载 1 到 78 张图片
    for (let i = 1; i <= 78; i++) {
        const item = document.createElement('div');
        item.className = 'product-item';
        
        // 渲染图片
        item.innerHTML = `
            <div class="img-box">
                <img src="${imagePath}product${i}.jpg" alt="Item ${i}" loading="lazy" 
                     onerror="this.parentElement.parentElement.style.display='none'">
            </div>
        `;
        grid.appendChild(item);
    }
});
