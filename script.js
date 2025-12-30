* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Helvetica Neue", Arial, sans-serif; }
body { background: #fff; color: #000; scroll-behavior: smooth; }
.wide-container { max-width: 1500px; margin: 0 auto; padding: 0 50px; }

.top-bar { background: #000; color: #fff; text-align: center; padding: 12px; font-size: 11px; letter-spacing: 2px; }

/* 头部导航 */
.main-header { padding: 40px 0; text-align: center; border-bottom: 1px solid #eee; background: #fff; }
.logo { font-size: 36px; font-weight: bold; letter-spacing: 5px; margin-bottom: 30px; }
.nav-container { display: flex; justify-content: center; gap: 40px; }
.nav-item { position: relative; padding-bottom: 10px; }
.nav-item > a { text-decoration: none; color: #000; font-size: 12px; font-weight: 500; letter-spacing: 1px; }

/* Mega Menu */
.mega-menu {
    display: none; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
    background: #fff; border: 1px solid #eee; padding: 25px; min-width: 400px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05); z-index: 100; gap: 30px;
}
.nav-item:hover .mega-menu { display: flex; }
.menu-list h4 { font-size: 11px; margin-bottom: 10px; border-bottom: 1px solid #000; }
.menu-list a { display: block; padding: 5px 0; font-size: 11px; color: #666; text-decoration: none; }
.menu-pic img { width: 100px; height: 130px; object-fit: cover; }

/* 首页大海报 (Product 36) */
.hero-section { width: 100%; height: 75vh; background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; margin-bottom: 80px; }
.hero-content { background: rgba(255,255,255,0.9); padding: 60px; text-align: center; border: 1px solid #eee; }
.hero-content h2 { font-size: 48px; font-weight: 300; letter-spacing: 10px; margin-bottom: 20px; }
.btn-shop { display: inline-block; background: #000; color: #fff; padding: 15px 45px; text-decoration: none; font-size: 11px; margin-top: 20px; }

/* 商品排版 */
.section-header { display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 50px; align-items: flex-end; }
.product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 60px 40px; }

/* 首页入口样式 */
.home-entry .img-container { position: relative; overflow: hidden; cursor: pointer; }
.home-entry .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.2); color: #fff; display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; font-size: 12px; letter-spacing: 2px; }
.home-entry:hover .overlay { opacity: 1; }
.home-entry p { font-size: 14px; font-weight: bold; margin-top: 20px; letter-spacing: 2px; }
.shop-link { font-size: 11px; color: #999; text-decoration: underline; margin-top: 5px; display: block; }

/* 二级目录产品卡片 */
.p-card img { width: 100%; height: auto; transition: 0.3s; }
.zoomable { cursor: zoom-in; }

/* Lightbox */
.lightbox { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.98); z-index: 2000; justify-content: center; align-items: center; }
.lightbox-content { max-height: 90vh; }
.close-btn { position: absolute; top: 30px; right: 50px; font-size: 50px; cursor: pointer; }
