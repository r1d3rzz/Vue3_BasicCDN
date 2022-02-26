const app = Vue.createApp({
  //   template: "<h1>This is My First Vue js</h1>",

  data() {
    return {
      books: [
        {
          title: "Book 1",
          author: "Mg Mg",
          age: 21,
          link: "https://www.google.com",
          img: "img/1.jpeg",
          isFav: true,
        },

        {
          title: "Book 2",
          author: "Kyaw Kyaw",
          age: 25,
          link: "https://www.google.com",
          img: "img/2.jpeg",
          isFav: false,
        },

        {
          title: "Book 3",
          author: "Tun Tun",
          age: 50,
          link: "https://www.google.com",
          img: "img/3.jpeg",
          isFav: true,
        },
      ],
      showBook: true,
    };
  },

  methods: {
    increaseAge() {
      this.age++;
    },

    isFavHandler(book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
});

app.mount("#app");
