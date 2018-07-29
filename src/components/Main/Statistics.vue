<template>
  <div>
    <div class="col-md-8 col-lg-9 stats-block wow slideInRight" data-wow-duration="2s">
      <div class="stats-title h2 text-center">Cтатистика серверов</div>

      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-8 select-server">
          <a href="#" class="select serv1" data-title="WH-CLUB X50">
            <img src="img/stat-serv1.png" alt="">
          </a>
          <a href="#" class="select serv2" data-title="WH-CLUB X100">
            <img src="img/stat-serv2.png" alt="">
          </a>
          <a href="#" class="select serv3" data-title="WH-CLUB X5">
            <img src="img/stat-serv3.png" alt="">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 select-stat">
          <a href="#" class="button-ex">Общая статистика</a>
          <a href="#" class="button-ex">Топ 50 PVP</a>
          <a href="#" class="button-ex">Топ 50 PK</a>
          <a href="#" class="button-ex">Топ 30 кланов</a>
          <a href="#" class="button-ex">Замки</a>
        </div>
        <div class="col-lg-7 col-md-12 stat-info">
          <div class="row">
            <div class="col-md-12">
              <table>

                <tr>
                  <td>
                    <img src="img/castles/1.jpg" alt="">
                  </td>
                  <td>
                    <div class="info-castle">
                      <div class="title">Gludio</div>
                      <div class="content">
                        <p>Владелец: AdminsClan</p>
                        <p>Налог: 15%</p>
                        <p>Дата осады: 12 мая 2018 г. 18:00</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/castles/2.jpg" alt="">
                  </td>
                  <td>
                    <div class="info-castle">
                      <div class="title">Giran</div>
                      <div class="content">
                        <p>Владелец: AdminsClan</p>
                        <p>Налог: 15%</p>
                        <p>Дата осады: 12 мая 2018 г. 18:00</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/castles/3.jpg" alt="">
                  </td>
                  <td>
                    <div class="info-castle">
                      <div class="title">Oren</div>
                      <div class="content">
                        <p>Владелец: AdminsClan</p>
                        <p>Налог: 15%</p>
                        <p>Дата осады: 12 мая 2018 г. 18:00</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics'
}
</script>

<style scoped>

</style>
