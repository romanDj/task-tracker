<template>
  <div class="auth d-flex justify-content-center">
    <b-form id="login-form" class="d-flex flex-column  p-2">
      <b-form-group id="exampleInputGroup1"
                    label="Логин:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      v-model="login"
                      type="text"
                      placeholder="Введите логин">
        </b-form-input>
        <template v-if="errors.login">
          <p class="text-danger mt-2" v-for="item in errors.login">{{item}}</p>
        </template>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="Пароль:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      v-model="password"
                      type="password"
                      placeholder="Введите пароль">
        </b-form-input>
        <template v-if="errors.password">
          <p class="text-danger mt-2" v-for="item in errors.password">{{item}}</p>
        </template>

      </b-form-group>

      <b-button class="mb-3 mygreen" @click.prevent="loginBtn" variant="success">Авторизация</b-button>

      <router-link class="w-100"  to="/signup"><b-button type="reset" class="w-100" variant="info">Регистрация</b-button></router-link>

    </b-form>
  </div>
</template>

<script>
// <HelloWorld msg="Welcome to Your Vue.js App"/>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'auth',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  computed: {
    errors: function () {
      return this.$store.getters.errors
    }
  },
  components: {

  },
  methods: {
    loginBtn () {
      const login = this.login
      const password = this.password
      this.$store.dispatch('AUTH_REQUEST', { login, password }).then((response) => {
        if (response) {
          this.$router.push({ name: 'task' })
        }
      })
    }
  }

}
</script>
<style scoped>
  #login-form{
    width: 500px;
  }

</style>
