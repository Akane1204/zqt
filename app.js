
// ====== 语言切换 ======
function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    var tg = document.getElementById('lang-toggle');
    if (currentLang === 'en') { tg.classList.add('en'); }
    else { tg.classList.remove('en'); }
    document.getElementById('lang-zh').classList.toggle('active', currentLang === 'zh');
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
    applyLang();
}

function applyLang() {
    document.querySelector('#page-home .main-title').textContent = t('mainTitle');
    document.querySelector('#page-home .sub-title').textContent = t('subTitle');
    var bs = document.querySelectorAll('#page-home .home-btn .btn-text');
    if (bs.length >= 3) { bs[0].textContent = t('btnStartup'); bs[1].textContent = t('btnOperate'); bs[2].textContent = t('btnCancel'); }
    document.querySelectorAll('.back-btn').forEach(function(b){ b.innerHTML = '\u2039 ' + (currentLang === 'en' ? 'Back' : '\u8fd4\u56de'); });
    document.querySelector('#overlay-action .sheet-title').textContent = t('actionSheetTitle');
    document.querySelector('#btn-online .btn-text-col span:first-child').textContent = t('onlineBtn');
    document.getElementById('btn-offline').querySelector('span:last-child').textContent = t('offlineBtn');
    document.getElementById('btn-cancel-action').textContent = t('cancelBtn');
    document.querySelector('.district-sheet-title').textContent = t('districtTitle');
    document.querySelector('.fab-label').textContent = t('csLabel');

    // ---- 注销方式选择页 (cancel-type page) ----
    document.querySelector('#page-cancel-type .page-title').textContent = t('cancelTypeTitle');
    document.querySelector('#page-cancel-type .cancel-type-intro').textContent = t('cancelTypeIntro');
    // 简易注销卡
    var simpleCard = document.querySelector('#page-cancel-type .cancel-type-card[data-cancel="simple"]');
    if (simpleCard) {
        simpleCard.querySelector('.cancel-type-title').innerHTML = t('simpleCancel') + ' <span class="cancel-type-badge green">' + t('badgeRecommended') + '</span>';
        simpleCard.querySelector('.cancel-type-desc').textContent = t('simpleCancelDesc');
        var simpleMeta = simpleCard.querySelectorAll('.cancel-type-meta span');
        if (simpleMeta[0]) simpleMeta[0].lastChild.textContent = t('simpleCancelCycle');
        if (simpleMeta[1]) simpleMeta[1].lastChild.textContent = t('simpleCancelNoLiquidation');
    }
    // 普通注销卡
    var normalCard = document.querySelector('#page-cancel-type .cancel-type-card[data-cancel="normal"]');
    if (normalCard) {
        normalCard.querySelector('.cancel-type-title').innerHTML = t('normalCancel') + ' <span class="cancel-type-badge orange">' + t('badgeStandard') + '</span>';
        normalCard.querySelector('.cancel-type-desc').textContent = t('normalCancelDesc');
        var normalMeta = normalCard.querySelectorAll('.cancel-type-meta span');
        if (normalMeta[0]) normalMeta[0].lastChild.textContent = t('normalCancelCycle');
        if (normalMeta[1]) normalMeta[1].lastChild.textContent = t('normalCancelNeedLiquidation');
    }
    // ---- 注册类型选择页 (entity-startup page) ----
    var entityStartupTitle = document.querySelector('#page-entity-startup .page-title');
    if (entityStartupTitle) entityStartupTitle.textContent = t('entityStartupTitle');
    var entityStartupIntro = document.querySelector('#page-entity-startup .cancel-type-intro');
    if (entityStartupIntro) entityStartupIntro.textContent = t('entityStartupIntro');
    var companyRegCard = document.querySelector('#page-entity-startup .cancel-type-card[data-entity-startup="company"]');
    if (companyRegCard) {
        companyRegCard.querySelector('.cancel-type-title span[data-i18n]').textContent = t('entityCompanyReg');
        companyRegCard.querySelector('.cancel-type-badge').textContent = t('entityBadgeCorp');
        companyRegCard.querySelector('.cancel-type-desc').textContent = t('entityCompanyRegDesc');
        var companyMeta = companyRegCard.querySelectorAll('.cancel-type-meta span span[data-i18n]');
        if (companyMeta[0]) companyMeta[0].textContent = t('entityCompanyCycle');
        if (companyMeta[1]) companyMeta[1].textContent = t('entityCompanyFea');
    }
    var indivRegCard = document.querySelector('#page-entity-startup .cancel-type-card[data-entity-startup="individual"]');
    if (indivRegCard) {
        indivRegCard.querySelector('.cancel-type-title span[data-i18n]').textContent = t('entityIndivReg');
        indivRegCard.querySelector('.cancel-type-badge').textContent = t('entityBadgeIndiv');
        indivRegCard.querySelector('.cancel-type-desc').textContent = t('entityIndivRegDesc');
        var indivMeta = indivRegCard.querySelectorAll('.cancel-type-meta span span[data-i18n]');
        if (indivMeta[0]) indivMeta[0].textContent = t('entityIndivCycle');
        if (indivMeta[1]) indivMeta[1].textContent = t('entityIndivFea');
    }

    // ---- 注销类型选择页 (entity-cancel page) ----
    var entityCancelTitle = document.querySelector('#page-entity-cancel .page-title');
    if (entityCancelTitle) entityCancelTitle.textContent = t('entityCancelTitle');
    var entityCancelIntro = document.querySelector('#page-entity-cancel .cancel-type-intro');
    if (entityCancelIntro) entityCancelIntro.textContent = t('entityCancelIntro');
    var companyCancelCard = document.querySelector('#page-entity-cancel .cancel-type-card[data-entity-cancel="company"]');
    if (companyCancelCard) {
        companyCancelCard.querySelector('.cancel-type-title span[data-i18n]').textContent = t('entityCompanyCancel');
        companyCancelCard.querySelector('.cancel-type-badge').textContent = t('entityBadgeCorp');
        companyCancelCard.querySelector('.cancel-type-desc').textContent = t('entityCompanyCancelDesc');
        var ccMeta = companyCancelCard.querySelectorAll('.cancel-type-meta span span[data-i18n]');
        if (ccMeta[0]) ccMeta[0].textContent = t('entityCompanyCancelCycle');
        if (ccMeta[1]) ccMeta[1].textContent = t('entityCompanyCancelFea');
    }
    var indivCancelCard = document.querySelector('#page-entity-cancel .cancel-type-card[data-entity-cancel="individual"]');
    if (indivCancelCard) {
        indivCancelCard.querySelector('.cancel-type-title span[data-i18n]').textContent = t('entityIndivCancel');
        indivCancelCard.querySelector('.cancel-type-badge').textContent = t('entityBadgeIndiv');
        indivCancelCard.querySelector('.cancel-type-desc').textContent = t('entityIndivCancelDesc');
        var icMeta = indivCancelCard.querySelectorAll('.cancel-type-meta span span[data-i18n]');
        if (icMeta[0]) icMeta[0].textContent = t('entityIndivCancelCycle');
        if (icMeta[1]) icMeta[1].textContent = t('entityIndivCancelFea');
    }

    // ---- 个体工商户注销方式选择页 (individual-cancel-type page) ----
    var indivCancelTypeTitle = document.querySelector('#page-individual-cancel-type .page-title');
    if (indivCancelTypeTitle) indivCancelTypeTitle.textContent = t('indivCancelTypeTitle');
    var indivCancelTypeIntro = document.querySelector('#page-individual-cancel-type .cancel-type-intro');
    if (indivCancelTypeIntro) indivCancelTypeIntro.textContent = t('indivCancelTypeIntro');
    var indivSimpleCard = document.querySelector('#page-individual-cancel-type .cancel-type-card[data-indiv-cancel="simple"]');
    if (indivSimpleCard) {
        indivSimpleCard.querySelector('.cancel-type-title span[data-i18n]').textContent = t('indivSimpleCancel');
        indivSimpleCard.querySelector('.cancel-type-badge').textContent = t('badgeRecommended');
        indivSimpleCard.querySelector('.cancel-type-desc').textContent = t('indivSimpleCancelDesc');
        var isMeta = indivSimpleCard.querySelectorAll('.cancel-type-meta span span[data-i18n]');
        if (isMeta[0]) isMeta[0].textContent = t('indivSimpleCancelCycle');
        if (isMeta[1]) isMeta[1].textContent = t('indivSimpleCancelFea');
    }
    var indivNormalCard = document.querySelector('#page-individual-cancel-type .cancel-type-card[data-indiv-cancel="normal"]');
    if (indivNormalCard) {
        indivNormalCard.querySelector('.cancel-type-title span[data-i18n]').textContent = t('indivNormalCancel');
        indivNormalCard.querySelector('.cancel-type-badge').textContent = t('badgeStandard');
        indivNormalCard.querySelector('.cancel-type-desc').textContent = t('indivNormalCancelDesc');
        var inMeta = indivNormalCard.querySelectorAll('.cancel-type-meta span span[data-i18n]');
        if (inMeta[0]) inMeta[0].textContent = t('indivNormalCancelCycle');
        if (inMeta[1]) inMeta[1].textContent = t('indivNormalCancelFea');
    }

    // 流程细则页标题：正在查看某流程时保留/重建动态标题，避免被通用标题冲掉
    var flowTitleEl = document.getElementById('flow-title');
    if (flowTitleEl) {
        if (typeof currentAxisModuleData !== 'undefined' && currentAxisModuleData && currentAxisKey) {
            var _ad = getAxisData(currentAxisKey);
            var _m = _ad && _ad.modules.find(function (m) { return m.id === currentAxisModuleData.id; });
            flowTitleEl.textContent = (_m ? _m.title : currentAxisModuleData.title) + (currentLang === 'en' ? ' Process' : ' 流程');
        } else {
            flowTitleEl.textContent = t('flowTitle');
        }
    }
    // 经营服务大厅页标题
    document.querySelector('#page-grid .page-title').textContent = t('gridTitle');

    // 搜索页与首页搜索入口
    var searchTitleEl = document.getElementById('search-title');
    if (searchTitleEl) searchTitleEl.textContent = t('searchTitle');
    var searchInputEl = document.getElementById('search-input');
    if (searchInputEl) {
        searchInputEl.placeholder = t('searchPlaceholder');
        searchInputEl.setAttribute('aria-label', t('searchTitle'));
    }
    var homeSearchText = document.getElementById('home-search-text');
    if (homeSearchText) homeSearchText.textContent = t('searchPlaceholder');

    // 清缓存，下次进入页面时自动重渲染
    var gc = document.getElementById('grid-content');
    if (gc) { gc.dataset.lang = ''; }
    var rc = document.getElementById('region-grid-content');
    if (rc) { rc.dataset.lang = ''; rc.dataset.bound = ''; }
}

function renderLingangPolicies() {
            const container = document.getElementById('lingang-content');
            container.innerHTML = getLingangPolicies().map((p, i) => `
                <div class="doc-item doc-item-clickable" data-idx="${i}">
                    <div class="doc-title">${p.q}</div>
                    <div class="doc-meta"><span class="meta-tag">${currentLang==="en"?"Lingang Special Area":"临港新片区"}</span></div>
                </div>
            `).join('');
            container.querySelectorAll('.doc-item').forEach(item => {
                item.addEventListener('click', () => {
                    const idx = parseInt(item.getAttribute('data-idx'));
                    const policy = getLingangPolicies()[idx];
                    renderArticle(policy.q, policy.a, currentLang==='en'?'Lingang Special Area Administration':'临港新片区管委会');
                    document.querySelector('#page-article .back-btn').setAttribute('data-back', 'lingang');
                    switchPage('page-article', 'forward');
                });
            });
        }

        // ============================================================
        //  3. 状态与 DOM 控制
        // ============================================================
        let currentAxisModuleData = null;
        let currentAxisKey = null;
        let currentCancelType = null;
        const pages = { home: document.getElementById('page-home'), axis: document.getElementById('page-axis'), 'entity-startup': document.getElementById('page-entity-startup'), 'cancel-type': document.getElementById('page-cancel-type'), 'entity-cancel': document.getElementById('page-entity-cancel'), 'individual-cancel-type': document.getElementById('page-individual-cancel-type'), flow: document.getElementById('page-flow'), grid: document.getElementById('page-grid'), drawer: document.getElementById('page-drawer'), region: document.getElementById('page-region'), policy: document.getElementById('page-policy'), article: document.getElementById('page-article'), lingang: document.getElementById('page-lingang'), search: document.getElementById('page-search') };
        const overlays = { action: document.getElementById('overlay-action') };

        function switchPage(targetId, direction = 'forward') {
            Object.values(pages).forEach(page => {
                if (page.id === targetId) { page.classList.remove('hidden', 'hidden-left'); }
                else { page.classList.add(direction === 'forward' ? 'hidden-left' : 'hidden'); }
            });

        }

        // ============================================================
        //  4. 首页逻辑
        // ============================================================
        document.querySelectorAll('.home-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-type');
                const key = btn.getAttribute('data-key');
                if (type === 'axis') {
                    if (key === 'cancel') {
                        switchPage('page-entity-cancel', 'forward');
                    } else if (key === 'startup') {
                        switchPage('page-entity-startup', 'forward');
                    } else {
                        currentCancelType = null;
                        renderAxis(key);
                        switchPage('page-axis', 'forward');
                    }
                } else if (type === 'grid') {
                    renderGrid();
                    switchPage('page-grid', 'forward');
                }
            });
        });

        // ============================================================
        //  5. 注销方式选择
        // ============================================================
        document.querySelectorAll('#page-cancel-type .cancel-type-card').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-cancel');
                currentCancelType = type;
                renderAxis('cancel_' + type);
                switchPage('page-axis', 'forward');
            });
        });

        // ============================================================
        //  5b. 注册类型选择（公司/个体工商户）
        // ============================================================
        document.querySelectorAll('#page-entity-startup .cancel-type-card').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-entity-startup');
                currentCancelType = null;
                if (type === 'company') {
                    renderAxis('startup');
                } else if (type === 'individual') {
                    renderAxis('individual_startup');
                }
                switchPage('page-axis', 'forward');
            });
        });

        // ============================================================
        //  5c. 注销类型选择（公司/个体工商户）
        // ============================================================
        document.querySelectorAll('#page-entity-cancel .cancel-type-card').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-entity-cancel');
                if (type === 'company') {
                    switchPage('page-cancel-type', 'forward');
                } else if (type === 'individual') {
                    switchPage('page-individual-cancel-type', 'forward');
                }
            });
        });

        // ============================================================
        //  5d. 个体工商户注销方式选择（简易/普通）
        // ============================================================
        document.querySelectorAll('#page-individual-cancel-type .cancel-type-card').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-indiv-cancel');
                currentCancelType = 'individual_' + type;
                renderAxis('individual_cancel_' + type);
                switchPage('page-axis', 'forward');
            });
        });

        // ============================================================
        //  6. 横轴页面渲染
        // ============================================================
        function renderAxis(key) {
            const data = getAxisData(key);
            currentAxisKey = key;
            document.getElementById('axis-title').innerText = data.title;
            // Set correct back target for page-axis based on the flow
            var axisBackBtn = document.querySelector('#page-axis .back-btn');
            if (key === 'startup' || key === 'individual_startup') {
                axisBackBtn.setAttribute('data-back', 'entity-startup');
            } else if (key === 'cancel_simple' || key === 'cancel_normal') {
                axisBackBtn.setAttribute('data-back', 'cancel-type');
            } else if (key === 'individual_cancel_simple' || key === 'individual_cancel_normal') {
                axisBackBtn.setAttribute('data-back', 'individual-cancel-type');
            } else {
                axisBackBtn.setAttribute('data-back', 'home');
            }
            const container = document.getElementById('axis-content');
            let html = '<div class="axis-track"><div class="axis-line"></div>';
            data.modules.forEach(mod => {
                html += `
                    <div class="axis-module" data-id="${mod.id}">
                        <div class="axis-node-dot"></div>
                        <div class="axis-step">${mod.step}</div>
                        <div class="axis-m-title">${mod.title}</div>
                        <div class="axis-m-desc">${mod.desc}</div>
                        <button class="axis-m-btn">${t('guidBtn')}</button>
                    </div>`;
            });
            html += '</div>';
            container.innerHTML = html;
            container.querySelectorAll('.axis-module').forEach((el, index) => {
                el.addEventListener('click', () => {
                    currentAxisModuleData = data.modules[index];
                    const linkConfig = currentLang === 'en' ? getOnlineLinkEN(currentAxisKey, currentAxisModuleData.id) : getOnlineLink(currentAxisKey, currentAxisModuleData.id);
                    const onlineBtn = document.getElementById('btn-online');
                    onlineBtn.href = linkConfig.url;
                    onlineBtn.dataset.url = linkConfig.url;
                    onlineBtn.querySelector('.sheet-btn-desc').textContent = linkConfig.desc;
                    const offlineBtn = document.getElementById('btn-offline');
                    const offlineNote = document.getElementById('offline-note');
                    if (currentAxisModuleData.onlineOnly) {
                        offlineBtn.classList.add('disabled');
                        offlineNote.textContent = t('offlineUnavailable');
                        offlineNote.classList.remove('hidden');
                    } else {
                        offlineBtn.classList.remove('disabled');
                        offlineNote.classList.add('hidden');
                    }
                    overlays.action.classList.remove('hidden');
                });
            });
            // PC 端：鼠标滚轮转横向滚动
            container.onwheel = function(e) {
                if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                    e.preventDefault();
                    container.scrollBy({ left: e.deltaY, behavior: 'smooth' });
                }
            };
        }

        // ============================================================
        //  7. 动作面板逻辑（线上外链 + 线下流程）
        // ============================================================
        const closeAction = () => overlays.action.classList.add('hidden');
        document.getElementById('btn-cancel-action').addEventListener('click', closeAction);
        overlays.action.addEventListener('click', closeAction);

        // 线上办理：复制办理网址到剪贴板（demo 环境不直接跳转）
        const onlineBtn = document.getElementById('btn-online');
        onlineBtn.addEventListener('click', (e) => {
            e.preventDefault();
            copyText(onlineBtn.dataset.url || onlineBtn.href, t('onlineCopied'));
            closeAction();
        });

        document.getElementById('btn-offline').addEventListener('click', () => {
            if (document.getElementById('btn-offline').classList.contains('disabled')) return;
            closeAction();
            renderFlow(currentAxisModuleData);
            // Set correct back target for flow page
            var flowBackBtn = document.querySelector('#page-flow .back-btn');
            flowBackBtn.setAttribute('data-back', 'axis');
            switchPage('page-flow', 'forward');
        });

        // ============================================================
        //  8. 流程图渲染
        // ============================================================
        function renderFlow(moduleData) {
            document.getElementById('flow-title').innerText = moduleData.title + (currentLang==='en'?' Process':' 流程');
            const container = document.getElementById('flow-content');

            if (moduleData.flowTypes && moduleData.flows) {
                let html = '<div class="flow-type-bar">';
                html += '<div class="flow-type-label">'+t('typeLabel')+'</div>';
                html += '<div class="flow-type-scroll">';
                moduleData.flowTypes.forEach((type, i) => {
                    html += `<div class="flow-type-tab ${i === 0 ? 'active' : ''}" data-type="${type}">${type}</div>`;
                });
                html += '</div></div><div id="flowchart-container"></div>';
                container.innerHTML = html;

                renderFlowchart(moduleData.flows[moduleData.flowTypes[0]], 'flowchart-container');

                const scrollContainer = container.querySelector('.flow-type-scroll');
                container.querySelectorAll('.flow-type-tab').forEach(tab => {
                    tab.addEventListener('click', () => {
                        container.querySelectorAll('.flow-type-tab').forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        renderFlowchart(moduleData.flows[tab.getAttribute('data-type')], 'flowchart-container');
                    });
                });
            } else {
                container.innerHTML = '<div id="flowchart-container"></div>';
                renderFlowchart(moduleData.flow, 'flowchart-container');
            }
        }

        function renderFlowchart(flowData, containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            let html = '<div class="flowchart">';
            flowData.forEach((node, index) => {
                if (node.type === 'window') {
                    html += `
                        <div class="flow-node window-step ${index === 0 ? 'active' : ''}">
                            <div class="node-header"><div class="node-number">${index + 1}</div><div class="node-title">${node.title}</div><div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div></div>
                            <div class="node-details">
                                <div class="flow-rich-text">
                                    <div class="district-trigger" onclick="openDistrictSheet()">
                                        <span class="district-trigger-label">${t('selectCurrent')}</span>
                                        <span class="district-trigger-value"><span id="selected-district-name">${getWindowData("pudong").name}</span><span class="district-trigger-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span></span>
                                    </div>
                                    <div id="window-info-container">
                                        ${renderWindowCard('pudong')}
                                    </div>
                                </div>
                            </div>
                        </div>`;
                } else {
                    html += `
                        <div class="flow-node ${index === 0 ? 'active' : ''}">
                            <div class="node-header"><div class="node-number">${index + 1}</div><div class="node-title">${node.title}</div><div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div></div>
                            <div class="node-details"><div class="flow-rich-text">${node.content}</div></div>
                        </div>`;
                }
            });
            container.innerHTML = html + '</div>';

            const nodes = container.querySelectorAll('.flow-node');
            nodes.forEach(node => {
                node.querySelector('.node-header').addEventListener('click', () => {
                    const isActive = node.classList.contains('active');
                    nodes.forEach(n => n.classList.remove('active'));
                    if (!isActive) { node.classList.add('active'); }
                });
            });
        }

        function renderWindowCard(districtKey) {
            const w = getWindowData(districtKey);
            if (!w) return '';
            return `<div class="window-card">
                <div class="window-card-header"><svg viewBox="0 0 24 24" stroke="#CCB486"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>${w.office}</div>
                <div class="window-info-row"><span class="window-info-icon"><svg viewBox="0 0 24 24" stroke="#4A7B8C"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span><span>${w.address}</span></div>
                <div class="window-info-row"><span class="window-info-icon"><svg viewBox="0 0 24 24" stroke="#C4862C"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span><span>${w.time}</span></div>
                <div class="window-info-row"><span class="window-info-icon"><svg viewBox="0 0 24 24" stroke="#8B1A1A"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><span>${w.phone}</span></div>
                <div class="window-actions">
                    <button class="window-action-btn secondary" onclick="copyAddress('${w.address}')">${t("copyAddress")}</button>
                    <a class="window-action-btn primary" href="tel:${w.phone}">${t("callPhone")}</a>
                </div>
            </div>`;
        }

        function copyAddress(address) {
            copyText(address, currentLang==='en'?'Address Copied':'地址已复制');
        }

        // 通用复制：优先 clipboard API，降级 execCommand，均失败则直接展示文本
        function copyText(text, okMsg) {
            const fallback = () => {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                let ok = false;
                try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
                document.body.removeChild(ta);
                showToast(ok ? okMsg : text, ok ? 2000 : 5000);
            };
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => showToast(okMsg)).catch(fallback);
            } else {
                fallback();
            }
        }

        function showToast(msg, duration = 2000) {
            let el = document.querySelector('.toast');
            if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
            el.textContent = msg;
            el.classList.add('show');
            clearTimeout(el._timer);
            el._timer = setTimeout(() => el.classList.remove('show'), duration);
        }

        function openDistrictSheet() {
            const overlay = document.getElementById('district-sheet-overlay');
            const body = document.getElementById('district-sheet-body');
            let html = '<div class="district-grid">';
            var _wd = getWindowDataAll();
            Object.keys(_wd).forEach(key => {
                const d = _wd[key];
                html += `<div class="district-grid-item" data-key="${key}" onclick="selectDistrict('${key}')">
                    <span class="district-option-name">${d.name}</span>
                    <span class="district-option-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                </div>`;
            });
            html += '</div>';
            body.innerHTML = html;
            overlay.classList.add('active');
        }

        function closeDistrictSheet() {
            document.getElementById('district-sheet-overlay').classList.remove('active');
        }

        function selectDistrict(key) {
            const w = getWindowData(key);
            document.getElementById('selected-district-name').textContent = w.name;
            document.getElementById('window-info-container').innerHTML = renderWindowCard(key);
            closeDistrictSheet();
        }

        // ============================================================
        //  9. 经营服务大厅渲染
        // ============================================================

        // ============================================================
        //  9. 经营服务大厅渲染
        // ============================================================
        function renderGrid() {
            const container = document.getElementById('grid-content');
            if (container.innerHTML && container.dataset.lang === currentLang) return;
            container.dataset.lang = currentLang;
            let html = '';
            getGridGroups().forEach(group => {
                html += `<div class="grid-group-title">${group.label}</div><div class="grid-row">`;
                group.ids.forEach(id => {
                    const item = getGridData().find(g => g.id === id);
                    if (!item) return;
                    const bgStyle = `background: rgba(${hexToRgb(item.icon.match(/fill="([^"]+)"/)?.[1] || '#999')},0.12)`;
                    html += `<div class="grid-item" data-id="${item.id}">
                        <div class="grid-logo" style="${bgStyle}">${item.icon || ''}</div>
                        <div class="grid-name">${item.name}</div>
                    </div>`;
                });
                html += '</div>';
            });
            container.innerHTML = html;
            container.querySelectorAll('.grid-item').forEach(item => {
                item.addEventListener('click', () => {
                    const gridId = item.getAttribute('data-id');
                    const data = getGridData().find(g => g.id === gridId);
                    if (data.isRegion) {
                        renderRegionMap();
                        switchPage('page-region', 'forward');
                    } else if (data.isLingang) {
                        renderLingangPolicies();
                        switchPage('page-lingang', 'forward');
                    } else {
                        renderDrawer(gridId);
                        switchPage('page-drawer', 'forward');
                    }
                });
            });
        }
        function hexToRgb(hex) {
            hex = hex.replace('#','');
            const r = parseInt(hex.substring(0,2),16);
            const g = parseInt(hex.substring(2,4),16);
            const b = parseInt(hex.substring(4,6),16);
            return `${r},${g},${b}`;
        }


        // ============================================================
        //  10. 各区政策 4x4 网格渲染
        // ============================================================
        function renderRegionMap() {
            const container = document.getElementById('region-grid-content');
            if (container.dataset.bound === 'true' && container.dataset.lang === currentLang) return;
            container.dataset.bound = 'true';
            container.dataset.lang = currentLang;

            let html = `<div class="region-grid-header"><h3>${t("selectDistrict")}</h3><p>${t("viewPolicy")}</p></div>`;
            html += '<div class="region-grid-flat">';

            getRegionGridData().forEach(r => {
                const count = getRegionPolicyData(r.key) ? getRegionPolicyData(r.key).policies.length : 0;
                html += `<div class="rg-cell" data-region="${r.key}">
                    <div class="rg-name">${r.name}</div>
                    <div class="rg-count">${count}${currentLang==="en"?" policies":"项政策"}</div>
                </div>`;
            });

            html += '</div>';
            container.innerHTML = html;

            container.querySelectorAll('.rg-cell').forEach(cell => {
                cell.addEventListener('click', () => {
                    const key = cell.getAttribute('data-region');
                    renderRegionPolicy(key);
                    switchPage('page-policy', 'forward');
                });
            });
        }

        // ============================================================
        //  11. 区划政策列表渲染
        // ============================================================
        function renderRegionPolicy(regionKey) {
            const data = getRegionPolicyData(regionKey);
            document.getElementById('policy-title').innerText = data.name + (currentLang==='en'?' Policy Compilation':' 政策汇编');
            const container = document.getElementById('policy-content');
            container.innerHTML = data.policies.map((item, index) => `
                <div class="doc-item" data-region="${regionKey}" data-index="${index}">
                    <div class="doc-title">${item.q}</div>
                    <div class="doc-meta">
                        <span class="doc-tag">${currentLang==="en"?"Official Release":"官方发布"}</span>
                        <span>${currentLang==="en"?"View Full Text >":"查阅全文 >"}</span>
                    </div>
                </div>
            `).join('');
            container.querySelectorAll('.doc-item').forEach(item => {
                item.addEventListener('click', () => {
                    const rKey = item.getAttribute('data-region');
                    const idx = item.getAttribute('data-index');
                    const policy = getRegionPolicyData(rKey).policies[idx];
                    renderArticle(policy.q, policy.a);
                    switchPage('page-article', 'forward');
                });
            });
        }

        // ============================================================
        //  12. 政策正文渲染
        // ============================================================
        function renderArticle(title, content, publisher) {
            const container = document.getElementById('article-content');
            container.innerHTML = `
                <div class="article-header">
                    <h1 class="article-title">${title}</h1>
                    <div class="article-meta">
                        <span>${publisher || t("publisher")}</span>
                        <span>${t("docNo")}</span>
                        <span>${t("effectDate")}</span>
                    </div>
                </div>
                <div class="article-body">${content}</div>`;
            container.scrollTop = 0;
        }

        // ============================================================
        //  13. 抽屉库渲染
        // ============================================================
        const drawerTypeSelectorNames = new Set(['公司变更登记','分支机构管理','Company Changes','Branch Management']);

        function renderDrawer(gridId) {
            const data = getGridData().find(g => g.id === gridId);
            if (!data) return;
            document.getElementById('drawer-title').innerText = data.name + (currentLang==='en'?' Service Library':' 服务库');
            const container = document.getElementById('drawer-content');
            const hasDrawerTypeData = data.drawerTypes && data.drawersMap;
            const shouldShowTypeSelector = hasDrawerTypeData && drawerTypeSelectorNames.has(data.name);

            // 始终先创建 drawer-body 容器，确保 renderDrawerContent 能找到它
            if (shouldShowTypeSelector) {
                let html = '<div class="drawer-type-bar"><span class="drawer-type-label">'+t('typeLabel')+'</span><div class="drawer-type-scroll">';
                data.drawerTypes.forEach((type, i) => {
                    html += `<div class="drawer-type-tab ${i === 0 ? 'active' : ''}" data-type="${type}">${type}</div>`;
                });
                html += '</div></div><div id="drawer-body"></div>';
                container.innerHTML = html;

                renderDrawerContent(data.drawersMap[data.drawerTypes[0]]);

                container.querySelectorAll('.drawer-type-tab').forEach(tab => {
                    tab.addEventListener('click', () => {
                        container.querySelectorAll('.drawer-type-tab').forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        renderDrawerContent(data.drawersMap[tab.getAttribute('data-type')]);
                    });
                });
            } else if (hasDrawerTypeData) {
                container.innerHTML = '<div id="drawer-body"></div>';
                renderDrawerContent(data.drawersMap[data.drawerTypes[0]]);
            } else {
                // 先创建 drawer-body 容器
                container.innerHTML = '<div id="drawer-body"></div>';
                if (data.drawers && data.drawers.length > 0) {
                    renderDrawerContent(data.drawers);
                } else {
                    document.getElementById('drawer-body').innerHTML = `<p class="no-data-msg">${t("noDataMsg")}</p>`;
                }
            }
        }

        function renderDrawerContent(drawers) {
            const body = document.getElementById('drawer-body');
            if (!body) return;
            body.innerHTML = drawers.map(group => `
                <div class="drawer-group">
                    <div class="d-level-1-header"><span>${group.category}</span><span class="d-level-1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span></div>
                    <div class="d-level-1-body"><div class="d-level-1-inner">
                        ${group.items.map(item => `
                            <div class="d-level-2-item">
                                <div class="d-level-2-header"><span>${item.title}</span><span class="d-level-2-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span></div>
                                <div class="d-level-2-body"><div class="d-rich-text">${item.content}</div></div>
                            </div>
                        `).join('')}
                    </div></div>
                </div>
            `).join('');
            body.querySelectorAll('.drawer-group').forEach(group => {
                group.querySelector('.d-level-1-header').addEventListener('click', () => {
                    group.classList.toggle('open');
                });
            });
            body.querySelectorAll('.d-level-2-item').forEach(item => {
                item.querySelector('.d-level-2-header').addEventListener('click', () => {
                    item.classList.toggle('open');
                });
            });
        }

        // ============================================================
        //  14. 区选择弹窗事件
        // ============================================================
        document.getElementById('district-sheet-overlay').addEventListener('click', closeDistrictSheet);

        // ============================================================
        //  15. 全局返回逻辑
        // ============================================================
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const backTarget = btn.getAttribute('data-back');
                if (backTarget === 'axis') {
                    // 统一返回横轴流程页，再由横轴页按自身来源返回对应选择页
                    currentCancelType = null;
                    switchPage('page-axis', 'backward');
                } else {
                    // 搜索等路径直达内层页后，返回目标页可能尚未渲染，先确保内容就绪
                    if (backTarget === 'grid') renderGrid();
                    else if (backTarget === 'region') renderRegionMap();
                    else if (backTarget === 'lingang') renderLingangPolicies();
                    switchPage('page-' + backTarget, 'backward');
                }
            });
        });


        // ============================================================
        //  16. 无障碍增强（键盘操作 + 读屏语义，自动覆盖动态渲染内容）
        // ============================================================
        (function () {
            var CLICKABLE = '.cancel-type-card, .axis-module, .grid-item, .doc-item, .rg-cell, ' +
                '.d-level-1-header, .d-level-2-header, .node-header, .district-grid-item, ' +
                '.district-trigger, .flow-type-tab, .drawer-type-tab, .home-search, .fab-item';

            function enhance(root) {
                if (root.nodeType !== 1) return;
                var els = [];
                if (root.matches && root.matches(CLICKABLE)) els.push(root);
                if (root.querySelectorAll) els = els.concat(Array.prototype.slice.call(root.querySelectorAll(CLICKABLE)));
                els.forEach(function (el) {
                    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
                    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
                });
                syncExpanded(root);
            }

            function syncExpanded(root) {
                if (!root.querySelectorAll) return;
                root.querySelectorAll('.flow-node').forEach(function (n) {
                    var h = n.querySelector('.node-header');
                    if (h) h.setAttribute('aria-expanded', n.classList.contains('active') ? 'true' : 'false');
                });
                root.querySelectorAll('.drawer-group').forEach(function (g) {
                    var h = g.querySelector('.d-level-1-header');
                    if (h) h.setAttribute('aria-expanded', g.classList.contains('open') ? 'true' : 'false');
                });
                root.querySelectorAll('.d-level-2-item').forEach(function (it) {
                    var h = it.querySelector('.d-level-2-header');
                    if (h) h.setAttribute('aria-expanded', it.classList.contains('open') ? 'true' : 'false');
                });
            }

            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (m) {
                    if (m.type === 'childList') {
                        m.addedNodes.forEach(enhance);
                    } else if (m.type === 'attributes' && m.target.nodeType === 1) {
                        var t = m.target;
                        if (t.matches('.flow-node, .drawer-group, .d-level-2-item')) {
                            var page = t.closest('.page') || t.parentElement;
                            if (page) syncExpanded(page);
                        }
                    }
                });
            });
            observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
            enhance(document.body);

            // 键盘：Enter / Space 触发 role="button" 元素（原生 button/a 浏览器已自带）
            document.addEventListener('keydown', function (e) {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                var el = e.target && e.target.closest ? e.target.closest('[role="button"]') : null;
                if (!el) return;
                var tag = el.tagName;
                if (tag === 'BUTTON' || tag === 'A' || tag === 'INPUT') return;
                e.preventDefault();
                el.click();
            });
        })();

        // ============================================================
        //  17. 全局搜索（静态数据前端检索，随当前语言即时建索引）
        // ============================================================
        function stripHtml(s) {
            return (s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        }

        var _searchCache = { lang: null, idx: null };

        function buildSearchIndex() {
            if (_searchCache.lang === currentLang && _searchCache.idx) return _searchCache.idx;
            var idx = [];
            // 流程指引（开办 / 注销全部横轴模块）
            ['startup', 'individual_startup', 'cancel_simple', 'cancel_normal', 'individual_cancel_simple', 'individual_cancel_normal'].forEach(function (key) {
                var data = getAxisData(key);
                if (!data) return;
                data.modules.forEach(function (mod) {
                    var nodes = [];
                    if (mod.flows) { Object.keys(mod.flows).forEach(function (k) { nodes = nodes.concat(mod.flows[k]); }); }
                    else if (mod.flow) { nodes = mod.flow; }
                    var body = nodes.map(function (n) { return n.title + ' ' + stripHtml(n.content); }).join(' ');
                    idx.push({ type: 'flow', axisKey: key, moduleId: mod.id, title: mod.title, group: data.title, text: stripHtml(mod.desc) + ' ' + body });
                });
            });
            // 各区政策
            getRegionGridData().forEach(function (r) {
                var d = getRegionPolicyData(r.key);
                if (!d) return;
                d.policies.forEach(function (p, i) {
                    idx.push({ type: 'policy', regionKey: r.key, policyIndex: i, title: p.q, group: d.name, text: stripHtml(p.a) });
                });
            });
            // 临港专项政策
            var lgGroup = currentLang === 'en' ? 'Lingang Special Area' : '临港新片区';
            getLingangPolicies().forEach(function (p, i) {
                idx.push({ type: 'lingang', policyIndex: i, title: p.q, group: lgGroup, text: stripHtml(p.a) });
            });
            // 服务事项（经营服务大厅各服务库条目）
            getGridData().forEach(function (g) {
                if (g.isRegion || g.isLingang) return;
                function collect(groups, drawerType) {
                    (groups || []).forEach(function (grp) {
                        (grp.items || []).forEach(function (item) {
                            idx.push({ type: 'service', gridId: g.id, drawerType: drawerType, itemTitle: item.title,
                                title: item.title.replace(/^Q:\s*/, ''), group: g.name, text: stripHtml(item.content) });
                        });
                    });
                }
                if (g.drawers) collect(g.drawers, null);
                if (g.drawersMap) Object.keys(g.drawersMap).forEach(function (k) { collect(g.drawersMap[k], k); });
            });
            _searchCache = { lang: currentLang, idx: idx };
            return idx;
        }

        var _lastResults = [];

        function renderSearch() {
            var input = document.getElementById('search-input');
            var box = document.getElementById('search-results');
            if (!input || !box) return;
            var q = input.value.trim().toLowerCase();
            if (!q) {
                box.innerHTML = '<p class="no-data-msg">' + t('searchHint') + '</p>';
                _lastResults = [];
                return;
            }
            var terms = q.split(/\s+/);
            _lastResults = buildSearchIndex().filter(function (item) {
                var hay = (item.title + ' ' + item.group + ' ' + item.text).toLowerCase();
                return terms.every(function (term) { return hay.indexOf(term) !== -1; });
            });
            if (!_lastResults.length) {
                box.innerHTML = '<p class="no-data-msg">' + t('searchNoResult') + '</p>';
                return;
            }
            var groups = [
                { key: 'flow', label: t('searchGroupFlow') },
                { key: 'policy', label: t('searchGroupPolicy') },
                { key: 'service', label: t('searchGroupService') }
            ];
            var html = '';
            groups.forEach(function (g) {
                var items = _lastResults.map(function (r, i) { return { r: r, i: i }; }).filter(function (x) {
                    return x.r.type === g.key || (g.key === 'policy' && x.r.type === 'lingang');
                });
                if (!items.length) return;
                html += '<div class="search-group-title">' + g.label + '</div>';
                items.forEach(function (x) {
                    html += '<div class="doc-item doc-item-clickable" data-sidx="' + x.i + '">' +
                        '<div class="doc-title">' + x.r.title + '</div>' +
                        '<div class="doc-meta"><span class="doc-tag">' + x.r.group + '</span></div>' +
                        '</div>';
                });
            });
            box.innerHTML = html;
            box.querySelectorAll('.doc-item').forEach(function (el) {
                el.addEventListener('click', function () {
                    goSearchResult(_lastResults[parseInt(el.getAttribute('data-sidx'), 10)]);
                });
            });
        }

        function goSearchResult(item) {
            if (!item) return;
            if (item.type === 'flow') {
                renderAxis(item.axisKey);
                var data = getAxisData(item.axisKey);
                var mod = data.modules.find(function (m) { return m.id === item.moduleId; });
                if (!mod) return;
                currentAxisModuleData = mod;
                renderFlow(mod);
                document.querySelector('#page-flow .back-btn').setAttribute('data-back', 'axis');
                switchPage('page-flow', 'forward');
            } else if (item.type === 'policy') {
                renderRegionPolicy(item.regionKey);
                var d = getRegionPolicyData(item.regionKey);
                var p = d && d.policies[item.policyIndex];
                if (!p) return;
                renderArticle(p.q, p.a);
                document.querySelector('#page-article .back-btn').setAttribute('data-back', 'policy');
                switchPage('page-article', 'forward');
            } else if (item.type === 'lingang') {
                renderLingangPolicies();
                var p2 = getLingangPolicies()[item.policyIndex];
                if (!p2) return;
                renderArticle(p2.q, p2.a, currentLang === 'en' ? 'Lingang Special Area Administration' : '临港新片区管委会');
                document.querySelector('#page-article .back-btn').setAttribute('data-back', 'lingang');
                switchPage('page-article', 'forward');
            } else if (item.type === 'service') {
                renderDrawer(item.gridId);
                // 命中条目在非默认类型 Tab 下时，先切到对应 Tab
                if (item.drawerType) {
                    document.querySelectorAll('#drawer-content .drawer-type-tab').forEach(function (tab) {
                        if (tab.getAttribute('data-type') === item.drawerType) tab.click();
                    });
                }
                switchPage('page-drawer', 'forward');
                setTimeout(function () {
                    document.querySelectorAll('#drawer-body .d-level-2-item').forEach(function (it) {
                        var h = it.querySelector('.d-level-2-header span');
                        if (h && h.textContent === item.itemTitle) {
                            it.classList.add('open');
                            var grp = it.closest('.drawer-group');
                            if (grp) grp.classList.add('open');
                            it.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    });
                }, 80);
            }
        }

        // 首页搜索入口：进入搜索页并聚焦输入框
        document.getElementById('home-search').addEventListener('click', function () {
            switchPage('page-search', 'forward');
            renderSearch();
            setTimeout(function () { document.getElementById('search-input').focus(); }, 300);
        });

        // 输入防抖检索
        (function () {
            var timer = null;
            document.getElementById('search-input').addEventListener('input', function () {
                clearTimeout(timer);
                timer = setTimeout(renderSearch, 150);
            });
        })();

        // 语言切换后按新语言重建索引并重渲染当前检索结果
        var _origToggleLang = toggleLang;
        toggleLang = function () {
            _origToggleLang();
            renderSearch();
        };
