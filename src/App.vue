<template>
<menu-component></menu-component>
<router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
