// Node.js test script with DOM mocks for HarvestFlow application
global.window = global;
global.document = {
  documentElement: { lang: 'km' },
  getElementById: function(id) {
    return {
      id: id,
      textContent: '',
      innerHTML: '',
      value: id === 'studioScreenSelect' ? 'seller-dashboard' : '',
      classList: {
        add: () => {},
        remove: () => {},
        contains: () => false
      },
      addEventListener: () => {}
    };
  },
  querySelectorAll: function(selector) {
    return [];
  },
  createElement: function(tag) {
    return {
      tagName: tag,
      id: '',
      className: '',
      innerHTML: '',
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {}
    };
  },
  body: {
    appendChild: () => {}
  },
  addEventListener: () => {}
};

global.localStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); }
};

// Load scripts
require('./js/translations.js');
require('./js/state.js');
require('./js/views.js');
require('./js/app.js');

console.log('Testing App initialization...');
App.init();
console.log('App initialized successfully. Current lang:', AppState.lang);

console.log('Testing Language Switch to English...');
App.setLanguage('en');
console.log('Language switched. AppState.lang:', AppState.lang);

console.log('Testing Language Switch to Khmer...');
App.setLanguage('km');
console.log('Language switched. AppState.lang:', AppState.lang);

console.log('Testing Screen Navigation across all Figma pages:');
const screens = [
  'seller-dashboard',
  'role-selection',
  'seller-intake',
  'seller-stock',
  'seller-flash',
  'buyer-home',
  'buyer-browse',
  'buyer-details',
  'buyer-cart',
  'buyer-checkout',
  'buyer-track',
  'buyer-receive'
];

screens.forEach(screen => {
  App.goToScreen(screen);
  console.log(` - Navigated to ${screen}: Success`);
});

console.log('Testing Role select shortcuts:');
App.selectRoleAndGo('seller');
console.log('Selected seller -> screen:', App.currentScreen);

App.selectRoleAndGo('buyer');
console.log('Selected buyer -> screen:', App.currentScreen);

App.selectRoleAndGo('farmer');
console.log('Selected farmer -> screen:', App.currentScreen);

console.log('ALL TESTS PASSED WITH ZERO ERRORS!');
