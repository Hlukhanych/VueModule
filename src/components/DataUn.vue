<template>
  <div>
    <select v-model="selectedType">
      <option value="0">Всі</option>
      <option value="1">З рейтингом вище 4</option>
      <option value="2">З кількістю факультетів вище 11</option>
    </select>
    <p>University List:</p>
    <div class="university" v-for="uni in sortUni" :key="uni.id">
      <p>Name: {{uni.name}}, Address: {{uni.address}}, Faculty: {{uni.facultiesCount}}, Accreditation: {{uni.accreditationLevel}}, Rating: {{uni.rating}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataUn",

  data() {
    return {
      selectedType: null,
      university_list: [
        {
          id: 1,
          name: "Київський національний університет імені Тараса Шевченка",
          address: "м. Київ, вул. Володимирська, 60",
          facultiesCount: 15,
          accreditationLevel: "IV",
          rating: 1
        },
        {
          id: 2,
          name: "Львівський національний університет імені Івана Франка",
          address: "м. Львів, вул. Університетська, 1",
          facultiesCount: 12,
          accreditationLevel: "IV",
          rating: 2
        },
        {
          id: 3,
          name: "Харківський національний університет імені В. Н. Каразіна",
          address: "м. Харків, пл. Свободи, 4",
          facultiesCount: 14,
          accreditationLevel: "IV",
          rating: 3
        },
        {
          id: 4,
          name: "Одеський національний університет імені І. І. Мечникова",
          address: "м. Одеса, вул. Дворянська, 2",
          facultiesCount: 11,
          accreditationLevel: "IV",
          rating: 3
        },
        {
          id: 5,
          name: "Національний технічний університет України «Київський політехнічний інститут»",
          address: "м. Київ, просп. Перемоги, 37",
          facultiesCount: 18,
          accreditationLevel: "IV",
          rating: 4
        },
        {
          id: 6,
          name: "Національний університет «Львівська політехніка»",
          address: "м. Львів, вул. Степана Бандери, 12",
          facultiesCount: 13,
          accreditationLevel: "IV",
          rating: 4
        },
        {
          id: 7,
          name: "Національний авіаційний університет",
          address: "м. Київ, вул. Космонавта Комарова, 1",
          facultiesCount: 9,
          accreditationLevel: "IV",
          rating: 5
        },
        {
          id: 8,
          name: "Таврійський національний університет імені В. І. Вернадського",
          address: "м. Сімферополь, просп. Вернадського, 4",
          facultiesCount: 10,
          accreditationLevel: "IV",
          rating: 6
        }
      ],

      sorted_list: []
    }
  },

  computed: {
    sortUni() {
      if (this.selectedType === "0") {
        this.sorted_list = this.university_list.slice();
      }
      else if (this.selectedType === "1") {
        this.sorted_list = this.university_list.filter((el) => el.rating <= 3);
      }
      else if (this.selectedType === "2") {
        this.sorted_list = this.university_list.filter((el) => el.facultiesCount >= 11);
      }

      return this.sorted_list;
    }
  },
}
</script>

<style lang="css" scoped>

</style>