<template>
    <header class="navbar-expand-md header p-0">
        <div class="collapse navbar-collapse"  :class="{show: !collapsed}">
            <div class="navbar">
              <div class="container-xl">
                <div class="row flex-fill align-items-center">
                  <div class="col">
                    <t-nav tabbed class="border-0 flex-column flex-lg-row">
                        <slot></slot>
                    </t-nav>
                  </div>
                  <div class="col-2 d-none d-xxl-block">
                    <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                      <form action="https://preview.tabler.io/" method="get" autocomplete="off" novalidate>
                        <div class="input-icon">
                          <span class="input-icon-addon">
                            <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                          </span>
                          <input type="text" value="" class="form-control" placeholder="Search…" aria-label="Search in website">
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
</template>

<script>
import DropdownMenuItem from "../Dropdown/DropdownMenuItem.vue";
import NavItem from '../Nav/NavItem.vue';

export default {
    name: "site-navbar",
    props: {
        collapsed: { default: true, type: Boolean }
    },
    components: {
        DropdownMenuItem,
        NavItem
    }
}
</script>

<style scoped></style>