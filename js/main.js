// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加导航栏滚动效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // 创建并添加汉堡菜单按钮
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.setAttribute('aria-label', 'Toggle menu');
    mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    // 将汉堡按钮插入到导航栏的末尾
    if (navbar) {
        navbar.appendChild(mobileMenuToggle);
    }

    // 汉堡菜单功能
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 点击导航链接后关闭菜单
    if (navLinks) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
                navLinks.classList.remove('active');
            });
        });
    }

    // 点击菜单外部关闭菜单
    document.addEventListener('touchstart', function(event) {
        if (navbar && !navbar.contains(event.target) && navLinks) {
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            navLinks.classList.remove('active');
        }
    });
    
    document.addEventListener('click', function(event) {
        if (navbar && !navbar.contains(event.target) && navLinks) {
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            navLinks.classList.remove('active');
        }
    });

    // 创建回到顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.title = '回到顶部';
    document.body.appendChild(backToTopBtn);

    // 回到顶部按钮显示/隐藏逻辑
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // 点击回到顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 