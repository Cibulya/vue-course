<template>
  <header class="navbar">
    <strong>Vue composition API</strong>
    <ul class="navbar-menu">
        <li>
            <router-link to="/">Главная</router-link>
        </li>
        <li>
            <router-link to="/reusable">Переиспользование</router-link>
        </li>
        <li>
            <router-link to="/vuex">VueX</router-link>
        </li>
    </ul>
  </header>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>
