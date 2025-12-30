document.addEventListener('DOMContentLoaded', () => {
    // 导航栏滚动缩小效果
    const header = document.querySelector('header');
    const logo = document.querySelector('.site-logo');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '15px 0';
            logo.style.fontSize = '24px';
            logo.style.marginBottom = '10px';
        } else {
            header.style.padding = '40px 0 20px';
            logo.style.fontSize = '38px';
            logo.style.marginBottom = '30px';
        }
    });
});
