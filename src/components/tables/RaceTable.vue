<template>
  <div class="race-table">
    <div class="race-table__header">
      {{ title }}
    </div>
    <table class="race-table__table">
      <thead class="race-table__thead">
        <tr class="race-table__tr">
          <th v-for="col in columns" :key="col" class="race-table__th">{{ col }}</th>
        </tr>
      </thead>
      <tbody class="race-table__tbody">
        <tr v-for="(item, i) in data" :key="item.id" class="race-table__tr">
          <td class="race-table__td">{{ i + 1 }}</td>
          <td class="race-table__td">{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  data: Array,
  columns: Array,
});
</script>

<style scoped>
.race-table {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.race-table__header {
  background-color: #c74c3c;
  color: white;
  padding: 6px 10px;
  font-weight: bold;
  font-size: 14px;
}

.race-table__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.race-table__th,
.race-table__td {
  padding: 6px 8px;
  border: 1px solid #ddd;
  text-align: left;
}
</style>
