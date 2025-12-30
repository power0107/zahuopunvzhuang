document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-btn');
    const folder = 'images/'; 
    
    // 加载 78 张图片
    for (let i = 1; i <= 78; i++) {
        const item = document.createElement('div');
        item.className = 'product-item';
        const imgPath = `${folder}product${i}.jpg`;
        
        item.innerHTML = `
            <div class="img-box">
                <img src="${imgPath}" alt="Product ${i}" loading="lazy" class="zoom-trigger"
                     onerror="this.src='product${i}.jpg'; this.onerror=function(){this.parentElement.parentElement.style.display='none';}">
            </div>
        `;
        grid.appendChild(item);
    }

    // 全局点击放大预览
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-trigger')) {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
            document.body.style.overflow = 'hidden'; // 锁定背景滚动
        }
    });

    const hide = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复滚动
    };
    
    closeBtn.addEventListener('click', hide);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) hide(); });
});
