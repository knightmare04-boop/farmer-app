/**
 * HarvestFlow (ហាវេសហ្វ្លូ) Exact Screen Templates
 * Faithfully reproducing Figma Mobile Pages from Untitled.fig
 */

if (!globalThis.App) globalThis.App = {};

App.views = {
  // Render Mobile Header with Dynamic Title, Lang Toggle & Profile
  renderHeader(titleText, showBrand = true) {
    const isKm = AppState.lang === 'km';
    return `
      <div class="screen-header-bar">
        <div class="header-action-group">
          <button class="header-lang-pill" onclick="App.toggleLanguage()">
            ${isKm ? 'ខ្មែរ' : 'EN'}
          </button>
          <div class="header-profile-circle" onclick="App.goToScreen('role-selection')">
            👤
          </div>
        </div>
        ${showBrand ? `
          <img src="assets/harvestflow-brand-header.png" alt="HarvestFlow" class="header-brand-img">
        ` : `
          <div style="font-size: 16px; font-weight: 800; color: var(--dark-text);">${titleText}</div>
        `}
      </div>
    `;
  },

  // Render Exact Figma Bottom Nav Bar (for Buyer flow)
  renderBottomNav(activeTab = 'home') {
    const isKm = AppState.lang === 'km';
    return `
      <nav class="mobile-bottom-nav">
        <div class="bottom-nav-item ${activeTab === 'home' ? 'active' : ''}" onclick="App.goToScreen('buyer-home')">
          <span class="bottom-nav-icon">🏠</span>
          <span>${t('navHome')}</span>
        </div>
        <div class="bottom-nav-item ${activeTab === 'cart' ? 'active' : ''}" onclick="App.goToScreen('buyer-cart')">
          <span class="bottom-nav-badge">3</span>
          <span class="bottom-nav-icon">🛒</span>
          <span>${t('navCart')}</span>
        </div>
        <div class="bottom-nav-item ${activeTab === 'orders' ? 'active' : ''}" onclick="App.goToScreen('buyer-track')">
          <span class="bottom-nav-icon">📄</span>
          <span>${t('navOrders')}</span>
        </div>
        <div class="bottom-nav-item ${activeTab === 'profile' ? 'active' : ''}" onclick="App.goToScreen('role-selection')">
          <span class="bottom-nav-icon">👤</span>
          <span>${t('navProfile')}</span>
        </div>
      </nav>
    `;
  },

  // 1. ROLE SELECTION & LOGIN (១. ជ្រើសរើសតួនាទី)
  renderRoleSelection() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content" style="padding-bottom: 24px;">
        ${this.renderHeader('', true)}

        <div style="padding: 16px 20px 24px; text-align: center;">
          <p style="font-size: 13px; color: var(--primary-green); font-weight: 700; margin-bottom: 4px;">
            ${t('taglineShort')}
          </p>
          <p style="font-size: 12px; color: var(--slate-text); margin-bottom: 20px;">
            ${t('appTagline')}
          </p>

          <div style="background: #E8F5E9; display: inline-block; padding: 4px 14px; border-radius: 999px; font-size: 12px; font-weight: 700; color: var(--primary-green); margin-bottom: 12px;">
            ${t('roleStep')}
          </div>

          <h2 style="font-size: 22px; font-weight: 800; color: var(--dark-text); margin-bottom: 6px;">
            ${t('roleTitle')}
          </h2>
          <p style="font-size: 13px; color: var(--gray-subtext); margin-bottom: 24px;">
            ${t('roleSubtitle')}
          </p>

          <!-- 3 Role Option Cards -->
          <div style="display: flex; flex-direction: column; gap: 14px; text-align: left;">
            <!-- Cooperative Seller -->
            <div class="action-tile-btn" style="min-height: auto; padding: 18px; border: 2px solid var(--primary-green);" onclick="App.selectRoleAndGo('seller')">
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 32px;">👩‍🌾</span>
                <div>
                  <h3 style="font-size: 16px; font-weight: 800; color: var(--primary-green); margin-bottom: 4px;">
                    ${t('roleSellerTitle')}
                  </h3>
                  <p style="font-size: 12px; color: var(--slate-text); line-height: 1.4;">
                    ${t('roleSellerDesc')}
                  </p>
                </div>
              </div>
            </div>

            <!-- Wholesale Buyer -->
            <div class="action-tile-btn" style="min-height: auto; padding: 18px;" onclick="App.selectRoleAndGo('buyer')">
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 32px;">🛒</span>
                <div>
                  <h3 style="font-size: 16px; font-weight: 800; color: var(--dark-text); margin-bottom: 4px;">
                    ${t('roleBuyerTitle')}
                  </h3>
                  <p style="font-size: 12px; color: var(--slate-text); line-height: 1.4;">
                    ${t('roleBuyerDesc')}
                  </p>
                </div>
              </div>
            </div>

            <!-- Farmer Member -->
            <div class="action-tile-btn" style="min-height: auto; padding: 18px;" onclick="App.selectRoleAndGo('farmer')">
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 32px;">🌾</span>
                <div>
                  <h3 style="font-size: 16px; font-weight: 800; color: var(--dark-text); margin-bottom: 4px;">
                    ${t('roleFarmerTitle')}
                  </h3>
                  <p style="font-size: 12px; color: var(--slate-text); line-height: 1.4;">
                    ${t('roleFarmerDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 2. MAIN SELLER DASHBOARD (2. Main seller dashboard)
  renderSellerDashboard() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        ${this.renderHeader('', true)}

        <!-- Greeting Section -->
        <div class="screen-greeting-box">
          <div class="greeting-sub">${t('greeting')},</div>
          <div class="greeting-name">${t('coopName')}</div>
          <div class="greeting-location">📍 ${t('coopLocation')}</div>
        </div>

        <!-- Total Stock Card -->
        <div class="stock-summary-card">
          <div class="stock-card-top">
            <span class="stock-card-label">${t('totalStockTitle')}</span>
            <span style="font-size: 14px;">📦</span>
          </div>
          <div class="stock-card-val-row">
            <span class="stock-card-number">1,250</span>
            <span class="stock-card-unit">${t('totalStockUnit')}</span>
          </div>
          <div class="stock-pill-row">
            <div class="stock-sub-pill avail">
              <span class="stock-sub-pill-title">${t('stockAvailable')}</span>
              <span class="stock-sub-pill-val">980 kg</span>
            </div>
            <div class="stock-sub-pill expiring">
              <span class="stock-sub-pill-title">${t('stockExpiring')}</span>
              <span class="stock-sub-pill-val" style="color: var(--alert-red);">270 kg</span>
            </div>
          </div>
        </div>

        <!-- 2x2 Grid of Actions (Exact Figma Cards & Icons) -->
        <div class="action-grid-2x2">
          <!-- Action 1: Intake -->
          <div class="action-tile-btn" onclick="App.goToScreen('seller-intake')">
            <div class="tile-top-row">
              <img src="assets/icon-intake.png" class="tile-icon-img" alt="Intake">
            </div>
            <div>
              <div class="tile-title">${t('actionIntakeTitle')}</div>
              <div class="tile-action-link">${t('actionIntakeLink')} ➜</div>
            </div>
          </div>

          <!-- Action 2: Live Stock -->
          <div class="action-tile-btn" onclick="App.goToScreen('seller-stock')">
            <div class="tile-top-row">
              <img src="assets/icon-stock.png" class="tile-icon-img" alt="Stock">
            </div>
            <div>
              <div class="tile-title">${t('actionStockTitle')}</div>
              <div class="tile-action-link">${t('actionStockLink')} ➜</div>
            </div>
          </div>

          <!-- Action 3: Orders (With Orange Badge) -->
          <div class="action-tile-btn" onclick="App.goToScreen('seller-orders')">
            <div class="tile-top-row">
              <img src="assets/icon-orders.png" class="tile-icon-img" alt="Orders">
              <span class="tile-badge-orange">${t('badgeNewOrders')}</span>
            </div>
            <div>
              <div class="tile-title">${t('actionOrdersTitle')}</div>
              <div class="tile-subtitle">${t('actionOrdersWait')}</div>
              <div class="tile-action-link orange">${t('actionOrdersLink')} ➜</div>
            </div>
          </div>

          <!-- Action 4: Market Prices -->
          <div class="action-tile-btn" onclick="App.goToScreen('seller-market')">
            <div class="tile-top-row">
              <img src="assets/icon-market.png" class="tile-icon-img" alt="Market">
            </div>
            <div>
              <div class="tile-title">${t('actionMarketTitle')}</div>
              <div class="tile-subtitle">${t('actionMarketSub')}</div>
              <div class="tile-action-link">${t('actionMarketLink')} ➜</div>
            </div>
          </div>
        </div>

        <!-- Urgent Shelf-Life Section (Exact Figma Alert) -->
        <div class="urgent-section-container">
          <div class="urgent-header-row">
            <div class="urgent-header-left">
              <img src="assets/icon-alert.png" class="urgent-header-icon" alt="Alert">
              <span class="urgent-header-title">${t('urgentSectionTitle')}</span>
            </div>
            <span class="urgent-header-badge">${t('urgentCountBadge')}</span>
          </div>

          <div class="urgent-produce-card">
            <div class="urgent-card-top-tags">
              <span class="urgent-tag-red">⏳ ${t('badgeDaysLeft2')}</span>
              <span class="urgent-tag-blue">${t('badgeWarehouseA')}</span>
            </div>
            <div class="urgent-card-details-row">
              <div class="urgent-img-wrapper">
                <img src="assets/produce-tomato-card.jpg" class="urgent-img" alt="Tomatoes">
                <span class="urgent-grade-overlay">A</span>
              </div>
              <div class="urgent-card-info">
                <h4>${t('tomatoItemTitle')}</h4>
                <div class="urgent-qty-row">
                  <span class="urgent-qty-num">${t('tomatoQty')}</span>
                  <span class="urgent-qty-unit"> kg</span>
                </div>
                <div class="urgent-quality-text">${t('gradeAQuality')}</div>
              </div>
            </div>
            <button class="btn-urgent-markdown" onclick="App.goToScreen('seller-flash')">
              ⚡ ${t('btnMarkdownSale')}
            </button>
          </div>
        </div>

        <!-- Floating Bottom CTA Button -->
        <div class="floating-bottom-cta-box">
          <button class="btn-floating-cta" onclick="App.goToScreen('seller-intake')">
            ${t('btnFloatingIntake')}
          </button>
        </div>
      </div>
    `;
  },

  // 3. BUYER HOME (buyer-home)
  renderBuyerHome() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        ${this.renderHeader('', false)}

        <!-- Top Search Bar -->
        <div class="buyer-search-bar" onclick="App.goToScreen('buyer-browse')">
          <span>🔍</span>
          <input type="text" class="buyer-search-input" placeholder="${t('buyerSearchPlaceholder')}" readonly>
        </div>

        <!-- Category Horizontal Scroll -->
        <div class="buyer-category-scroll">
          <div class="category-chip-item" onclick="App.goToScreen('buyer-browse')">
            <div class="category-chip-img-box">
              <img src="assets/cat-leafy.png" class="category-chip-img">
            </div>
            <span class="category-chip-label">${t('catLeafy')}</span>
          </div>

          <div class="category-chip-item" onclick="App.goToScreen('buyer-browse')">
            <div class="category-chip-img-box">
              <img src="assets/cat-veggie.png" class="category-chip-img">
            </div>
            <span class="category-chip-label">${t('catRoots')}</span>
          </div>

          <div class="category-chip-item" onclick="App.goToScreen('buyer-browse')">
            <div class="category-chip-img-box">
              <img src="assets/cat-anise.png" class="category-chip-img">
            </div>
            <span class="category-chip-label">${t('catHerbs')}</span>
          </div>

          <div class="category-chip-item" onclick="App.goToScreen('buyer-browse')">
            <div class="category-chip-img-box">
              <img src="assets/cat-ginger.png" class="category-chip-img">
            </div>
            <span class="category-chip-label">${t('catFlower')}</span>
          </div>
        </div>

        <!-- Daily Market Price Ticker -->
        <div class="market-ticker-box">
          <span>📈</span>
          <span>${t('marketPriceTicker')}</span>
        </div>

        <!-- Available Today Section -->
        <div style="padding: 0 18px 12px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="font-size: 16px; font-weight: 800; color: var(--dark-text);">
            ${t('availableTodayTitle')}
          </h3>
          <span style="font-size: 12px; color: var(--primary-green); font-weight: 700; cursor: pointer;" onclick="App.goToScreen('buyer-browse')">
            ${isKm ? 'មើលទាំងអស់' : 'See all'} ➜
          </span>
        </div>

        <!-- 3 Horizontal Deal Cards (Exact Figma Cards) -->
        <div class="deals-horizontal-scroll">
          <!-- Deal 1: Morning Glory -->
          <div class="buyer-deal-card">
            <div class="deal-card-img-box" onclick="App.goToScreen('buyer-details')">
              <img src="assets/produce-tomato-card.jpg" class="deal-card-img">
              <span class="deal-badge-discount">30% OFF</span>
              <span class="deal-badge-grade">Grade A</span>
            </div>
            <div class="deal-card-body">
              <div>
                <div class="deal-coop-name">${t('deal1Coop')}</div>
                <div class="deal-produce-title">${t('deal1Title')}</div>
                <div class="deal-price-row">
                  <span class="deal-price-main">${t('deal1Price')}</span>
                  <span class="deal-price-old">${t('deal1OldPrice')}</span>
                  <span style="font-size: 11px; color: var(--gray-subtext);">/kg</span>
                </div>
              </div>
              <div class="deal-footer-row">
                <span class="deal-stock-left">⚡ ${t('deal1Stock')}</span>
                <button class="btn-deal-add" onclick="App.goToScreen('buyer-cart')">+</button>
              </div>
            </div>
          </div>

          <!-- Deal 2: Sweet Corn -->
          <div class="buyer-deal-card">
            <div class="deal-card-img-box" onclick="App.goToScreen('buyer-details')">
              <img src="assets/produce-corn-card.jpg" class="deal-card-img">
              <span class="deal-badge-discount">15% OFF</span>
              <span class="deal-badge-grade">Grade A</span>
            </div>
            <div class="deal-card-body">
              <div>
                <div class="deal-coop-name">${t('deal2Coop')}</div>
                <div class="deal-produce-title">${t('deal2Title')}</div>
                <div class="deal-price-row">
                  <span class="deal-price-main">${t('deal2Price')}</span>
                  <span class="deal-price-old">${t('deal2OldPrice')}</span>
                  <span style="font-size: 11px; color: var(--gray-subtext);">/kg</span>
                </div>
              </div>
              <div class="deal-footer-row">
                <span class="deal-stock-left" style="color: #1B6D24;">🌿 ${t('deal2Stock')}</span>
                <button class="btn-deal-add" onclick="App.goToScreen('buyer-cart')">${t('btnAdd')}</button>
              </div>
            </div>
          </div>

          <!-- Deal 3: Chinese Kale -->
          <div class="buyer-deal-card">
            <div class="deal-card-img-box" onclick="App.goToScreen('buyer-details')">
              <img src="assets/produce-kailan-card.jpg" class="deal-card-img">
              <span class="deal-badge-discount">25% OFF</span>
              <span class="deal-badge-grade">Grade A</span>
            </div>
            <div class="deal-card-body">
              <div>
                <div class="deal-coop-name">${t('deal3Coop')}</div>
                <div class="deal-produce-title">${t('deal3Title')}</div>
                <div class="deal-price-row">
                  <span class="deal-price-main">${t('deal3Price')}</span>
                  <span class="deal-price-old">${t('deal3OldPrice')}</span>
                  <span style="font-size: 11px; color: var(--gray-subtext);">/kg</span>
                </div>
              </div>
              <div class="deal-footer-row">
                <span class="deal-stock-left">⏳ ${t('deal3Stock')}</span>
                <button class="btn-deal-add" onclick="App.goToScreen('buyer-cart')">${t('btnAdd')}</button>
              </div>
            </div>
          </div>
        </div>

        ${this.renderBottomNav('home')}
      </div>
    `;
  },

  // 4. BUYER BROWSE PRODUCE (buyer-browse)
  renderBuyerBrowse() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        ${this.renderHeader(t('navHome'), false)}

        <!-- Filter Bar -->
        <div style="padding: 0 18px 12px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--slate-text);">
          <span>${t('showingCropsCount')}</span>
          <span style="color: var(--primary-green); font-weight: 700;">${t('sortLowestPrice')} ▾</span>
        </div>

        <div style="padding: 0 18px; display: flex; flex-direction: column; gap: 12px;">
          <!-- Item 1: Morning Glory -->
          <div class="action-tile-btn" style="min-height: auto; padding: 12px; display: flex; flex-direction: row; gap: 12px; align-items: center;" onclick="App.goToScreen('buyer-details')">
            <img src="assets/produce-tomato-card.jpg" style="width: 70px; height: 70px; border-radius: 10px; object-fit: cover;">
            <div style="flex: 1;">
              <span class="deal-badge-grade" style="position: static; display: inline-block; margin-bottom: 2px;">Grade A</span>
              <h4 style="font-size: 15px; font-weight: 700; color: var(--dark-text);">${isKm ? 'ត្រកួនធម្មជាតិ' : 'Organic Morning Glory'}</h4>
              <p style="font-size: 11px; color: var(--gray-subtext);">TA SEY SAMAKI COOPERATIVE</p>
              <div style="font-size: 15px; font-weight: 800; color: var(--accent-green); margin-top: 2px;">$0.80 / kg</div>
            </div>
            <button class="btn-deal-add" onclick="event.stopPropagation(); App.goToScreen('buyer-cart')">+</button>
          </div>

          <!-- Item 2: Sweet Corn -->
          <div class="action-tile-btn" style="min-height: auto; padding: 12px; display: flex; flex-direction: row; gap: 12px; align-items: center;" onclick="App.goToScreen('buyer-details')">
            <img src="assets/produce-corn-card.jpg" style="width: 70px; height: 70px; border-radius: 10px; object-fit: cover;">
            <div style="flex: 1;">
              <span class="deal-badge-grade" style="position: static; display: inline-block; margin-bottom: 2px;">Grade A</span>
              <h4 style="font-size: 15px; font-weight: 700; color: var(--dark-text);">${isKm ? 'ពោតផ្អែមបាត់ដំបង' : 'Battambang Sweet Corn'}</h4>
              <p style="font-size: 11px; color: var(--gray-subtext);">SAMLOT ORGANIC COLLECTIVE</p>
              <div style="font-size: 15px; font-weight: 800; color: var(--accent-green); margin-top: 2px;">$1.45 / kg</div>
            </div>
            <button class="btn-deal-add" onclick="event.stopPropagation(); App.goToScreen('buyer-cart')">+</button>
          </div>

          <!-- Item 3: Chinese Kale -->
          <div class="action-tile-btn" style="min-height: auto; padding: 12px; display: flex; flex-direction: row; gap: 12px; align-items: center;" onclick="App.goToScreen('buyer-details')">
            <img src="assets/produce-kailan-card.jpg" style="width: 70px; height: 70px; border-radius: 10px; object-fit: cover;">
            <div style="flex: 1;">
              <span class="deal-badge-grade" style="position: static; display: inline-block; margin-bottom: 2px;">Grade A</span>
              <h4 style="font-size: 15px; font-weight: 700; color: var(--dark-text);">${isKm ? 'ខាត់ណាដើមស្រួយ' : 'Crisp Chinese Kale'}</h4>
              <p style="font-size: 11px; color: var(--gray-subtext);">THMA KOUL COOPERATIVE</p>
              <div style="font-size: 15px; font-weight: 800; color: var(--accent-green); margin-top: 2px;">$1.65 / kg</div>
            </div>
            <button class="btn-deal-add" onclick="event.stopPropagation(); App.goToScreen('buyer-cart')">+</button>
          </div>
        </div>

        ${this.renderBottomNav('home')}
      </div>
    `;
  },

  // 5. BUYER VEGETABLE DETAILS (buyer-vegetable-details)
  renderBuyerDetails() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <!-- Top Nav Bar with Back Button -->
        <div style="padding: 12px 18px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('buyer-browse')">←</span>
          <span style="font-size: 15px; font-weight: 700;">${isKm ? 'ព័ត៌មានលម្អិតកសិផល' : 'Produce Details'}</span>
          <span style="font-size: 18px; cursor: pointer;" onclick="App.goToScreen('buyer-cart')">🛒</span>
        </div>

        <!-- Big Hero Photo -->
        <div style="width: 100%; height: 220px; position: relative;">
          <img src="assets/produce-tomato-card.jpg" style="width: 100%; height: 100%; object-fit: cover;">
          <span class="deal-badge-grade" style="top: 14px; right: 14px;">Grade A</span>
        </div>

        <div style="padding: 18px; background: #FFFFFF; border-radius: 20px 20px 0 0; margin-top: -20px; position: relative; z-index: 5;">
          <h2 style="font-size: 20px; font-weight: 800; color: var(--dark-text); margin-bottom: 4px;">
            ${isKm ? 'ត្រកួនធម្មជាតិ' : 'Organic Morning Glory'}
          </h2>
          <p style="font-size: 12px; color: var(--gray-subtext); margin-bottom: 12px;">
            TA SEY SAMAKI COOPERATIVE • TAKEO
          </p>

          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
            <div>
              <div style="font-size: 12px; color: var(--slate-text);">${t('b2bWholesalePrice')}</div>
              <div style="font-size: 24px; font-weight: 800; color: var(--accent-green); font-family: var(--font-sans);">$0.80 <span style="font-size: 13px; color: var(--gray-subtext);">${t('perKg')}</span></div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 12px; color: var(--slate-text);">${t('availableQty')}</div>
              <div style="font-size: 15px; font-weight: 700; color: var(--dark-text);">300 kg</div>
            </div>
          </div>

          <h3 style="font-size: 14px; font-weight: 700; color: var(--dark-text); margin-bottom: 6px;">
            ${t('coopOriginTitle')}
          </h3>
          <p style="font-size: 12px; color: var(--slate-text); line-height: 1.5; margin-bottom: 20px;">
            ${isKm ? 'ប្រមូលផលស្រស់ពីកសិករតាសីសាមគ្គី ខេត្តតាកែវ។ ដឹកជញ្ជូនតាមរថយន្តត្រជាក់ស្តង់ដារ ធានាភាពស្រស់ គ្មានជាតិគីមី។' : 'Harvested fresh from Tasey Samaki farmers, Takeo. Transported via refrigerated cold chain, guaranteed fresh & chemical-free.'}
          </p>

          <!-- Crate Quantity Counter -->
          <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAF8; padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 20px;">
            <span style="font-size: 13px; font-weight: 700;">${isKm ? 'បរិមាណបញ្ជាទិញ:' : 'Order Quantity:'}</span>
            <div style="display: flex; align-items: center; gap: 12px;">
              <button class="btn-deal-add" style="background: #E2E8F0; color: #000; font-size: 16px; padding: 4px 10px;">-</button>
              <strong style="font-size: 16px; font-family: var(--font-sans);">50 kg</strong>
              <button class="btn-deal-add" style="font-size: 16px; padding: 4px 10px;">+</button>
            </div>
          </div>

          <button class="btn-urgent-markdown" style="height: 52px; font-size: 15px;" onclick="App.goToScreen('buyer-cart')">
            🛒 ${t('btnAddToCart')} • $40.00
          </button>
        </div>
      </div>
    `;
  },

  // 6. BUYER CART (buyer-cart)
  renderBuyerCart() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('buyer-home')">←</span>
          <span style="font-size: 16px; font-weight: 800;">${t('navCart')}</span>
          <span style="font-size: 13px; color: var(--alert-red-dark); font-weight: 700; cursor: pointer;">${isKm ? 'លុប' : 'Clear'}</span>
        </div>

        <div style="padding: 18px;">
          <div style="font-size: 13px; font-weight: 700; color: var(--slate-text); margin-bottom: 10px;">
            ${t('orderedItemsCount')}
          </div>

          <!-- Cart Item -->
          <div class="action-tile-btn" style="min-height: auto; padding: 14px; display: flex; flex-direction: row; gap: 12px; align-items: center; margin-bottom: 20px;">
            <img src="assets/produce-tomato-card.jpg" style="width: 56px; height: 56px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
              <h4 style="font-size: 14px; font-weight: 700; color: var(--dark-text);">${isKm ? 'ត្រកួនធម្មជាតិ' : 'Organic Morning Glory'}</h4>
              <p style="font-size: 12px; color: var(--gray-subtext);">50kg × $0.80</p>
            </div>
            <strong style="font-size: 16px; color: var(--primary-green); font-family: var(--font-sans);">$40.00</strong>
          </div>

          <!-- Subtotals & Fees -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
              <span style="color: var(--slate-text);">${t('cartSubtotal')}</span>
              <strong>$40.00</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 12px;">
              <span style="color: var(--slate-text);">${t('cartDeliveryFee')}</span>
              <strong>$5.00</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 800; border-top: 1px solid var(--border-color); padding-top: 10px; color: var(--primary-green);">
              <span>${t('cartTotal')}</span>
              <span>$45.00 (៛184,500)</span>
            </div>
          </div>

          <button class="btn-urgent-markdown" style="height: 52px; font-size: 15px;" onclick="App.goToScreen('buyer-checkout')">
            ${t('btnProceedCheckout')} ➜
          </button>
        </div>

        ${this.renderBottomNav('cart')}
      </div>
    `;
  },

  // 7. BUYER CHECKOUT (buyer-checkout)
  renderBuyerCheckout() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('buyer-cart')">←</span>
          <span style="font-size: 16px; font-weight: 800;">${isKm ? 'ការទូទាត់' : 'Checkout'}</span>
          <span></span>
        </div>

        <div style="padding: 18px;">
          <!-- Delivery Address Block -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 14px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--primary-green); margin-bottom: 4px;">
              📍 ${t('deliveryInfoTitle')}
            </div>
            <div style="font-size: 14px; font-weight: 700; color: var(--dark-text); margin-bottom: 2px;">
              Green Garden Restaurant
            </div>
            <div style="font-size: 12px; color: var(--slate-text); margin-bottom: 4px;">
              ${t('recipientInfo')}
            </div>
            <div style="font-size: 12px; color: var(--gray-subtext);">
              ${t('deliveryAddressVal')}
            </div>
          </div>

          <!-- Schedule Block -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 14px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--primary-green); margin-bottom: 4px;">
              ⏰ ${t('deliveryScheduleTitle')}
            </div>
            <div style="font-size: 13px; font-weight: 700; color: var(--dark-text);">
              ${t('scheduleTomorrow')}
            </div>
            <div style="font-size: 12px; color: var(--slate-text); margin-top: 2px;">
              ${t('scheduleWindow')}
            </div>
          </div>

          <!-- Payment Block -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 24px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--primary-green); margin-bottom: 8px;">
              🏛️ ${t('paymentMethodTitle')}
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; border: 1px solid var(--primary-green); border-radius: 8px; padding: 10px; background: #E8F5E9;">
              <div style="font-size: 13px; font-weight: 700; color: var(--primary-green);">
                National Bank Bakong KHQR
              </div>
              <span style="color: var(--primary-green);">✓</span>
            </div>
          </div>

          <button class="btn-urgent-markdown" style="height: 52px; font-size: 15px;" onclick="App.goToScreen('buyer-track')">
            ✅ ${t('btnConfirmOrder')} ($45.00)
          </button>
        </div>
      </div>
    `;
  },

  // 8. BUYER TRACK ORDER (buyer-track-order)
  renderBuyerTrack() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('buyer-home')">←</span>
          <span style="font-size: 16px; font-weight: 800;">${t('navOrders')}</span>
          <span></span>
        </div>

        <div style="padding: 18px;">
          <!-- Order ID & Status Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div>
              <span style="font-size: 11px; color: var(--gray-subtext);">${t('orderIdLabel')}</span>
              <h3 style="font-size: 18px; font-weight: 800; color: var(--dark-text);">#ORD-046</h3>
            </div>
            <span style="background: #E0F2FE; color: #0284C7; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px;">
              🚚 ${t('statusDispatched')}
            </span>
          </div>

          <!-- Est Arrival -->
          <div style="background: #E8F5E9; border-radius: 12px; padding: 14px; margin-bottom: 16px; border: 1px solid #C8E6C9;">
            <div style="font-size: 11px; color: #1B5E20; font-weight: 600;">${t('estArrivalTitle')}</div>
            <div style="font-size: 15px; font-weight: 800; color: #1B5E20; margin-top: 2px;">${t('estArrivalVal')}</div>
          </div>

          <!-- Route Info -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 18px; font-size: 12px;">
            <div style="font-weight: 700; color: var(--slate-text); margin-bottom: 6px;">${t('coopRouteTitle')}</div>
            <div style="margin-bottom: 4px;">📍 ${t('routeFrom')}</div>
            <div style="color: var(--primary-green); font-weight: 700;">🏁 ${t('routeTo')}</div>
          </div>

          <!-- Delivery Stepper -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 24px;">
            <div style="font-size: 13px; font-weight: 700; margin-bottom: 12px;">${t('deliveryTimelineTitle')}</div>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="display: flex; align-items: center; gap: 10px; font-size: 12px;">
                <span style="color: var(--primary-green); font-weight: 800;">✓</span>
                <span style="color: var(--slate-text);">${t('timelineStep1')} (05:00 AM)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; font-size: 12px;">
                <span style="color: var(--primary-green); font-weight: 800;">✓</span>
                <span style="color: var(--slate-text);">${t('timelineStep2')} (05:30 AM)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; font-size: 12px;">
                <span style="color: #0284C7; font-weight: 800;">🚚</span>
                <strong style="color: #0284C7;">${t('timelineStep3')} (06:05 AM)</strong>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: var(--gray-subtext);">
                <span>○</span>
                <span>${t('timelineStep4')}</span>
              </div>
            </div>
          </div>

          <button class="btn-urgent-markdown" style="height: 48px; background: #0284C7;" onclick="App.goToScreen('buyer-receive')">
            📦 ${isKm ? 'ទៅកាន់ទំព័រទទួលទំនិញ' : 'Open Receiving Inspection'}
          </button>
        </div>

        ${this.renderBottomNav('orders')}
      </div>
    `;
  },

  // 9. BUYER RECEIVE ORDER CHECKLIST (buyer-receive-order)
  renderBuyerReceive() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('buyer-track')">←</span>
          <span style="font-size: 16px; font-weight: 800;">${isKm ? 'ទទួលទំនិញ' : 'Receive Goods'}</span>
          <span></span>
        </div>

        <div style="padding: 18px;">
          <!-- Arrival Banner -->
          <div style="background: #E8F5E9; border-radius: 12px; padding: 14px; margin-bottom: 18px; border: 1px solid #C8E6C9; text-align: center;">
            <span style="font-size: 28px;">🎉</span>
            <h3 style="font-size: 16px; font-weight: 800; color: #1B5E20; margin: 4px 0 2px;">
              ${t('orderArrivedTitle')}
            </h3>
            <p style="font-size: 12px; color: #1B5E20;">${t('orderArrivedSub')}</p>
          </div>

          <h4 style="font-size: 14px; font-weight: 700; color: var(--dark-text); margin-bottom: 10px;">
            ${t('checklistTitle')}
          </h4>

          <!-- Item 1 Verification -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 14px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 14px;">${isKm ? 'ត្រកួនធម្មជាតិ' : 'Morning Glory'}</strong>
              <div style="font-size: 11px; color: var(--gray-subtext);">${t('expected50kg')}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <input type="text" value="50" style="width: 48px; text-align: center; border: 1px solid var(--border-color); border-radius: 6px; padding: 4px; font-weight: 700;">
              <span style="font-size: 12px;">kg</span>
            </div>
          </div>

          <!-- Item 2 Verification -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 14px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 14px;">${isKm ? 'ត្រសក់ស្រែ' : 'Field Cucumber'}</strong>
              <div style="font-size: 11px; color: var(--gray-subtext);">${t('expected30kg')}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <input type="text" value="30" style="width: 48px; text-align: center; border: 1px solid var(--border-color); border-radius: 6px; padding: 4px; font-weight: 700;">
              <span style="font-size: 12px;">kg</span>
            </div>
          </div>

          <button class="btn-urgent-markdown" style="height: 52px; font-size: 15px;" onclick="alert('Confirmed! Thank you.'); App.goToScreen('buyer-home');">
            ✅ ${t('btnConfirmDelivery')}
          </button>
        </div>
      </div>
    `;
  },

  // 10. SELLER INTAKE & SCALE (២. ថ្លឹង និងកត់ត្រាផលដំណាំ)
  renderSellerIntake() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('seller-dashboard')">←</span>
          <span style="font-size: 16px; font-weight: 800;">${isKm ? 'ថ្លឹង និងកត់ត្រាផល' : 'Harvest Intake'}</span>
          <span></span>
        </div>

        <div style="padding: 18px;">
          <!-- 3 Steps Bar -->
          <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 12px; font-weight: 700;">
            <span style="color: var(--primary-green);">1. ${t('step1Crop')}</span>
            <span style="color: var(--primary-green);">2. ${t('step2FarmerWeight')}</span>
            <span style="color: var(--gray-subtext);">3. ${t('step3Save')}</span>
          </div>

          <h3 style="font-size: 15px; font-weight: 800; margin-bottom: 10px;">${t('selectCropTitle')}</h3>

          <!-- Crop Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
            <div class="action-tile-btn" style="min-height: auto; padding: 12px; text-align: center; border: 2px solid var(--primary-green); background: #E8F5E9;">
              <span style="font-size: 24px;">🍅</span>
              <strong style="font-size: 13px; margin-top: 4px; display: block;">${t('cropTomato')}</strong>
            </div>
            <div class="action-tile-btn" style="min-height: auto; padding: 12px; text-align: center;">
              <span style="font-size: 24px;">🥒</span>
              <strong style="font-size: 13px; margin-top: 4px; display: block;">${t('cropCucumber')}</strong>
            </div>
            <div class="action-tile-btn" style="min-height: auto; padding: 12px; text-align: center;">
              <span style="font-size: 24px;">🥬</span>
              <strong style="font-size: 13px; margin-top: 4px; display: block;">${t('cropMorningGlory')}</strong>
            </div>
            <div class="action-tile-btn" style="min-height: auto; padding: 12px; text-align: center;">
              <span style="font-size: 24px;">🌽</span>
              <strong style="font-size: 13px; margin-top: 4px; display: block;">${t('cropCorn')}</strong>
            </div>
          </div>

          <!-- Live Digital Weight Box -->
          <div style="background: #060B0E; border-radius: 12px; padding: 16px; color: #38BDF8; text-align: center; margin-bottom: 16px; font-family: var(--font-sans);">
            <div style="font-size: 11px; text-transform: uppercase; color: #94A3B8;">${t('liveWeightTitle')}</div>
            <div style="font-size: 42px; font-weight: 800; margin: 4px 0;">24.50 <span style="font-size: 18px; color: #94A3B8;">KG</span></div>
            <div style="font-size: 12px; color: #22C55E;">🟢 STABILIZED • TARE: -2.50 KG</div>
          </div>

          <button class="btn-urgent-markdown" style="height: 50px; font-size: 15px;" onclick="App.goToScreen('seller-dashboard')">
            📥 ${t('btnConfirmIntake')}
          </button>
        </div>
      </div>
    `;
  },

  // 11. SELLER LIVE STOCK (៣. ស្តុកបច្ចុប្បន្ន & អាយុកាល)
  renderSellerStock() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('seller-dashboard')">←</span>
          <span style="font-size: 16px; font-weight: 800;">${isKm ? 'ស្តុកបច្ចុប្បន្ន' : 'Live Stock'}</span>
          <span></span>
        </div>

        <div style="padding: 18px;">
          <!-- Warehouse Telemetry Card -->
          <div style="background: #FFFFFF; border-radius: 14px; border: 1px solid var(--border-color); padding: 16px; margin-bottom: 16px;">
            <div style="font-size: 12px; color: var(--gray-subtext);">${t('liveWarehouseTitle')}</div>
            <div style="font-size: 28px; font-weight: 800; color: var(--dark-text); font-family: var(--font-sans); margin: 4px 0;">980 kg</div>
            <div style="font-size: 12px; color: var(--slate-text); margin-bottom: 8px;">${t('warehouseCapacity')}</div>
            <div style="width: 100%; height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden;">
              <div style="width: 81.6%; height: 100%; background: var(--primary-green);"></div>
            </div>
          </div>

          <!-- Stock Items List -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 12px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="font-size: 14px;">🍅 ប៉េងប៉ោះស្រស់ (#LOT-TOM-884)</strong>
                <div style="font-size: 11px; color: var(--gray-subtext);">BIN-A04 • នៅសល់ ៥ ថ្ងៃ</div>
              </div>
              <strong style="font-size: 16px; color: var(--primary-green);">350 kg</strong>
            </div>

            <div style="background: #FFF5F5; border-radius: 12px; border: 1px solid #FECACA; padding: 12px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="font-size: 14px; color: var(--alert-red);">🥬 ស្ពៃបូកគោ (#LOT-BOK-092)</strong>
                <div style="font-size: 11px; color: var(--alert-red);">BIN-B02 • នៅសល់ ៨ ម៉ោង</div>
              </div>
              <strong style="font-size: 16px; color: var(--alert-red);">180 kg</strong>
            </div>

            <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 12px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="font-size: 14px;">🥬 ស្ពៃក្តោប (#LOT-CAB-310)</strong>
                <div style="font-size: 11px; color: var(--gray-subtext);">BIN-A02 • នៅសល់ ៤ ថ្ងៃ</div>
              </div>
              <strong style="font-size: 16px; color: var(--primary-green);">520 kg</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 12. SELLER EMERGENCY FLASH SALE (៦. ផ្សាយលក់បន្ទាន់)
  renderSellerFlash() {
    const isKm = AppState.lang === 'km';
    return `
      <div class="mobile-screen-content">
        <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 20px; cursor: pointer;" onclick="App.goToScreen('seller-dashboard')">←</span>
          <span style="font-size: 16px; font-weight: 800; color: var(--alert-red);">${isKm ? 'ផ្សាយលក់បន្ទាន់' : 'Emergency Flash Sale'}</span>
          <span></span>
        </div>

        <div style="padding: 18px;">
          <!-- Spoilage Warning Box -->
          <div style="background: #FEE2E2; border: 1px solid #FECACA; border-radius: 12px; padding: 14px; margin-bottom: 16px;">
            <div style="font-size: 14px; font-weight: 800; color: #991B1B; margin-bottom: 4px;">
              ⚡ ${t('flashSaleUrgentTitle')}
            </div>
            <p style="font-size: 12px; color: #991B1B; line-height: 1.4;">
              ${t('flashSaleBannerDesc')}
            </p>
          </div>

          <!-- Produce Target -->
          <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-color); padding: 14px; margin-bottom: 16px;">
            <span style="font-size: 11px; color: var(--gray-subtext);">${t('flashLotCode')}</span>
            <h4 style="font-size: 16px; font-weight: 800; color: var(--dark-text); margin: 2px 0 8px;">
              🥒 ${t('flashCucumberTitle')}
            </h4>
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
              <span>${t('originalWholesalePrice')}</span>
              <span style="text-decoration: line-through;">$0.80 / kg</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 15px; font-weight: 800; color: var(--alert-red);">
              <span>${t('discountedPrice')}</span>
              <span>$0.50 / kg</span>
            </div>
          </div>

          <button class="btn-urgent-markdown" style="background: var(--alert-red); height: 52px; font-size: 15px;" onclick="alert('Flash Sale Broadcasted to 48 Kitchens!'); App.goToScreen('seller-dashboard');">
            📢 ${t('btnBroadcastEmergency')}
          </button>
        </div>
      </div>
    `;
  }
};
