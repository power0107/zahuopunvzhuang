const grid = document.getElementById('productGrid');
const title = document.getElementById('current-title');

// 1. 进入二级子目录函数
window.enterCategory = function(name, items) {
    console.log("正在加载分类:", name); // 调试用
    title.innerText = `COLLECTION: ${name}`;
    grid.innerHTML = ''; 

    items.forEach(id => {
        const card = document.createElement('div');
        card.className = 'p-card';
        
        // 关键点：显式拼接路径
        const imgPath = "images/product" + id + ".jpg";
        
        card.innerHTML = `
            <img src="${imgPath}" class="zoomable" 
                 onerror="this.src='https://via.placeholder.com/400x500?text=Missing+Product+${id}'">
            <p>${name} NO.${id}</p>
        `;
        grid.appendChild(card);
    });
    
    // 跳转
    document.getElementById('product-area').scrollIntoView({ behavior: 'smooth' });
};

// 2. 首页渲染 (1-6)
function renderHome() {
    grid.innerHTML = '';
    const homeConfig = [
        { n: "毛衣", id: 1, list: [7,8,9,10,11] },
        { n: "长裤", id: 2, list: [12,13,14,15] },
        { n: "羽绒服", id: 3, list: [16,17,18,19,20] },
        { n: "外套", id: 4, list: [21,22,23,24,25] },
        { n: "打底", id: 5, list: [26,27,28,29,30] },
        { n: "风衣", id: 6, list: [31,32,33,34,35] }
    ];

    homeConfig.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'p-card home-entry';
        // 直接绑定点击事件
        card.onclick = function() { enterCategory(cat.n, cat.list); };
        
        card.innerHTML = `
            <div class="img-wrap">
                <img src="images/product${cat.id}.jpg" onerror="console.log('首页图丢失:${cat.id}')">
                <div class="overlay">VIEW MORE</div>
            </div>
            <p>${cat.n}</p>
        `;
        grid.appendChild(card);
    });
}

// 执行初始化
renderHome();

// 3. Lightbox 功能
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('zoomable')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});

document.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
