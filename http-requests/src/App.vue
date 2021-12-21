<template>
  <div class="container">
    <Header :headerContent="test"></Header>
    <hr />
    <Input @onSave="onSave" />
    <ToDoList :itemsList="itemsList" :onDelete="onDelete"/>
  <ToDoResult :itemCount="itemCount"/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoResult from "./components/ToDoResult.vue";
export default {
  components: {
    Header,
    Input,
    ToDoList,
    ToDoResult
  },
  data() {
    return {
      test:"Alışveriş Listesi",
      itemsList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log("items_response :>> ", items_response);
      this.itemsList = items_response.data || [];
      console.log("this.itemsList :>> ", this.itemsList);
    });
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          console.log(save_response);
          this.itemsList.push(save_response.data);
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      axios
        .delete(`http://localhost:3000/items/${item.id}`)
        .then((delete_response) => {
          console.log(delete_response);
          this.itemsList = this.itemsList.filter((i) => i.id !== item.id);
        });
    },
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    },
  },
};
</script>
