(function(){
    function observeCards(cards){
        if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                card.classList.add('show');
            } else {
                io.observe(card);
            }
        });
    }
    fetch('data/prices.json')
        .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(data => {
            const grid = document.querySelector('.services-grid');
            if (!grid) return;
            grid.innerHTML = '';
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'service-card';
                div.innerHTML = '<h3>' + item.emoji + ' ' + item.name + '</h3><span class="service-price">' + item.price + '</span>';
                grid.appendChild(div);
            });
            observeCards(grid.querySelectorAll('.service-card'));
        })
        .catch(() => {});
    fetch('data/promos.json')
        .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(data => {
            const grid = document.querySelector('.promos-grid');
            if (!grid) return;
            grid.innerHTML = '';
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'promo-card';
                let itemsHtml = '';
                item.items.forEach(i => { itemsHtml += '<li>' + i + '</li>'; });
                div.innerHTML = '<div class="promo-header"><h3 class="promo-title">' + item.title + '</h3><span class="promo-price">' + item.price + '</span></div><ul class="promo-list">' + itemsHtml + '</ul><p class="promo-vigencia">Vigencia: ' + item.vigencia + '</p>';
                grid.appendChild(div);
            });
            observeCards(grid.querySelectorAll('.promo-card'));
        })
        .catch(() => {});
})();
