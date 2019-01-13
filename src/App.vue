<template>
  <div id="app">
      <b-navbar toggleable="sm" variant="dark" type="dark" fixed="top">
          <div class="container">
              <b-navbar-brand href="#">Task Tracker</b-navbar-brand>
              <b-navbar-toggle class="border-0" target="nav_collapse"></b-navbar-toggle>

              <b-collapse is-nav id="nav_collapse">
                  <!-- Right aligned nav items -->

                  <b-navbar-nav class="mr-auto">
                      <router-link class="nav-link font-weight-normal mr-auto w-100" to="/auth">Авторизация</router-link>
                      <router-link class="nav-link font-weight-normal mr-auto w-100" to="/">Задачи</router-link>
                      <a class="nav-link" href="#" @click.prevent="logout">Выйти</a>
                  </b-navbar-nav>

              </b-collapse>
          </div>

      </b-navbar>
      <br>
      <div class="mt-5">
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('AUTH_LOGOUT')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983 !important;
}
</style>
