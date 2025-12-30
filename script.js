document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 导航栏滚动效果 (Scroll Effect)
    // 当用户向下滚动时，缩小 Header 尺寸，模拟高端电商的简洁感
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0 10px';
            header.querySelector('.site-logo').style.fontSize = '24px';
            header.querySelector('.site-logo').style.marginBottom = '10px';
        } else {
            header.style.padding = '40px 0 20px';
            header.querySelector('.site-logo').style.fontSize = '38px';
            header.querySelector('.site-logo').style.marginBottom = '30px';
        }
    });

    // 2. 模拟加入收藏夹 (Heart Toggle)
    // 为每个产品卡片添加一个交互点
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // 创建一个心型按钮
        const heartBtn = document.createElement('div');
        heartBtn.innerHTML = '♡';
        heartBtn.className = 'heart-icon';
        card.querySelector('.img-box').appendChild(heartBtn);

        heartBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止触发卡片点击
            heartBtn.innerHTML = heartBtn.innerHTML === '♡' ? '♥' : '♡';
            heartBtn.style.color = heartBtn.innerHTML === '♥' ? '#ff4757' : '#fff';
        });
    });

    // 3. 图片点击反馈
    // 点击商品图片时跳转（此处用 console 模拟）
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const itemName = card.querySelector('.item-name').innerText;
            console.log(`正在前往商品详情页: ${itemName}`);
            // window.location.href = 'product-detail.html'; // 实际开发时取消注释
        });
    });

    // 4. 移动端二级菜单适配
    // 在小屏幕上，通过点击一级菜单来显示二级目录
    const navItems = document.querySelectorAll('.nav-item');
    if (window.innerWidth < 900) {
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    const isVisible = dropdown.style.display === 'block';
                    // 先隐藏所有其他的
                    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
                    // 切换当前的
                    dropdown.style.display = isVisible ? 'none' : 'block';
                }
            });
        });
    }
});
