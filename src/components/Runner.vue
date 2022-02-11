<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>运行任务</v-card-title>
          <v-row>
            <v-col cols="5">
              <v-select
                  :items="stages"
                  v-model="stage"
                  label="任务阶段"
                  outlined>
              </v-select>
            </v-col>
            <v-col cols="5">
              <v-text-field
                  label="任务id"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn icon color="orange" target="_blank" @click="startTask">
                <v-icon>mdi-arrow-down-bold-circle</v-icon>
              </v-btn>
            </v-col>

          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Runner",
  data() {
    return {
      stages: ["init", "merge", "create_mr", "create_tag", "pipeline_validate",
        "specjbb_validate", "oss_install", "artifact_checker", "yida_commit"],
      stage: null,
    }
  },
  methods: {
    startTask() {
      console.log("run")
    }
  }
}
</script>

<style scoped>

</style>