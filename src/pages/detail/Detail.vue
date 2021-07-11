<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    async getDetailInfo () {
      let upData = {
        params: {
          id: this.$route.params.id
        }
      }
      let res = await axios.get('/api/detail.json', upData)
      console.log(res)
      if (res.data.ret && res.data.data) {
        let resData = res.data.data
        this.bannerImg = resData.bannerImg
        this.sightName = resData.sightName
        this.gallaryImgs = resData.gallaryImgs
        this.categoryList = resData.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
