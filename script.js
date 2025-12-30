document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-btn');
    const folder = 'images/'; 
    
    // 渲染 78 张图片
    for (let i = 1; i <= 78; i++) {
        const item = document.createElement('div');
        item.className = 'product-item';
        const imgPath = `${folder}product${i}.jpg`;
        
        item.innerHTML = `
            <div class="img-box">
                <img src="${imgPath}" alt="Item ${i}" loading="lazy" class="zoom-trigger"
                     onerror="this.src='product${i}.jpg'; this.onerror=function(){this.parentElement.parentElement.style.display='none';}">
            </div>
        `;
        grid.appendChild(item);
    }

    // 全局点击放大逻辑
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-trigger')) {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
        }
    });

    // 关闭逻辑
    const hideLightbox = () => { lightbox.style.display = 'none'; };
    closeBtn.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) hideLightbox(); });
});
