<template>
  <page title="Dashboard">
    <grid-row cards>


      <grid-col sm="6" lg="3">
        <stamp-card icon="dollar-sign" footer="12 waiting payments"><a href="#">132 <small>Sales</small></a></stamp-card>
      </grid-col>
      <grid-col sm="6" lg="3">
        <stamp-card color="green" icon="shopping-cart" footer="32 shipped"><a href="#">78 <small>Orders</small></a></stamp-card>
      </grid-col>
      <grid-col sm="6" lg="3">
        <stamp-card color="red" icon="users" footer="163 registered today"><a href="#">1352 <small>Members</small></a></stamp-card>
      </grid-col>
      <grid-col sm="6" lg="3">
        <stamp-card color="yellow" icon="message-square" footer="16 waiting"><a href="#">132 <small>Comments</small></a></stamp-card>
      </grid-col>
    </grid-row>

    <grid-row cards class="mt-2">
      <grid-col xs="12" md="12" lg="12">
        <card>
          <t-table responsive hover cards outline vertical-align="center" className="text-nowrap">
            <table-head>
              <table-row>
                <table-cel header class="text-center w-1"></table-cel>
                <table-cel header>User</table-cel>
                <table-cel header>Usage</table-cel>
                <table-cel header class="text-center">Payment</table-cel>
                <table-cel header>Activity</table-cel>
                <table-cel header class="text-center">Satisfaction</table-cel>
                <table-cel header class="text-center"></table-cel>
              </table-row>
            </table-head>
            <table-body>
              <table-row v-for="user in users" :key="user.id">
                <table-cel class="text-center">
                  <avatar :image-url="`/static/demo/faces/female/${user.id}.jpg`" status-color="green"/>
                </table-cel>
                <table-cel>
                  <div>{{ user.name }}</div>
                  <div class="small text-muted">Registered: {{ user.registered_date }}</div>
                </table-cel>

                <table-cel>
                  <div class="clearfix">
                    <div class="float-left">
                      <strong> {{ user.usage.percent}}%</strong>
                    </div>
                    <div class="float-right">
                      <small class="text-muted">{{ user.usage.start_date }}</small>
                    </div>
                  </div>
                  <progress-bar size="xs" color="yellow" :progress="user.usage.percent" />
                </table-cel>

                <table-cel class="text-center">
                  <i :class="`payment payment-${user.payment}`"></i>
                </table-cel>

                <table-cel>
                  <div class="small text-muted">Last login</div>
                  <div>{{ user.last_login }}</div>
                </table-cel>

                <table-cel class="text-center">
                  <div class="mx-auto chart-circle chart-circle-xs" data-value="0.42" data-thickness="3" data-color="blue">
                    <div class="chart-circle-value">{{ user.satisfaction}}%</div>
                  </div>
                </table-cel>

                <table-cel>
                  <dropdown position="right" class="item-action">
                    <template slot="dropdown-toggle">
                      <a href="javascript:void(0)" class="icon"><i class="fe fe-more-vertical"></i></a>
                    </template>
                    <dropdown-menu-item label="Renew"/>
                    <dropdown-menu-item label="Remove"/>
                  </dropdown>
                </table-cel>
              </table-row>
            </table-body>
          </t-table>
        </card>
      </grid-col>
    </grid-row>
  </page>
</template>

<script>
    export default {
      name: "home-page",
      data: () => ({
        stats: [
          {label: 'New Tickets', movement: 6, total: 43},
          {label: 'Closed Today', movement: -3, total: 17},
          {label: 'New Replies', movement: 9, total: 7},
          {label: 'Followers', movement: 3, total: '27.3K'},
          {label: 'Daily Earnings', movement: -2, total: '$95'},
          {label: 'Products', movement: -1, total: 621}
        ],
        process: [
          {label: 'New feedback', movement: 6, total: 62},
          {label: 'Today profit', movement: -3, total: '$652'}
        ],
        users: [
          {id: 1, name: 'Elizabeth Martin', registered_date: 'March 19, 2018', payment: 'visa', last_login: '4 minutes ago', satisfaction: 45, usage: {percent: 44, start_date: 'Jun. 11, 2015 - Jul. 10, 2025'} },
          {id: 2, name: 'Mariano Luther', registered_date: 'January 03, 2007', payment: 'paypal', last_login: '1 hour ago', satisfaction: 60 , usage: {percent: 47, start_date: 'Jun. 11, 2015 - Jul. 10, 2025'} },
          {id: 3, name: 'Thirdy Musjk', registered_date: 'April 19, 2006', payment: 'visa', last_login: '13 minutes ago', satisfaction: 50, usage: {percent: 78, start_date: 'Jun. 11, 2015 - Jul. 10, 2025'} },
        ]
      })
    }
</script>

<style scoped>

</style>
