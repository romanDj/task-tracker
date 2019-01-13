<template>
    <div class="signup d-flex justify-content-center">
        <b-form id="login-form" class="d-flex flex-column  p-2">

            <b-form-group
                          label="Имя пользователя:"
                          label-for="name_us">
                <b-form-input id="name_us"
                              type="text"
                              placeholder="Введите имя">
                </b-form-input>
            </b-form-group>

            <b-form-group
                          label="Почта:"
                          label-for="email_us">
                <b-form-input id="email_us"
                              type="email"
                              placeholder="Введите email">
                </b-form-input>
            </b-form-group>

            <b-form-group
                          label="Логин:"
                          label-for="exampleInput1">
                <b-form-input id="exampleInput1"
                              type="text"
                              placeholder="Введите логин">
                </b-form-input>
            </b-form-group>

            <b-form-group
                          label="Пароль:"
                          label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="password"
                              placeholder="Введите пароль">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Повторите пароль:"
                    label-for="pass2_us">
                <b-form-input id="pass2_us"
                              type="password"
                              placeholder="Введите пароль">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" class="mb-3 mygreen" @click.prevent="saveUser" variant="success">Сохранить</b-button>
            <router-link class="w-100"  to="/"><b-button class="w-100" type="reset" variant="secondary">Отмена</b-button></router-link>

        </b-form>
    </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      id: 'lol'
    }
  },
  methods: {
    saveUser () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
    #login-form{
        width: 500px;
    }
</style>
