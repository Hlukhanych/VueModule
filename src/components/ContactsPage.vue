<template>
  <div>
    <p>Cretors:</p>
    <div class="creators" v-for="creator in creators_list" :key="creator.id">
      {{creator.name}}
    </div>
    <p>Company: Shtashik Int. Comp.</p>
  </div>
</template>

<script>
export default {
  name: "ContactsPage",

  data() {
    return {
      creators_list: [
        {
          id: 1,
          name: "Stas"
        },
        {
          id: 2,
          name: "Stasik"
        }
      ]
    }
  },
}
</script>

<style lang="css" scoped>

</style>