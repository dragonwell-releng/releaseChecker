<template>
  <v-container fluid>
    <v-card>
      <v-row>
        <v-col cols="6">
          <v-select
              :items="releases"
              v-model="release"
              label="版本"
              dense
              outlined>
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-select
              :items="types"
              v-model="type"
              label="产品"
              dense
              outlined>
          </v-select>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title>发布历史</v-card-title>
            <v-data-table
                :headers="headers"
                :items="historyReleases"
            >
              <template v-slot:item.score="{ item }">
                <div v-if="item.score > 0">
                  <v-chip color="primary">{{ item.score }}</v-chip>
                </div>
                <div v-else>
                  <v-icon color="red">mdi-exclamation</v-icon>
                </div>
              </template>

            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-expansion-panels
              v-model="panel"
              multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header>检查详情 - 完成发布11.0.14.10</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-stepper v-model="e1" non-linear>
                  <v-stepper-header>
                    <v-stepper-step
                        editable
                        :complete="e1 > 1"
                        step="1"
                    >
                      构建规范检查
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        editable
                        :complete="e1 > 2"
                        step="2"
                    >
                      测试报告汇总
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        editable
                        step="3">
                      发布规范校验
                    </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-card
                          class="mb-12"
                          color=" lighten-1"
                          height="200px"
                      >
                        触发Jenkins构建规范检查...
                        <v-progress-circular
                            indeterminate
                        ></v-progress-circular>


                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-card
                          class="mb-12"
                          color=" lighten-1"
                          height="200px"
                      ></v-card>

                      <v-btn
                          color="primary"
                          @click="e1 = 3"
                      >
                        通过
                      </v-btn>

                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-card
                          class="mb-12"
                          color=" lighten-1"
                          height="200px"
                      ></v-card>

                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Checker",
  data() {
    return {
      stageAt: 0,
      stages: ['Prepare', 'Build', 'TestSummary', 'Notifications'],
      type: "Dragonwell", // Dragonwell / AJDK
      types: ['Dragonwell', 'AJDK'],
      release: 8, // 8,11,17
      releases: [8, 11, 17],
      e1: 1,
      panel: [0],
      headers: [
        {text: '版本号', value: 'version', sortable: true,},
        {text: '产品', value: 'product', sortable: false},
        {text: '发布时间', value: 'time', sortable: false,},
        {text: '发布进度', value: 'status', sortable: false,},
      ],
      historyReleases: [
        {
          version: "11.0.14.10",
          product: "Dragonwell",
          time: "2022-02-11 16:19:16",
          status: "prerelease"
        },
        {
          version: "11.0.13.9",
          product: "Dragonwell",
          time: "2021-12-11 16:19:16",
          status: "release"
        },
      ]
    }
  },
  methods: {},
  mounted() {
    console.log(this.historyReleases)
  }
}
</script>

<style scoped>

</style>