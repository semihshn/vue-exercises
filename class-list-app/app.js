const app = Vue.createApp({
  data() {
    return {
      backgroundColor: false,
      color: false,
      border: false,
      fontBold: false,
      borderRadius: false,
      fontItalic: false,
    };
  },
  computed: {
    getClass() {
      if (this.backgroundColor) {
        return "bg-primary";
      } else if (this.color) {
        return "text-danger";
      } else if (this.border) {
        return "border";
      } else if (this.fontBold) {
        return "font-weight-bold";
      } else if (this.borderRadius) {
        return "rounded";
      } else if (this.fontItalic) {
        return "font-italic";
      }
    },
  },
}).mount("#app");
