const app = Vue.createApp({
  //   template: "<h1>This is My First Vue js</h1>",

  data() {
    return {
      title: "This is Vue Js 3",
      author: "Myint Thway Khine",
      age: 21,
      showBook: true,
    };
  },

  methods: {
    increaseAge() {
      this.age++;
    },

    mouseoverHandler(event, data) {
      console.log("mouserover is working", "( Event " + event.type + ")", data);
    },

    mouseleaveHandler() {
      console.log("mouseleave is working");
    },

    doubleclickHandler() {
      console.log("doubleclick is working");
    },
  },
});

app.mount("#app");
