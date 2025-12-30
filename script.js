document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    const lightbox = document.getElementById('lightboxOverlay');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-x');
    const imgFolder = 'images/'; 
    
    // 生成78张缩略图
    for (let i = 1; i <= 78; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        const path = `${imgFolder}product${i}.jpg`;
        
        div.innerHTML = `<img src="${path}" alt="Product ${i}" loading="lazy" class="zoom-item"
                        onerror="this.src='product${i}.jpg'; this.onerror=function(){this.parentElement.style.display='none';}">`;
        grid.appendChild(div);
    }

    // 全屏点击逻辑
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-item')) {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
        }
    });

    const closeLightbox = () => { lightbox.style.display = 'none'; };
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
});
