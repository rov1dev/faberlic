<template>
  <section id="work">
    <h2 class="work-title ">I work in such programs as</h2>
    <div class="container">
      <div class="item" v-for="(item, index) in data" :key="index">
        <img width="200px" height="200px" :src="item.foto" alt="error" />
        <h3>{{ item.name }}</h3>
        <div>
          <Star
            v-for="(index, ind) in 5"
            :key="ind"
            :fill="index <= item.level ? 'gold' : 'gray' "
            :style="{ color: index <= item.level ? 'gold' : 'gray' }"
          ></Star>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Star } from 'lucide-vue-next'
import { ref } from 'vue'
import jsLogo from '../assets/js.png'
import reactLogo from '../assets/reac.png'
import vueLogo from '../assets/vuebg.png'
import cssLogo from '../assets/css.png'
import bootstrapLogo from '../assets/boot.png'
import sassLogo from '../assets/sass.png'

const data = ref([
  {
    name: 'JavaScript',
    foto: jsLogo,
    level: 4
  },
  {
    name: 'ReactJS',
    foto: reactLogo,
    level: 3
  },
  {
    name: 'VueJS',
    foto: vueLogo,
    level: 3
  },
  {
    name: 'CSS',
    foto: cssLogo,
    level: 5
  },
  {
    name: 'Bootstrap',
    foto: bootstrapLogo,
    level: 5
  },
  {
    name: 'SASS',
    foto: sassLogo,
    level: 4
  }
])
</script>

<style lang="scss" scoped>

#work{
  padding: 80px 0;
  background: #f5f4ff;
}
</style>
