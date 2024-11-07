<template>
  <section id="blog">
    <h2 class="port-title">Portfolio</h2>
    <div class="port-container">
      <div v-for="(data, ind) in datas" :key="ind" class="p-card">
        <a :href="data.link" target="_blank" class="port-item">
          <iframe :src="data.link" width="100%" height="90%" frameborder="0"></iframe>
          <h3 class="port-item-title">{{ data.name }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
  {
    link: 'https://vanilla-js-store.netlify.app/',
    name: 'Comfy store'
  },
  {
    link: 'https://vanilla-js-basic-project-8-menu.netlify.app/',
    name: 'Our menu'
  },
  {
    link: 'https://vannilla-js-basic-project-20-filters.netlify.app/',
    name: 'Filters'
  },
  {
    link: 'https://vannilla-js-basic-project-22-products.netlify.app/',
    name: 'Products'
  }
])
</script>

<style lang="scss" scoped>
#blog{
  margin-top:4rem ;
}
.port-title{
  text-align: center;
}
.port-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    .p-card{
        margin-top: 4rem;
        flex-basis: 80%;
        height: 100vh;
        iframe{
            box-shadow: 0 0 10px 0 #7e7e7e81;
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            height: 100%;
            border: none;
        }
    }
}
</style>
