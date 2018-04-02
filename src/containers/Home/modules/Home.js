import types from './mutation-types'

const state = {
  slide: {
    selected: '800',
    options: ['800', '801', '802'],
  },
  menuData: [
    {
      title: 'shop by category',
      scroll: 'shop-by-category',
    },
    {
      title: 'buy tf number',
      scroll: 'buy-us-number',
    },
    {
      title: 'buy us number',
      scroll: 'buy-us-number',
    }
  ],
  howItWorks: [
    {
      className: 'first-step',
      name: 'STEP 1',
      text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      text2: `Lorem Ipsum has been the industry's standard dummy text ever.`
    },
    {
      className: 'second-step',
      name: 'STEP 2',
      text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      text2: `Lorem Ipsum has been the industry's standard dummy text ever.`
    },
    {
      className: 'third-step',
      name: 'STEP 3',
      text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      text2: `Lorem Ipsum has been the industry's standard dummy text ever.`
    }
  ],
  categories: [
    {
      title: ['Airlines', 'Consumer', 'Financial', 'Pharmacy', 'Tolls']
    },
    {
      title: ['Banks', 'Service', 'Government', 'Phone', 'Travel']
    },
    {
      title: ['Cable', 'Credit Cards', 'Hotels', 'Retail', 'Utility']
    },
    {
      title: ['Car Rental', 'Cruise Ships', 'Insurance Internet', 'Shipping']
    },
    {
      title: ['Computer', 'Department Store', 'Pharmacy', 'Supermarket']
    }
  ],
  recentCompany: [
    {
      title: ['Airlines', 'Consumer', 'Financial', 'Pharmacy', 'Tolls']
    },
    {
      title: ['Banks', 'Service', 'Government', 'Phone', 'Travel']
    },
    {
      title: ['Cable', 'Credit Cards', 'Hotels', 'Retail', 'Utility']
    },
    {
      title: ['Car Rental', 'Cruise Ships', 'Insurance Internet', 'Shipping']
    },
    {
      title: ['Computer', 'Department Store', 'Pharmacy', 'Supermarket']
    }
  ]

}

export default {
  state,
  actions: {
    selectSlide({commit}, payload) {
      commit(types.SELECT_SLIDE, {...payload})
    },
    resetStore ({commit}, payload) {
      commit(types.RESET_STORE, {})
    }
  },
  mutations: {
    [types.SELECT_SLIDE] (state, action) {
      state.slide.selected = action.slide
    },
    [types.RESET_STORE] (state, action) {
      // state = state.subProperty
    }
  },
  getters: {
    getSlideData (state, getters) {
      return state.slide
    },
    howItWorksSteps (state, getters) {
      return state.howItWorks
    },
    getCategories (state, getters) {
      return state.categories
    },
    getRecentCompany (state, getters) {
      return state.recentCompany
    },
    getMenuData (state, getters) {
      return state.menuData
    },
    resetStore (state, getters) {
      return state
    }
  }
}
