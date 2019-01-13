<template>
  <div class="task d-flex justify-content-center">
    <div class="tasklist">

        <b-button-group class="p-2">
          <b-button v-for="item in tabs" :variant="item.name!=currentTab ? 'outline-dark' : 'dark'" @click="currentTab=item.name">{{item.label}}</b-button>
        </b-button-group>

        <b-button variant="success" class="ml-2 mygreen" @click="addtsk">+ Task</b-button>

      <component v-bind:is="currentTabComponent">
      </component>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'scrum',
      tabs: [{
        name: 'short',
        label: 'Краткий вид'
      },
      {
        name: 'long',
        label: 'Подробный вид'
      },
      {
        name: 'scrum',
        label: 'Scrum-доска'
      }
      ]
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab + '_table'
    }
  },
  components: {
    scrum_table: () => import('@/components/ScrumTable.vue'),
    long_table: () => import('@/components/LongTable.vue'),
    short_table: () => import('@/components/ShortTable.vue')
  },
  methods: {
    addtsk: function () {
      this.$router.push('/task/add')
    }
  }
}
</script>

<style>
.tasklist{
  width: 1100px;
}

</style>
