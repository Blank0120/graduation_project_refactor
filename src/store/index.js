import { createStore } from 'vuex'

export default createStore({
  state: {
    bookList:[{
      "ISBN": "0000913154",
      "BookTitle": "The Way Things Work: An Illustrated Encyclopedia of Technology",
      "BookAuthor": "C. van tom(translator)",
      "YearOfPublication": 1967,
      "Publisher": "Simon &amp; cat",
      "ImageURLS": "http://images.amazon.com/images/P/0000913154.01.THUMBZZZ.jpg",
      "ImageURLM": "http://images.amazon.com/images/P/0000913154.01.MZZZZZZZ.jpg",
      "ImageURLL": "http://images.amazon.com/images/P/0000913154.01.LZZZZZZZ.jpg"
    }]
  },

  getters: {
  },

  mutations: {
    setBookList(state, payload){
      state.bookList = payload
    }
  },

  actions: {
  },

  modules: {
  }
})
