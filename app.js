const app = Vue.createApp({
  //   template: "<h1>This is My First Vue js</h1>",

  data() {
    return {
      title: "This is Vue Js 3",
      author: "Myint Thway Khine",
      age: 21,
    };
  },
});

app.mount("#app");
