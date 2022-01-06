<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col>
          <v-select
              :items="releases"
              v-model="release"
              label="Outlined style"
              dense
              outlined>
          </v-select>
        </v-col>
        <v-col>
          <v-select
              :items="types"
              v-model="type"
              label="Outlined style"
              dense
              outlined>
          </v-select>
        </v-col>
        <v-col>
          启动检查
          <v-btn icon color="orange" target="_blank" @click="panel = [0]">
            <v-icon>mdi-arrow-down-bold-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

          <v-expansion-panels
              v-model="panel"
              multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header>检查详情</v-expansion-panel-header>
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
    }
  }
}
</script>

<style scoped>

</style>