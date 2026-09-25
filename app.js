document.querySelector('#cats').innerHTML=categories.map(c=>`<a class="cat" href="#productos"><span class="caticon">${c.icon}</span><span><b>${c.name}</b><small>${c.sub}</small></span><i>→</i></a>`).join('');
function card(p){return `<article class="card ${p.featured?'featured':''}"><div class="pic">${p.tag?`<span class="tag">${p.tag}</span>`:''}<span class="heart">♡</span><img src="assets/${p.img}" alt="${p.name}"></div><div class="body"><div class="catname">${p.category}</div><h3>${p.name}</h3><p>${p.desc}</p><a class="greenbtn" href="${p.url}" target="_blank" rel="sponsored noopener">VER PRODUCTO →</a></div></article>`}
document.querySelector('#products').innerHTML=products.map(card).join('');
document.querySelector('#latest').innerHTML=products.slice(1,4).map(card).join('');
document.querySelector('#faqs').innerHTML=faqs.map(([q,a])=>`<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join('');
