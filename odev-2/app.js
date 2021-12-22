const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods:{
    getAlert(){
      alert("Hello World");
    },
    setValue(){
      this.value=event.target.value
    }
  }
});
app.mount("#exercise");
