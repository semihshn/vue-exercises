const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          id: 1,
          likeCount: 0,
          dislikeCount: 0,
          message: "Hi, you are very crazy",
        },
        { id: 2, likeCount: 0, dislikeCount: 0, message: "hi, whatsapp" },
      ],
    };
  },
  methods: {
    increasLike(id) {
      this.comments.find((c) => c.id == id).likeCount++;
    },
    increasDislike(id) {
      this.comments.find((c) => c.id == id).dislikeCount++;
    },
  },
}).mount("#app");
