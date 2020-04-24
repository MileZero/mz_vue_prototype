<template>
    <div class="BreadCrumbsContainer">
      <div class="BreadCrumb" v-for="page in pageViewHistory" :key="page.id">{{page.title}}
        <DropDownArrow :isSelected="false"/>
      </div>
    </div>
</template>

<script>
  import DropDownArrow from '../DropDownArrow/DropDownArrow.vue';
  import './_BreadCrumbs.scss';
  export default {
    data () {
      return {
        pageViewHistory: [
          {
            title: 'MANAGE',
            id: 1,
          },
          {
            title: 'Sortation',
            id: 2,
          },
          {
            title: 'SLC_01',
            id: 3,
          },
        ],
      };
    },
    props: {
    },
    components: {
      DropDownArrow,
    },
  };
</script>
