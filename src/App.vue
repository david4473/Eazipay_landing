<script setup>
import Header from "./components/header.vue";
import Footer from "./components/Footer.vue";
import Overview from "./components/Overview.vue";
import Target from "./components/Target.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
  <header>
    <Header />
  </header>
  <main class="px-14">
    <Hero />
    <Target />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
