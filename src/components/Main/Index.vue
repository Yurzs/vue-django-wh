<template>
  <div>
    <div class="col-md-8 col-lg-9 news-block wow slideInRight" data-wow-duration="2s">
      <!--TODO дописать время по бразуеру пользователя-->
      <div v-for="post in news" v-bind:key="post.id" class="row align-items-center">

        <div class="col-lg-7">
          <div class="news">
            <div class="body-news">
              <div class="news-title h4">{{post.title}}</div>
              <div class="news-date">Дата: {{ post.public_since }}</div>
              <div class="news-content">
                {{post.text}}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="news-image"></div>
        </div>
      </div>

      <div class="paginator">
        <a v-if="paginator.prev_page" v-bind:href="paginator.prev_page"><i class="fas fa-angle-double-left"></i></a>
        <a v-if="paginator.prev_page" v-bind:href="paginator.page-1">{{paginator.page - 1}}</a>
        <a v-bind:href="paginator.page">{{paginator.page}}</a>
        <a v-if="paginator.next_page" v-bind:href="paginator.page+1">{{paginator.page+1}}</a>
        <a v-if="paginator.next_page" v-bind:href="paginator.next_page"><i class="fas fa-angle-double-right"></i></a>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      news: {},
      paginator: {}
    }
  },
  methods: {
    NewsloadData () {
      fetch('https://wh-club.digital-resistance.net/api/v1/main-page/recent_news/')
        .then(response => response.json())
        .then(json => {
          for (let news in json) {
            this.$set(this.news, news, json[news])
            if (this.news[news]['public_since']) {
              (this.$set(this.news[news], 'public_since', new Date(json[news]['public_since']).toLocaleString('ru')))
            }
            this.$set(this.paginator, 'prev_page', json[news]['prev_page'])
            this.$set(this.paginator, 'next_page', json[news]['next_page'])
            this.$set(this.paginator, 'pages', json[news]['pages'])
            this.$set(this.paginator, 'page', json[news]['page'])
          }
        })
    }
  },
  created: function () {
    this.NewsloadData()
  }
}

</script>

<style scoped>

</style>
