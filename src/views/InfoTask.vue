<template>
    <div class="d-flex justify-content-center">
        <div class="viewTask p-2 m-0">
            <div class="card">
                <div class="card-body p-3">
                    <h5 class="card-title">Название задачи #{{$route.params.id}}</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci id iste, nihil perspiciatis provident temporibus totam? Assumenda deserunt id mollitia sed ut? Blanditiis delectus error in ipsum laborum omnis, voluptate!</p>
                    <p class="card-text">Приоритет-важно</p>
                    <p class="card-text">Планируемое время - 00:18</p>
                    <p class="card-text">Затраченное время - 00:22</p>
                    <p class="card-text">Статус - в плане</p>
                    <a href="#" @click.prevent="back" class="card-link">Назад</a>
                    <a href="#" class="card-link">Редактировать</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoTask',
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.viewTask{
    max-width: 860px;
}
</style>
