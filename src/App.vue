<template>
  <div>
    <div>
      <button @click="home">Home</button>
      <button @click="data">Data</button>
      <button @click="contacts">Contacts</button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  methods: {
    home() {
      return this.$router.push('/');
    },

    data() {
      return this.$router.push('/data');
    },

    contacts() {
      return this.$router.push('/contacts');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
