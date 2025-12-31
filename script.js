// 产品数据配置 - 对应你 images 文件夹中的图片
const categoryData = {
    'down-coat': {
        title: '羽绒服系列',
        items: [
            { id: 1, name: '轻薄羽绒服', price: '¥899', image: 'images/product1.jpg' },
            { id: 2, name: '长款羽绒服', price: '¥1299', image: 'images/product2.jpg' },
            { id: 3, name: '短款羽绒服', price: '¥799', image: 'images/product3.jpg' },
            { id: 4, name: '加厚羽绒服', price: '¥1599', image: 'images/product4.jpg' },
            { id: 5, name: '连帽羽绒服', price: '¥1099', image: 'images/product5.jpg' },
            { id: 6, name: '修身羽绒服', price: '¥1399', image: 'images/product6.jpg' },
            { id: 7, name: '时尚羽绒服', price: '¥999', image: 'images/product7.jpg' },
            { id: 8, name: '保暖羽绒服', price: '¥1199', image: 'images/product8.jpg' }
        ]
    },
    'coat': {
        title: '外套系列',
        items: [
            { id: 9, name: '羊毛呢子大衣', price: '¥1699', image: 'images/product9.jpg' },
            { id: 10, name: '牛仔外套', price: '¥599', image: 'images/product10.jpg' },
            { id: 11, name: '风衣外套', price: '¥899', image: 'images/product11.jpg' },
            { id: 12, name: '皮衣外套', price: '¥1499', image: 'images/product12.jpg' },
            { id: 13, name: '针织开衫', price: '¥499', image: 'images/product13.jpg' },
            { id: 14, name: '西装外套', price: '¥799', image: 'images/product14.jpg' }
        ]
    },
    'sweater': {
        title: '毛衫系列',
        items: [
            { id: 15, name: '高领羊毛衫', price: '¥499', image: 'images/product15.jpg' },
            { id: 16, name: 'V领针织衫', price: '¥429', image: 'images/product16.jpg' },
            { id: 17, name: '宽松毛衣', price: '¥569', image: 'images/product17.jpg' },
            { id: 18, name: '修身羊毛衫', price: '¥699', image: 'images/product18.jpg' },
            { id: 19, name: '套头毛衣', price: '¥399', image: 'images/product19.jpg' },
            { id: 20, name: '针织开衫', price: '¥459', image: 'images/product20.jpg' }
        ]
    },
    'pants': {
        title: '长裤系列',
        items: [
            { id: 21, name: '高腰阔腿裤', price: '¥399', image: 'images/product21.jpg' },
            { id: 22, name: '修身牛仔裤', price: '¥499', image: 'images/product22.jpg' },
            { id: 23, name: '休闲运动裤', price: '¥329', image: 'images/product23.jpg' },
            { id: 24, name: '西装裤', price: '¥569', image: 'images/product24.jpg' },
            { id: 25, name: '打底裤', price: '¥199', image: 'images/product25.jpg' },
            { id: 26, name: '休闲裤', price: '¥369', image: 'images/product26.jpg' }
        ]
    },
    'dress': {
        title: '连衣裙系列',
        items: [
            { id: 27, name: '碎花连衣裙', price: '¥699', image: 'images/product27.jpg' },
            { id: 28, name: '针织连衣裙', price: '¥599', image: 'images/product28.jpg' },
            { id: 29, name: '雪纺连衣裙', price: '¥799', image: 'images/product29.jpg' },
            { id: 30, name: '毛呢连衣裙', price: '¥899', image: 'images/product30.jpg' },
            { id: 31, name: '修身连衣裙', price: '¥659', image: 'images/product31.jpg' },
            { id: 32, name: '宽松连衣裙', price: '¥549', image: 'images/product32.jpg' }
        ]
    },
    'accessories': {
        title: '配饰系列',
        items: [
            { id: 33, name: '时尚围巾', price: '¥199', image: 'images/product33.jpg' },
            { id: 34, name: '针织帽子', price: '¥159', image: 'images/product34.jpg' },
            { id: 35, name: '保暖手套', price: '¥129', image: 'images/product35.jpg' },
            { id: 36, name: '时尚包包', price: '¥399', image: 'images/product36.jpg' },
            { id: 37, name: '皮带', price: '¥179', image: 'images/product37.jpg' },
            { id: 38, name: '袜子套装', price: '¥99', image: 'images/product38.jpg' }
        ]
    }
};

// DOM 元素
const categoryCards = document.querySelectorAll('.category-card');
const categorySection = document.getElementById('categorySection');
const subcategorySection = document.getElementById('subcategorySection');
const backBtn = document.getElementById('backBtn');
const subcategoryTitle = document.getElementById('subcategoryTitle');
const subcategoryGrid = document.getElementById('subcategoryGrid');

// 当前选中的分类
let currentCategory = '';

// 事件监听 - 一级分类点击
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        currentCategory = category;
        
        // 切换显示
        categorySection.style.display = 'none';
        subcategorySection.style.display = 'block';
        
        // 加载二级目录
        loadSubcategory(category);
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 返回按钮
backBtn.addEventListener('click', () => {
    categorySection.style.display = 'block';
    subcategorySection.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 加载二级目录函数
function loadSubcategory(category) {
    const categoryInfo = categoryData[category];
    
    if (!categoryInfo) return;
    
    // 更新标题
    subcategoryTitle.textContent = categoryInfo.title;
    
    // 清空当前内容
    subcategoryGrid.innerHTML = '';
    
    // 加载二级目录图片
    categoryInfo.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'subcategory-item';
        itemElement.innerHTML = `
            <div class="subcategory-img">
                < img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
            </div>
            <div class="subcategory-info">
                <h4 class="subcategory-name">${item.name}</h4>
                <p class="subcategory-price">${item.price}</p >
            </div>
        `;
        
        // 点击图片查看大图
        itemElement.addEventListener('click', (e) => {
            // 阻止事件冒泡
            e.stopPropagation();
            
            // 这里可以添加查看大图的功能
            alert(`查看商品: ${item.name}\n价格: ${item.price}`);
        });
        
        subcategoryGrid.appendChild(itemElement);
    });
}

// 页面加载时的事件监听
document.addEventListener('DOMContentLoaded', () => {
    // 为每个分类卡片添加点击效果
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('active')) {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            }
        });
    });
    
    // 添加键盘支持
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && subcategorySection.style.display === 'block') {
            backBtn.click();
        }
    });
});

// 图片加载失败时的处理
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.backgroundColor = '#f5f5f5';
        e.target.style.padding = '20px';
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
        e.target.style.justifyContent = 'center';
        e.target.innerHTML = '<i class="fas fa-image" style="font-size: 40px; color: #ccc;"></i>';
    }
}, true);
