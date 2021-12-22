const app=Vue.createApp({
    data(){
        return{
            name:"Semih",
            age:22,
            src:"https://image.shutterstock.com/image-photo/family-decorating-christmas-tree-young-600w-737844109.jpg"
        };
    },
    computed:{
        getNumber(){
            return Math.random()
        }
    }
}).mount("#app")