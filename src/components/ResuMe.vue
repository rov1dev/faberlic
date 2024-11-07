<template>
  <section id="resume">
    <img class="res-img" width="250px" height="250px" src="../assets/ava.jpg" alt="" />
    <h2 class="gradient-text">Hi, I'm Elshod</h2>
    <p class="res-txt">
      I'm a 18 years old working as a frontend developer with 2+ years experience building intuitive
      websites for companies and businesses that want to reach more result
    </p>
    <div class="social">
      <a href=""><ScrollText /> <span>Resume</span></a>
      <a href="https://github.com/rov1dev" target="_blank"><GithubIcon /><span>GitHub</span></a>
      <a href="https://www.linkedin.com/in/elshod-nazarov-303886320/" target="_blank"><Linkedin /><span>Linkedin</span></a>
      <a href="https://t.me/nazarovweb" target="_blank"><Send /><span>Telegram</span></a>
    </div>
  </section>
</template>

<script setup>
import { ScrollText, GithubIcon, Linkedin, Send } from 'lucide-vue-next'
</script>
