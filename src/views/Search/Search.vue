<template>
  <div class="Search">
    <table width="95%" style="min-width:800px;margin-left: 30px">
      <tr>
        <td style="height: 1em;"></td>
      </tr>
      <tr style="width: 100%">
        <td style="width: 260px;"><a href="https://milezero.com"><img src='../../assets/imgs/newSmallMzLogo.png'/></a></td>
        <td>
          <div class="giant_text" style="color:#0c7cba;height:22px">PLATFORM MANAGEMENT</div>
        </td>
        <td align="center" style="vertical-align: top;width: 90px">
          <table style="width:100%">
            <tr>
              <td align="center">
                <div class="circular_avatar" style="width:30px;height:30px;border:0px">
                  <div id="userImage"></div>
                </div>
                <div style="display:inline">
                  <button class='alerts' id='alerts'
                    style='position:relative;left:15px;top:-35px;visibility: hidden;'
                    onclick="postit('alerts.jsp')">
                    <span id='userAlerts' style='position: relative;left:-2px;top:-1px'></span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="position: relative;top:-10px">
                <span id="userData" style="color:lightsteelblue; font-size: small"></span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="height: 1em;"></td>
      </tr>
    </table>
    <table style="width:95%;max-height:95%;margin-left: 40px" id="dashboard">
      <tr>
        <td>
          <table style="width: 100%" id="summary">
            <tr v-if="this.metrics">
              <td v-for="(metric, metricName) in metrics" v-bind:key="metricName">
                <div class="giant_text" data-toggle="tooltip"
                  style="margin-left:2em;color:darkslategrey"
                  title="Jump to Orders"
                  onclick="postit('landing.jsp')">
                  <i v-bind:class="metric.iconClass" class="fa" aria-hidden="true"
                    style="color:grey"></i>
                  &nbsp;&nbsp;&nbsp;{{ metric.name }}
                </div>
                <table id="block1" style="text-align: center">
                  <tr>
                    <td colspan="4" style="width:240px">
                      <div class="super_giant_text orgShipments" style="color:lightsteelblue"
                        id="orgShipments"
                        >{{ metric.value }}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="(submetric, submetricName) in metric.submetrics"
                    v-bind:key="submetricName">
                      <div class="major_text orgReattempts" style="color:lightsteelblue"
                        id="orgReattempts"
                        >{{ submetric.value }}
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=reattempts&title=REATTEMPT')">
                        {{ submetric.name }}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="5" style="height:1em;background-color: #f6f6f6;">&nbsp;</td>
            </tr>
            <tr>
              <td colspan="5" style="background-color: #f6f6f6;">
                <span data-toggle="tooltip"
                  title="Historical view of planned versus actual routes"
                  class="giant_text"
                  style="color:darkslategrey;margin: 2em">FULFILLMENT SUMMARY</span><br>
                  <Highchart :options="chartOptions" style="width:95%;
                    height:300px; border:none;margin: 2em"/>
              </td>
            </tr>
            <tr>
              <td colspan="5" style="background-color: #f6f6f6">
                <table style="width: 100%;table-layout: fixed">
                  <tr>
                    <td v-for="(option, index) in options" v-bind:key="index"
                    style="width:4em;margin: 1em 0 1em">
                      <button v-bind:id="option.id" v-bind:class="option.buttonClass"
                        class="dropdown-item btn"
                        data-toggle="tooltip"
                        title="Search orders"
                        onclick="postit('./proof.jsp')"
                        style="width:100%">
                        <i v-bind:class="option.iconClass" class="fa fa-fw" aria-hidden="true"></i>
                        {{ option.label }}
                      </button>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="5" style="width:100%;text-align: center;background-color: #f6f6f6;
              color: #808080">
                <div name="footer1" id="footer1"></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <td style="text-align: right; margin-left: 2em;margin:3em; vertical-align: top">
        <div id="hidden" hidden></div>
      </td>
    </table>
    <div hidden
    style="width:200px;height:600px;-webkit-border-radius: 5px;-moz-border-radius: 5px;
    border-radius: 5px; border:1px solid #C9C9C9;background-color:lightgrey;margin-left:2em"
    id="subentities"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import ConnectionOptions from '@/service/local-connection.json';
import chartOptions from './chartOptions';
import * as metricsMappings from './metricsMappings';
import * as optionMappings from './optionMappings';

exportingInit(Highcharts);

export default {
  props: {
  },
  data() {
    return {
      userInfo: this.$auth.user,
      org: this.$auth.org,
      metrics: [],
      metricsMappings: metricsMappings[this.$auth.org.org.name],
      options: optionMappings[this.$auth.org.org.name],
      reports: null,
      chartOptions,
    };
  },
  components: {
    Highchart: Chart,
  },
  computed: {
    ...mapGetters('Hub', [
      'selectedHub',
    ]),
  },
  methods: {
    async getExecStats() {
      try {
        const url = new URL(`${ConnectionOptions.mileviewUrl}/stats/executing`);
        url.search = new URLSearchParams({
          node: this.selectedHub.referenceId,
          carrier: this.org.org.name,
        }).toString();

        const metricsObject = await (await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            Authentication: this.$auth.authToken,
          },
        })).json();
        return metricsObject.metrics;
      } catch (e) {
        return e;
      }
    },
    filterMetrics(metrics) {
      const mappedMetrics = this.metricsMappings;
      for (let i = 0; i < metrics.length; i += 1) {
        const currentMetric = metrics[i];
        // Check if passed metric is needed for current org
        if (mappedMetrics[currentMetric.name]) {
          const metricToMap = mappedMetrics[currentMetric.name];
          metricToMap.value = currentMetric.value;
          // Iterate through submetrics and populate if needed
          for (let j = 0; j < currentMetric.submetrics.length; j += 1) {
            const currentSubmetric = currentMetric.submetrics[j];
            if (metricToMap.submetrics[currentSubmetric.name]) {
              metricToMap.submetrics[currentSubmetric.name].value = currentSubmetric.value;
            }
          }
        }
      }
      return mappedMetrics;
    },
    async getReports() {
      const twoWeeksPrior = new Date(new Date() - 12096e5).toISOString();
      const currentTime = new Date().toISOString();
      try {
        const url = new URL(`${ConnectionOptions.mileviewUrl}/reports`);
        url.search = new URLSearchParams({
          node: this.selectedHub.referenceId,
          report: 'route',
          driverName: null,
          filter: 'bypass',
          timeStart: twoWeeksPrior,
          timeEnd: currentTime,
          page: 0,
          pageSize: 100,
        }).toString();

        const reportsSummary = await (await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            Authentication: this.$auth.authToken,
          },
        })).json();
        return reportsSummary;
      } catch (e) {
        return e;
      }
    },
    buildGraph(summary) {
      const series = (summary && summary.series) ? summary.series : [];
      const categories = (summary && summary.categories) ? summary.categories : null;
      if (categories !== null) {
        this.chartOptions.xAxis.categories = categories;
        this.chartOptions.series = series;
      }
    },
  },
  async mounted() {
    this.metrics = this.filterMetrics(await this.getExecStats());
    this.reports = await this.getReports();
    this.buildGraph(this.reports);
  },
  watch: {
    async selectedHub() {
      this.metrics = this.filterMetrics(await this.getExecStats());
      this.reports = await this.getReports();
      this.buildGraph(this.reports);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./_Search.scss";
  @import "../../assets/scss/mileZero.scss";
  @import "../../assets/scss/custom.scss"
</style>
