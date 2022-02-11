<template>
  <v-app>
    <v-app-bar
      clipped-left app
    >
      <span>
        Release Manager
      </span>
    </v-app-bar>
    <v-navigation-drawer permanent clipped app>
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-divider v-if="item.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" link :to="'/' + item.text.toLowerCase()">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    items: [
      // {icon: 'mdi-view-dashboard', text: 'Dashboard'},
      {icon: 'mdi-keyboard-tab', text: 'run'},
      {icon: "mdi-file", text: 'report'},
      {divider: true},
    ],
  }),
};
</script>
