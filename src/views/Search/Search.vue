<template>
  <div class="Search">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <!-- For backards compatibility with v4 names. Please use new names only to get rid of this. -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/v4-shims.css">

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <table style="min-width:800px;margin-left: 30px;width:95%;">
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
            <tr>
              <td>
                <div class="giant_text" data-toggle="tooltip"
                  style="margin-left:2em;color:darkslategrey"
                  title="Jump to Orders"
                  onclick="postit('landing.jsp')">
                  <i class="fa fa-file-image-o" aria-hidden="true" style="color:grey"></i>
                  &nbsp;&nbsp;&nbsp;Plan
                </div>
                <table id="block1" style="text-align: center">
                  <tr>
                    <td colspan="4" style="width:240px">
                      <div class="super_giant_text orgShipments" style="color:lightsteelblue"
                        id="orgShipments"
                        >0
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="major_text orgReattempts" style="color:lightsteelblue"
                        id="orgReattempts"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=reattempts&title=REATTEMPT')">
                        Reattempts
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgManifest" style="color:lightsteelblue"
                        id="orgManifest"
                        >0
                      </div>
                      <div class="title_text" style="color:lightslategray">
                        Manifest
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgEDI" style="color:lightsteelblue" id="orgEDI"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp', '&reportType=edi&title=EDI')">
                        EDI
                      </div>
                    </td>
                    <td id="scratchParent">
                      <div class="major_text orgScratches" style="color:lightsteelblue;"
                        id="orgScratches"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" id="orgScratchesTitle"
                        style="color:lightslategray;"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=scratches&title=Scratches')">
                        Scratches
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <div data-toggle="tooltip" class="giant_text"
                  style="margin-left:2em;color:darkslategrey"
                  title="Jump to Sortation"
                  onclick="postit('sort.jsp')">
                  <i class="fa fa-sliders" aria-hidden="true" style="color:grey"></i>
                  &nbsp;&nbsp;&nbsp;Sortation
                </div>
                <table style="text-align: center">
                  <tr>
                    <td colspan="4" style="width:240px">
                      <div class="super_giant_text orgSort" style="color:lightsteelblue"
                        id="orgSort"
                        >0%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="major_text orgRecieved" style="color:lightsteelblue"
                        id="orgRecieved"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=sortation&title=SORTATION')">
                        Planned
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgNotSorted" style="color:lightsteelblue"
                        id="orgNotSorted"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=unsorted&title=PLANNED')">
                        Pending
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgShort" style="color:lightsteelblue" id="orgShort"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=short&title=SHORT')">
                        Short
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgSorted" style="color:lightsteelblue" id="orgSorted"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=swept&title=SWEPT')">
                        Received
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <div data-toggle="tooltip" class="giant_text"
                  style="margin-left:2em;color:darkslategrey"
                  title="Jump to Dispatch"
                  onclick="postit('dispatch.jsp')">
                  <i class="fa fa-arrows-alt" aria-hidden="true" style="color:grey"></i>
                  &nbsp;&nbsp;&nbsp;Dispatch
                </div>
                <table style="text-align: center">
                  <tr>
                    <td colspan="3" style="width:240px">
                      <div class="super_giant_text orgShipped" style="color:lightsteelblue"
                        id="orgShipped"
                        >0%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="major_text orgRouted" style="color:lightsteelblue" id="orgRouted"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=sortation&title=PLANNED')">
                        Planned
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgLoaded" style="color:lightsteelblue"
                        id="orgNotDispatched"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=unscanned&title=UNSCANNED')">
                        Unscanned
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgLoaded" style="color:lightsteelblue" id="orgLoaded"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=loaded&title=LOAD')">
                        Loaded
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <div data-toggle="tooltip" class="giant_text"
                  style="margin-left:2em;color:darkslategrey"
                  title="Jump to Drivers"
                  onclick="postit('reports/drivers.jsp')">
                  <i class="fa fa-truck" aria-hidden="true" style="color:grey"></i>
                  &nbsp;&nbsp;&nbsp;Delivery
                </div>
                <table style="text-align: center">
                  <tr>
                    <td colspan="3" style="width:240px">
                      <div class="super_giant_text orgCompleted" style="color:lightsteelblue"
                        id="orgCompleted"
                        >0%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="major_text orgDeliver" style="color:lightsteelblue"
                        id="orgDeliver"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=delivery&title=DELIVERY')">
                        Deliver
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgUndeliver" style="color:lightsteelblue"
                        id="orgUndeliver"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=undelivery&title=UNDELIVERABLE')">
                        Undeliver
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgReject" style="color:lightsteelblue" id="orgReject"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=reject&title=REJECT')">
                        Rejects
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <div class="giant_text" style="color:darkslategrey">
                    <i class="fa fa-dropbox" aria-hidden="true" style="color:grey"></i>
                    &nbsp;&nbsp;&nbsp;Returns
                </div>
                <table style="text-align: center">
                  <tr>
                    <td colspan="3" style="width:240px">
                      <div class="super_giant_text orgReturn" style="color:lightsteelblue"
                      id="orgReturn">0%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="major_text orgReturns" style="color:lightsteelblue"
                        id="orgReturns"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=returns&title=RETURN')">
                        Returns
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgReturned" style="color:lightsteelblue"
                        id="orgReturned"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=returned&title=RETURN SUCCESS')">
                        Returned
                      </div>
                    </td>
                    <td>
                      <div class="major_text orgFailed" style="color:lightsteelblue" id="orgFailed"
                        >0
                      </div>
                      <div data-toggle="tooltip" class="title_text" style="color:lightslategray"
                        title="Click for Details"
                        onclick="postitMore('reports/drilldown.jsp',
                        '&reportType=failed&title=RETURN FAILURE')">
                        Failed
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
                <div id="container" style="width:95%; height:300px; border:none;margin: 2em"></div>
              </td>
            </tr>
            <tr>
              <td colspan="5" style="background-color: #f6f6f6">
                <table style="width: 100%;table-layout: fixed">
                  <tr>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button id="searchBtn" class="dropdown-item btn btn-primary"
                        data-toggle="tooltip"
                        title="Search orders"
                        onclick="postit('./proof.jsp')"
                        style="width:100%">
                        <i class="fa fa-exclamation-triangle fa-fw" aria-hidden="true"></i>
                        Search
                      </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button id="loadscanBtn" class="dropdown-item btn btn-danger"
                        data-toggle="tooltip"
                        title="View Loadscan Failures"
                        onclick="postit('reports/loadscans.jsp')"
                        style="width:100%">
                        <i class="fa fa-exclamation-triangle fa-fw" aria-hidden="true"></i>
                        Loadscans
                      </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button id="undeliverableBtn" class="dropdown-item btn btn-primary"
                        data-toggle="tooltip"
                        title="View Delivery Failures"
                        onclick="postBigSite('reports/sortAreaViewer.jsp')"
                        style="width:100%">
                        <i class="fa fa-bars fa-fw" aria-hidden="true"></i>
                        Undeliverables
                      </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button class="dropdown-item btn btn-primary"
                        data-toggle="tooltip"
                        title="View Drivers Report"
                        onclick="postit('reports/drivers.jsp')"
                        style="width:100%">
                        <i class="fa fa-truck fa-fw" aria-hidden="true"></i>
                        Drivers
                      </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button class="dropdown-item btn btn-primary"
                        data-toggle="tooltip"
                        title="View Payment Report"
                        onclick="postit('reports/paymentReport.jsp')"
                        style="width:100%">
                        <i class="fa fa-money fa-fw" aria-hidden="true"></i>
                        Payments
                      </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button class="dropdown-item btn btn-primary"
                        data-toggle="tooltip"
                        title="View History Report"
                        onclick="postit('./proofOfDelivery.jsp')"
                        style="width:100%">
                        <i class="fa fa-history fa-fw" aria-hidden="true"></i>
                        History
                      </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                        <button class="dropdown-item btn btn-primary"
                                data-toggle="tooltip"
                                title="View History Report"
                                onclick="postit('reports/history.jsp')"
                                style="width:100%">
                            <i class="fa fa-history fa-fw" aria-hidden="true"></i>
                            History
                        </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                        <button class="dropdown-item btn btn-primary"
                                data-toggle="tooltip"
                                title="View Location Accuracy Report"
                                onclick="postit('reports/locationMetrics.jsp')"
                                style="width:100%">
                            <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
                            Location
                        </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                        <button class="dropdown-item btn btn-primary"
                                data-toggle="tooltip"
                                title="View Route Report"
                                onclick="postit('reports/routeMetrics.jsp')"
                                style="width:100%">
                            <i class="fa fa-map fa-fw" aria-hidden="true"></i>
                            Route
                        </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                        <button class="dropdown-item btn btn-primary"
                                title="View Stop Report"
                                onclick="postit('reports/stopMetrics.jsp?customerName=925&
                                nodeName=925&permit=false&currency=USD&timezone=America/New_York')"
                                style="width:100%">
                            <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                            Stop
                        </button>
                    </td>
                    <td style="width:4em;margin: 1em 0 1em">
                      <button class="dropdown-item btn btn-primary"
                        title="View Task Report"
                        onclick="postit('reports/taskMetrics.jsp')"
                        style="width:100%">
                        <i class="fa fa-user-o fa-fw" aria-hidden="true"></i>
                        Task
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
export default {
  props: {
  },
  data() {
    return {
      userInfo: this.$auth.user,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./_Search.scss";
  @import "../../assets/scss/mileZero.scss";
  @import "../../assets/scss/custom.scss"
</style>
