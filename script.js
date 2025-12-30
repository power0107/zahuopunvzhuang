document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-btn');
    const folder = 'images/'; 
    
    // 生成78张图
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

    // 放大功能
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-trigger')) {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
        }
    });

    const hide = () => lightbox.style.display = 'none';
    closeBtn.addEventListener('click', hide);
    lightbox.addEventListener('click', (e) => { if(e.target === lightbox) hide(); });
});
