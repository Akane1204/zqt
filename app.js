function renderLingangPolicies() {
            const container = document.getElementById('lingang-content');
            container.innerHTML = lingangPolicies.map((p, i) => `
                <div class="doc-item doc-item-clickable" data-idx="${i}">
                    <div class="doc-title">${p.q}</div>
                    <div class="doc-meta"><span class="meta-tag">临港新片区</span></div>
                </div>
            `).join('');
            container.querySelectorAll('.doc-item').forEach(item => {
                item.addEventListener('click', () => {
                    const idx = parseInt(item.getAttribute('data-idx'));
                    const policy = lingangPolicies[idx];
                    renderArticle(policy.q, policy.a, '临港新片区管委会');
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
        const pages = { home: document.getElementById('page-home'), axis: document.getElementById('page-axis'), 'cancel-type': document.getElementById('page-cancel-type'), flow: document.getElementById('page-flow'), grid: document.getElementById('page-grid'), drawer: document.getElementById('page-drawer'), region: document.getElementById('page-region'), policy: document.getElementById('page-policy'), article: document.getElementById('page-article'), lingang: document.getElementById('page-lingang') };
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
                        switchPage('page-cancel-type', 'forward');
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
        document.querySelectorAll('.cancel-type-card').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-cancel');
                currentCancelType = type;
                renderAxis('cancel_' + type);
                switchPage('page-axis', 'forward');
            });
        });

        // ============================================================
        //  6. 横轴页面渲染
        // ============================================================
        function renderAxis(key) {
            const data = axisData[key];
            currentAxisKey = key;
            document.getElementById('axis-title').innerText = data.title;
            const container = document.getElementById('axis-content');
            let html = '<div class="axis-track"><div class="axis-line"></div>';
            data.modules.forEach(mod => {
                html += `
                    <div class="axis-module" data-id="${mod.id}">
                        <div class="axis-node-dot"></div>
                        <div class="axis-step">${mod.step}</div>
                        <div class="axis-m-title">${mod.title}</div>
                        <div class="axis-m-desc">${mod.desc}</div>
                        <button class="axis-m-btn">办理指引 &rarr;</button>
                    </div>`;
            });
            html += '</div>';
            container.innerHTML = html;
            container.querySelectorAll('.axis-module').forEach((el, index) => {
                el.addEventListener('click', () => {
                    currentAxisModuleData = data.modules[index];
                    const linkConfig = getOnlineLink(currentAxisKey);
                    const onlineBtn = document.getElementById('btn-online');
                    onlineBtn.href = linkConfig.url;
                    onlineBtn.querySelector('.sheet-btn-desc').textContent = linkConfig.desc;
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

        // 线上办理：根据当前业务设置外链
        const onlineBtn = document.getElementById('btn-online');
        onlineBtn.addEventListener('click', (e) => {
            closeAction();
        });

        document.getElementById('btn-offline').addEventListener('click', () => {
            closeAction();
            renderFlow(currentAxisModuleData);
            switchPage('page-flow', 'forward');
        });

        // ============================================================
        //  8. 流程图渲染
        // ============================================================
        function renderFlow(moduleData) {
            document.getElementById('flow-title').innerText = moduleData.title + ' 流程';
            const container = document.getElementById('flow-content');

            if (moduleData.flowTypes && moduleData.flows) {
                let html = '<div class="flow-type-bar">';
                html += '<div class="flow-type-label">类型：</div>';
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
                            <div class="node-header"><div class="node-number">${index + 1}</div><div class="node-title">${node.title}</div><div class="node-icon">▼</div></div>
                            <div class="node-details">
                                <div class="flow-rich-text">
                                    <div class="district-trigger" onclick="openDistrictSheet()">
                                        <span class="district-trigger-label">当前选择</span>
                                        <span class="district-trigger-value"><span id="selected-district-name">浦东新区</span><span class="district-trigger-arrow">▼</span></span>
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
                            <div class="node-header"><div class="node-number">${index + 1}</div><div class="node-title">${node.title}</div><div class="node-icon">▼</div></div>
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
            const w = windowData[districtKey];
            if (!w) return '';
            return `<div class="window-card">
                <div class="window-card-header"><svg viewBox="0 0 24 24" stroke="#CCB486"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>${w.office}</div>
                <div class="window-info-row"><span class="window-info-icon"><svg viewBox="0 0 24 24" stroke="#5A8A6A"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span><span>${w.address}</span></div>
                <div class="window-info-row"><span class="window-info-icon"><svg viewBox="0 0 24 24" stroke="#C4862C"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span><span>${w.time}</span></div>
                <div class="window-info-row"><span class="window-info-icon"><svg viewBox="0 0 24 24" stroke="#8B1A1A"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><span>${w.phone}</span></div>
                <div class="window-actions">
                    <button class="window-action-btn secondary" onclick="copyAddress('${w.address}')">复制地址</button>
                    <a class="window-action-btn primary" href="tel:${w.phone}">拨打电话</a>
                </div>
            </div>`;
        }

        function copyAddress(address) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(address).then(() => {
                    showToast('地址已复制');
                });
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
            Object.keys(windowData).forEach(key => {
                const d = windowData[key];
                html += `<div class="district-grid-item" data-key="${key}" onclick="selectDistrict('${key}')">
                    <span class="district-option-name">${d.name}</span>
                    <span class="district-option-check">✓</span>
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
            const w = windowData[key];
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
            if (container.innerHTML) return;
            let html = '';
            gridGroups.forEach(group => {
                html += `<div class="grid-group-title">${group.label}</div><div class="grid-row">`;
                group.ids.forEach(id => {
                    const item = gridData.find(g => g.id === id);
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
                    const data = gridData.find(g => g.id === gridId);
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
            if (container.dataset.bound === 'true') return;
            container.dataset.bound = 'true';

            let html = '<div class="region-grid-header"><h3>选择企业所在区</h3><p>查看各区最新助企政策汇编</p></div>';
            html += '<div class="region-grid-flat">';

            regionGridData.forEach(r => {
                const count = regionPolicyData[r.key] ? regionPolicyData[r.key].policies.length : 0;
                html += `<div class="rg-cell" data-region="${r.key}">
                    <div class="rg-name">${r.name}</div>
                    <div class="rg-count">${count}项政策</div>
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
            const data = regionPolicyData[regionKey];
            document.getElementById('policy-title').innerText = data.name + ' 政策汇编';
            const container = document.getElementById('policy-content');
            container.innerHTML = data.policies.map((item, index) => `
                <div class="doc-item" data-region="${regionKey}" data-index="${index}">
                    <div class="doc-title">${item.q}</div>
                    <div class="doc-meta">
                        <span class="doc-tag">官方发布</span>
                        <span>查阅全文 &gt;</span>
                    </div>
                </div>
            `).join('');
            container.querySelectorAll('.doc-item').forEach(item => {
                item.addEventListener('click', () => {
                    const rKey = item.getAttribute('data-region');
                    const idx = item.getAttribute('data-index');
                    const policy = regionPolicyData[rKey].policies[idx];
                    renderArticle(policy.q, policy.a);
                    switchPage('page-article', 'forward');
                });
            });
        }

        // ============================================================
        //  12. 政策正文渲染
        // ============================================================
        function renderArticle(title, content) {
            const container = document.getElementById('article-content');
            container.innerHTML = `
                <div class="article-header">
                    <h1 class="article-title">${title}</h1>
                    <div class="article-meta">
                        <span>发布机构：所在区人民政府</span>
                        <span>实施日期：长期有效</span>
                    </div>
                </div>
                <div class="article-body">${content}</div>`;
            container.scrollTop = 0;
        }

        // ============================================================
        //  13. 抽屉库渲染
        // ============================================================
        const drawerTypeSelectorNames = new Set(['公司变更登记', '分支机构管理']);

        function renderDrawer(gridId) {
            const data = gridData.find(g => g.id === gridId);
            if (!data) return;
            document.getElementById('drawer-title').innerText = data.name + ' 服务库';
            const container = document.getElementById('drawer-content');
            const hasDrawerTypeData = data.drawerTypes && data.drawersMap;
            const shouldShowTypeSelector = hasDrawerTypeData && drawerTypeSelectorNames.has(data.name);

            // 始终先创建 drawer-body 容器，确保 renderDrawerContent 能找到它
            if (shouldShowTypeSelector) {
                let html = '<div class="drawer-type-bar"><span class="drawer-type-label">类型：</span><div class="drawer-type-scroll">';
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
                    document.getElementById('drawer-body').innerHTML = '<p class="no-data-msg">暂无政策数据</p>';
                }
            }
        }

        function renderDrawerContent(drawers) {
            const body = document.getElementById('drawer-body');
            if (!body) return;
            body.innerHTML = drawers.map(group => `
                <div class="drawer-group">
                    <div class="d-level-1-header"><span>${group.category}</span><span class="d-level-1-icon">▶</span></div>
                    <div class="d-level-1-body"><div class="d-level-1-inner">
                        ${group.items.map(item => `
                            <div class="d-level-2-item">
                                <div class="d-level-2-header"><span>${item.title}</span><span class="d-level-2-icon">▼</span></div>
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
                if (backTarget === 'axis' && currentCancelType) {
                    // 从流程页返回时，如果来自注销，回到注销选择页
                    currentCancelType = null;
                    switchPage('page-cancel-type', 'backward');
                } else {
                    switchPage(`page-${backTarget}`, 'backward');
                }
            });
        });
