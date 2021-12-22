const app = Vue.createApp({
    data() {
      return {
        value: 0,
        result: null,
      };
    },
    computed: {
      result() {
        return this.value === 33 ? "Tamamlandı" : "Henüz tamamlanmadı..";
      },
    },
    watch: {
      value(v) {
        if (v === 33) {
          this.result = "Tamamlandı";
        } else {
          this.result = "Henüz tamamlanmadı";
        }
      },
      result() {
        setTimeout(() => {
          this.value = 0;
        }, 5000);
      },
    },
  });
  app.mount("#exercise");