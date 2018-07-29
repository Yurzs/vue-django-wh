<template>
  <div id="MainSite">
    <div id="my-page">
      <div id="my-header">
        <header class="site-header">
          <div class="top-line">
            <a href="#" class="logo"><img src="../static/img/logo-1.svg" alt=""></a>
            <div class="icon d-none d-sm-block">
              <a href=""><img src="../static/img/icon/l2top.png" alt=""></a>
              <a href=""><img src="../static/img/icon/l2top.png" alt=""></a>
              <a href=""><img src="../static/img/icon/l2top.png" alt=""></a>
            </div>
            <a href="#my-menu" class="hamburger hamburger--spin">
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </a>

            <nav id="my-menu">
              <ul>
                <li><a href="/about">О сервере</a></li>
                <li><a href="/account/register">Регистрация</a></li>
                <li><a href="/statistics">Статистика</a></li>
                <li><a href="/files">Файлы</a></li>
                <li><a href="/account/donation">Пожертвование</a></li>
                <li><a href="/stock">Акции</a></li>
                <li><a href="/сontest">Конкурсы</a></li>
                <li><a href="https://forum.wh-club.ru/">Форум</a></li>
              </ul>
            </nav>
          </div>
          <div class="header-flex">
            <div class="flex-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 col-10">
                    <div class="header-composition animated fadeInUp">

                      <div class="logo-text">
                        <p><span>PREMIUM COMPLEX LINEAGE  2 SERVER</span></p>
                        <h1 class="h1">wh-club</h1>
                        <strong>INTERLUDE X50 MAY</strong>
                      </div>

                      <p><strong>WH-CLUB</strong> - это абсолютно новый и высоко бюджетный проект Lineage 2 основанный на официальной платформе. Проект рассчитан на целевую аудиторию ценителей хроник Interlude. Выбирая нас, Вы получаете максимальное удовольствие от игры. </p>

                      <a href="#" class="button button-black"><span>Начать играть</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-socials">
            <nav class="soc">
              <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <div id="my-content">
        <section class="s-main">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-3 left-block wow slideInLeft" data-wow-duration="2s">
                <div class="row">
                  <div class="col-md-12 order-md-1 col-sm-6 offset-sm-0 order-sm-2 col-8 offset-2">
                    <div class="block-status">
                      <div v-for="(server,i) in servers" v-bind:key="i" class="status-server">
                        <p class="name-s h4">WH-CLUB X{{server.rates}} <span>{{server.name}}</span></p>
                        <div class="progress" v-bind:data-content="server.online / 1000">
                          <div class="progress-bar">
                            <div id="myTooltip" style="display: none;">
                              <span>Online<span style="color: #F3A486;">{{server.online}}</span> players</span>
                            </div>
                          </div>
                        </div>
                        <p class="info-s">Статус: <span v-if="server.is_online === true" id="st-s" style="color:#52c234">online</span><span v-else style="color:#c02425">offline</span> <br>Платформа: {{ server.platform }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 order-md-2 col-sm-6 offset-sm-0 order-sm-1 col-8 offset-2">
                    <div class="posts">
                      <div class="block-title"><p class="h4">Обсуждения</p><a href="#">Перейти на форум</a></div>
                      <div v-for="(post,i) in forum_posts" v-bind:key="i" class="post">
                        <div class="post-img"><img v-bind:src="post.poster_photo" alt=""></div>
                        <div class="post-content">
                          <div class="post-title"><a v-bind:href="post.src_link">{{ post.title }}</a></div>
                          <div class="post-author">{{ post.last_poster_name }}, {{ post.post_time }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <router-view/>
            </div>
          </div>
        </section>
        <section class="s-services">
          <div class="owl-carousel carousel-services">

            <div class="carousel-services-item">
              <div class="corousel-services-content">
                <div class="carousel-services-composition">
                  <div class="carousel-logo"><img src="../static/img/logo-2.svg" alt=""></div>
                  <h3 class="h3">Сервер interlude x50 описание</h3>
                  <div class="corousel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis enim vitae eros ultricies tempus ut in lectus. Fusce ac nulla orci. Proin enim diam, iaculis interdum nibh sit amet, hendrerit suscipit ipsum. Maecenas tincidunt efficitur libero, a cursus lorem.
                  </div>
                  <div class="btn">
                    <a href="" class="button"><span>Подробнее</span></a>
                  </div>
                </div>
              </div>

              <div class="carousel-services-image">

              </div>
            </div>
            <div class="carousel-services-item">
              <div class="corousel-services-content">
                <div class="carousel-services-composition">
                  <div class="carousel-logo"><img src="../static/img/logo-2.svg" alt=""></div>
                  <h3 class="h3">Сервер interlude x100 описание</h3>
                  <div class="corousel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis enim vitae eros ultricies tempus ut in lectus. Fusce ac nulla orci. Proin enim diam, iaculis interdum nibh sit amet, hendrerit suscipit ipsum. Maecenas tincidunt efficitur libero, a cursus lorem.
                  </div>
                  <div class="btn">
                    <a href="" class="button"><span>Подробнее</span></a>
                  </div>
                </div>
              </div>

              <div class="carousel-services-image">

              </div>
            </div>
            <div class="carousel-services-item">
              <div class="corousel-services-content">
                <div class="carousel-services-composition">
                  <div class="carousel-logo"><img src="../static/img/logo-2.svg" alt=""></div>
                  <h3 class="h3">Сервер interlude x10 описание</h3>
                  <div class="corousel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis enim vitae eros ultricies tempus ut in lectus. Fusce ac nulla orci. Proin enim diam, iaculis interdum nibh sit amet, hendrerit suscipit ipsum. Maecenas tincidunt efficitur libero, a cursus lorem.
                  </div>
                  <div class="btn">
                    <a href="" class="button"><span>Подробнее</span></a>
                  </div>
                </div>
              </div>

              <div class="carousel-services-image">

              </div>
            </div>
            <div class="carousel-services-item">
              <div class="corousel-services-content">
                <div class="carousel-services-composition">
                  <div class="carousel-logo"><img src="../static/img/logo-2.svg" alt=""></div>
                  <h3 class="h3">Сервер interlude x100 описание</h3>
                  <div class="corousel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis enim vitae eros ultricies tempus ut in lectus. Fusce ac nulla orci. Proin enim diam, iaculis interdum nibh sit amet, hendrerit suscipit ipsum. Maecenas tincidunt efficitur libero, a cursus lorem.
                  </div>
                  <div class="btn">
                    <a href="" class="button"><span>Подробнее</span></a>
                  </div>
                </div>
              </div>

              <div class="carousel-services-image">

              </div>
            </div>
          </div>
        </section>

        <section class="s-king inverse section-overley">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <h2 class="h2">Игровой мир wh-club</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis enim vitae eros ultricies tempus lectus. Fusce ac nulla orci. Proin enim diam interdum nibh sit amet, hendrerit .</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis enim vitae eros ultricies tempus lectus. Fusce ac nulla orci. Proin enim diam interdum nibh sit amet, hendrerit.</p>
              </div>
              <div class="col-lg-7">
                <div class="section-gallery fotorama" data-nav="thumbs" data-thumbwidth="106" data-thumbheight="70" data-thumbborderwidth="4" data-thumbmargin="10" data-width="100%">
                  <img src="../static/img/photos/small/10.jpg" alt="">
                  <img src="../static/img/photos/small/11.jpg" alt="">
                  <img src="../static/img/photos/small/12.jpg" alt="">
                  <img src="../static/img/photos/small/13.jpg" alt="">
                  <img src="../static/img/photos/small/14.jpg" alt="">
                  <img src="../static/img/photos/small/15.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="s-call inverse">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 offset-lg-7">

                <form action="/" @submit="checkForm" class="callback" method="post" id="reg-form">

                  <div class="callback-logo">
                    <img src="../static/img/logo-2.svg" alt="">
                  </div>

                  <div class="form-head">Начни играть прямо сейчас!</div>
                  <p>Зарегистрируй аккаунт для входа в игру</p>

                  <input v-model="login" type="text" name="Name" required>
                  <div class="label-box">
                    <label>Логин</label>
                    <span class="valid"></span>
                  </div>

                  <input type="text" v-model="email" name="Email" required>
                  <div class="label-box">
                    <label>Действующий e-mail</label>
                    <span class="valid"></span>
                  </div>

                  <input v-model="password" type="password" name="Password" required>
                  <div class="label-box">
                    <label>Пароль</label>
                    <span class="valid"></span>
                  </div>

                  <input v-model="password2" type="password" name="PasswordConfirm" required>
                  <div class="label-box">
                    <label>Повторите пароль</label>
                    <span class="valid"></span>
                  </div>
                  <vue-recaptcha
                    ref="recaptcha"
                    v-model="g_recaptcha"
                    size="invisible"
                    sitekey="6LdZCGcUAAAAAMWM43qUIbWYl5IZenEMqq_rSGxh">
                  </vue-recaptcha>
                  <input type="submit" form="reg-form" class="button" value="Зарегистрироваться" >
                </form>
              </div>
            </div>
          </div>
        </section>

        <section class="s-statistics inverse section-overley">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h2 class="h2 text-center">Статистика лучших игроков</h2>
              </div>

              <div class="col-sm-8 offset-sm-2">

                <div class="owl-carousel stat-carousel">
                  <div v-for="(server,i) in top5" v-if="i !=='time'" v-bind:key="'pvp_'+i" class="statistics">
                    <div class="statistics-header">Топ 5 PVP игроков {{i}}</div>
                    <div class="statistics-date">Актуально на {{top5.time}}</div>
                    <div class="statistics-text">
                      <table>
                        <tr>
                          <th>#</th>
                          <th>Игрок</th>
                          <th>Pvp</th>
                        </tr>
                        <tr v-for="(character,j) in server.pvp" v-bind:key="'pvp_char_'+j">
                          <td>{{j+1}}</td>
                          <td>{{character.char_name}}</td>
                          <td>{{character.pvpkills}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div v-for="(server,i) in top5" v-if="i !=='time'" v-bind:key="'pk_'+i" class="statistics">
                    <div class="statistics-header">Топ 5 PK игроков {{i}}</div>
                    <div class="statistics-date">Актуально на {{top5.time}}</div>
                    <div class="statistics-text">
                      <table>
                        <tr>
                          <th>#</th>
                          <th>Игрок</th>
                          <th>PK</th>
                        </tr>
                        <tr v-for="(character,j) in server.pk" v-bind:key="'pk_char_'+j">
                          <td>{{j+1}}</td>
                          <td>{{character.char_name}}</td>
                          <td>{{character.pkkills}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div v-for="(server,i) in top5" v-if="i !=='time'" v-bind:key="'clan_'+i" class="statistics">
                    <div class="statistics-header">Топ 5 кланов {{i}}</div>
                    <div class="statistics-date">Актуально на {{top5.time}}</div>
                    <div class="statistics-text">
                      <table>
                        <tr>
                          <th>#</th>
                          <th>Клан</th>
                          <th>Репутация</th>
                          <th>Замок</th>
                        </tr>
                        <tr v-for="(clan,j) in server.clan" v-bind:key="'clan_'+j">
                          <td>{{j+1}}</td>
                          <td>{{clan.clan_name}}</td>
                          <td>{{clan.reputation_score}}</td>
                          <td>{{clan.castle}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section class="s-streams section-overley">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h2 class="h2 text-center">Прямые трансляции</h2>
              </div>

              <div class="col-sm-10 offset-sm-1">
                <div class="owl-carousel streams">
                  <div v-for="(stream,i) in streams" v-bind:key="'stream_'+i" class="stream">
                    <img v-bind:src="stream.preview_stream" v-bind:alt="stream.title">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="my-footer">

        <div class="main-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-3 col-xs-12">
                <div class="footer-column">

                  <img src="../static/img/logo-1.svg" alt="" class="logo-footer">
                  <p>Комплекс игровых<br>серверов Lineage 2.<br>Качество, стабильность,<br>комфорт.</p>
                  <div class="social-footer">
                    <nav class="soc">
                      <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                      </ul>
                    </nav>
                  </div>

                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-xs-12">
                <div class="footer-column">

                  <nav class="footer-menu">
                    <ul>
                      <li><a href="#">О сервере</a></li>
                      <li><a href="#">Регистрация</a></li>
                      <li><a href="#">Статистика</a></li>
                      <li><a href="#">Файлы</a></li>
                      <li><a href="#">Пожертвование</a></li>
                      <li><a href="#">Форум</a></li>
                    </ul>
                  </nav>

                </div>
              </div>
              <div class="col-lg-3 col-md-5 col-xs-12">
                <div class="footer-column">

                  <p class="footer-addr">
                    <i class="fas fa-envelope"></i>
                    Техническая поддержка:<br>
                    <a href="mailto:adm@wh-club.ru">adm@wh-club.ru</a>
                  </p>

                  <p class="footer-addr">
                    <i class="fas fa-comments"></i>
                    Задайте интересующий вас<br>
                    вопрос на <a href="http://forum.wh-club.ru/">форуме.</a>
                  </p>

                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-xs-12">
                <div class="footer-column">

                  <div class="partners">
                    <img src="../static/img/PayPal.png" alt="">
                    <img src="../static/img/QIWI.png" alt="">
                    <img src="../static/img/ya.png" alt="">
                    <img src="../static/img/vesamast.png" alt="">
                    <img src="../static/img/bel.png" alt="">
                    <img src="../static/img/meg.png" alt="">
                    <img src="../static/img/mtslogocolorru-600x300.png" alt="">
                    <img src="../static/img/nc-logo.png" alt="">
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!--<div id="App">-->
    <!---->
    <!--<router-view/>-->
  <!--</div>-->
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VueRecaptcha from 'vue-recaptcha'
import 'popper.js'

export default {
  name: 'MainSite',
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  data(){
    return{
      servers: {},
      forum_posts: {
      0: {'title': 'loading...', 'last_poster_name': 'Author', 'post_time': '01.01.1970 00:00:00', 'poster_photo': 'static/img/post_img.png'},
      1: {'title': 'loading...', 'last_poster_name': 'Author', 'post_time': '01.01.1970 00:00:00', 'poster_photo': 'static/img/post_img.png'},
      2: {'title': 'loading...', 'last_poster_name': 'Author', 'post_time': '01.01.1970 00:00:00', 'poster_photo': 'static/img/post_img.png'},
      3: {'title': 'loading...', 'last_poster_name': 'Author', 'post_time': '01.01.1970 00:00:00', 'poster_photo': 'static/img/post_img.png'},
      4: {'title': 'loading...', 'last_poster_name': 'Author', 'post_time': '01.01.1970 00:00:00', 'poster_photo': 'static/img/post_img.png'}
      },
      errors: {},
      login: null,
      password: null,
      password2: null,
      g_recaptcha: null,
      email: null,
      top5:{},
      streams:{}
    }
  },
  methods: {
    ServerloadData()
    {
      fetch('https://wh-club.digital-resistance.net/api/v1/server/')
        .then(response => response.json())
        .then(json => {
          let i = 1
          for (let server in json) {
            if (!this.servers[i]) {
              Vue.set(this.servers, i, {});
              i++
            }
            fetch(json[server] + '/info/')
              .then(response => response.json())
              .then(serv_json => {
                Vue.set(this.servers, serv_json[0].id, serv_json[0])
              })
          }
        })
    },
    ForumPostsloadData () {
      fetch('https://wh-club.digital-resistance.net/api/v1/main-page/forum_last_posts/')
        .then(response => response.json())
        .then(json => {
          for (let post in json) {
            this.$set(this.forum_posts, post, json[post])
          }
        })
    },
    checkForm: function (e) {
      e.preventDefault()
      if (this.password !== this.password2) { Vue.set(this.errors, 'password2', 'Passwords don\'t match')
      }
      else {
        Vue.delete(this.errors, 'password2')
      }
      if (this.password.length === 0) {
        Vue.set(this.errors, 'password', 'Please input password')
      }
      fetch('https://wh-club.digital-resistance.net/api/v1/user/register/',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login: this.login,
            password: this.password,
            password2: this.password,
            email: this.email,
            g_recapthca: 'sdfasdfadf131',
            rules: true
          })
        })
        .then(response => response.json())
        .then(json => {
          console.log(json)
        })
    },
    Top5loadData() {
      fetch('https://wh-club.digital-resistance.net/api/v1/main-page/top5/')
        .then(response => response.json())
        .then(json => {
          for (let result in json) {
            Vue.set(this.top5, result, json[result])
          }
        })
    },
    StreamsloadData(){
      fetch('https://wh-club.digital-resistance.net/api/v1/main-page/video_streams/')
        .then(response => response.json())
        .then(json => {
          for (let stream in json) {
            Vue.set(this.streams, stream, json[stream])
          }
        })
    }

  },

  created: function () {
    this.ServerloadData()
    this.ForumPostsloadData()
    this.Top5loadData()
    this.StreamsloadData()

    setInterval(function () {
      this.ServerloadData()
      this.ForumPostsloadData()
    }.bind(this), 5000)

    setInterval(function () {
      this.Top5loadData()
    }.bind(this),1*60*1000)
  }
}
</script>

<style>

</style>
