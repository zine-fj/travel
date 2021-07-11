<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list
        :cities="cities"
        :hot="hotCities"
        :letter="letter"
      ></city-list>
      <city-alphabet
        :cities="cities"
        @change="clickLetter"
      ></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    async getCityInfo () {
      let res = await axios.get('/api/city.json')
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    clickLetter (e) {
      this.letter = e
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style>
</style>
