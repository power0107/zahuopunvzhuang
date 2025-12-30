document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mainGrid');
    const folder = 'images/'; 
    
    // 渲染 product1 到 product78
    for (let i = 1; i <= 78; i++) {
        const item = document.createElement('div');
        item.className = 'product-item';
        
        item.innerHTML = `
            <div class="img-box">
                <img src="${folder}product${i}.jpg" alt="Item ${i}" loading="lazy" 
                     onerror="this.parentElement.parentElement.style.display='none'">
            </div>
        `;
        grid.appendChild(item);
    }
});
