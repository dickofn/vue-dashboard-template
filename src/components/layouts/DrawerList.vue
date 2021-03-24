<template>
  <v-list dark expand nav v-bind="$attrs" v-on="$listeners">
    <template v-for="(item, i) in items">
      <ListGroup v-if="item.items" :key="`group-${i}`" :item="item" />

      <ListItem v-else :key="`item-${i}`" :item="item" />
    </template>
  </v-list>
</template>

<script>
import ListItem from "@/components/layouts/ListItem";
import ListGroup from "@/components/layouts/ListGroup";

export default {
  name: "DrawerList",

  components: {
    ListGroup,
    ListItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
