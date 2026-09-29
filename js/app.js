/**
 * HarvestFlow (ហាវេសហ្វ្លូ) Application Logic
 * Mobile Frame Controller & Screen Navigator
 */

function t(key) {
  const lang = AppState.lang;
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  if (translations['km'] && translations['km'][key]) {
    return translations['km'][key];
  }
  return key;
}

const App = globalThis.App = Object.assign(globalThis.App || {}, {
  currentScreen: 'seller-dashboard',

  init() {
    this.updateLanguageUI();
    this.renderScreen();
  },

  setLanguage(lang) {
    AppState.lang = lang;
    localStorage.setItem('hf_lang', lang);
    this.updateLanguageUI();
    this.renderScreen();
  },

  toggleLanguage() {
    const nextLang = AppState.lang === 'km' ? 'en' : 'km';
    this.setLanguage(nextLang);
  },

  goToScreen(screenId) {
    this.currentScreen = screenId;
    const selectEl = document.getElementById('studioScreenSelect');
    if (selectEl) {
      selectEl.value = screenId;
    }
    this.renderScreen();
  },

  selectRoleAndGo(role) {
    AppState.role = role;
    localStorage.setItem('hf_role', role);
    if (role === 'seller') {
      this.goToScreen('seller-dashboard');
    } else if (role === 'buyer') {
      this.goToScreen('buyer-home');
    } else if (role === 'farmer') {
      this.goToScreen('seller-intake');
    }
  },

  updateLanguageUI() {
    const lang = AppState.lang;
    document.documentElement.lang = lang;

    const langBtn = document.getElementById('studioLangBtn');
    if (langBtn) {
      langBtn.innerHTML = lang === 'km' ? '🇰🇭 ភាសាខ្មែរ (KM)' : '🇬🇧 English (EN)';
    }
  },

  renderScreen() {
    const container = document.getElementById('mobileAppContainer');
    if (!container) return;

    switch (this.currentScreen) {
      case 'role-selection':
        container.innerHTML = this.views.renderRoleSelection();
        break;
      case 'seller-dashboard':
        container.innerHTML = this.views.renderSellerDashboard();
        break;
      case 'seller-intake':
        container.innerHTML = this.views.renderSellerIntake();
        break;
      case 'seller-stock':
        container.innerHTML = this.views.renderSellerStock();
        break;
      case 'seller-flash':
        container.innerHTML = this.views.renderSellerFlash();
        break;
      case 'buyer-home':
        container.innerHTML = this.views.renderBuyerHome();
        break;
      case 'buyer-browse':
        container.innerHTML = this.views.renderBuyerBrowse();
        break;
      case 'buyer-details':
        container.innerHTML = this.views.renderBuyerDetails();
        break;
      case 'buyer-cart':
        container.innerHTML = this.views.renderBuyerCart();
        break;
      case 'buyer-checkout':
        container.innerHTML = this.views.renderBuyerCheckout();
        break;
      case 'buyer-track':
        container.innerHTML = this.views.renderBuyerTrack();
        break;
      case 'buyer-receive':
        container.innerHTML = this.views.renderBuyerReceive();
        break;
      default:
        container.innerHTML = this.views.renderSellerDashboard();
    }
  }
});

window.App = App;
window.AppState = AppState;
window.t = t;
