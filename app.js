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
        },

        {
          title: "Book 2",
          author: "Kyaw Kyaw",
          age: 25,
          link: "https://www.google.com",
        },

        {
          title: "Book 3",
          author: "Tun Tun",
          age: 50,
          link: "https://www.google.com",
        },
      ],
      showBook: true,
    };
  },

  methods: {
    increaseAge() {
      this.age++;
    },
  },
});

app.mount("#app");
