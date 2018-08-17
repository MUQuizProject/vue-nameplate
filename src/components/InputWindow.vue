<template>
  <div>
    <div>
      <textarea v-model="text" rows="8" cols="80">
      伊藤,博文,総理大,大１
      桂,太郎,総理高,高OB
      西園寺,公望,総理高高１
      原,敬,総理大,大１
      </textarea>

      <p>１行ごとに姓,名,学校,学年をカンマ区切り。姓名は各３文字まで対応。</p>
      <div>
        <button @click="setNameLists({inputtext: text})">ネームプレート作成</button>
        <router-link :to="'/nameplates/'">ネームプレートを表示する</router-link>
      </div>
    </div>
    <table>
      <thead>
        <th>順位</th>
        <th>名前</th>
        <th>学校</th>
        <th>学年</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in namelists" :key="index">
          <td>{{index + 1}}位</td>
          <td>{{ item.surname + ' ' + item.given }}</td>
          <td>{{ item.school }}</td>
          <td>{{ item.grade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }
</style>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      text: '伊藤,博文,総理大,大１'
    }
  },
  computed: mapState({
    namelists: state => state.namelists
  }),
  methods: {
    ...mapActions(['setNameLists'])
  }
}
</script>

<style>
</style>
