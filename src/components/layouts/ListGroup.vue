<template>
  <v-list-group
    active-class="primary darken-1 white--text"
    :group="group"
    :prepend-icon="item.icon"
    eager
    v-bind="$attrs"
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="!item.icon && !item.avatar"
        class="text-caption text-uppercase text-center my-2 align-self-center"
        style="margin-top: 14px"
      >
        {{ title }}
      </v-list-item-icon>

      <v-list-item-avatar v-if="item.avatar">
        <v-img :src="item.avatar" />
      </v-list-item-avatar>

      <v-list-item-content v-if="item.title">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in item.items">
      <ListGroup v-if="child.items" :key="`sub-group-${i}`" :item="child" />

      <ListItem v-if="!child.items" :key="`child-${i}`" :item="child" />
    </template>
  </v-list-group>
</template>

<script>
import ListItem from "@/components/layouts/ListItem";

export default {
  name: "ListGroup",

  components: {
    ListItem,
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    group() {
      return this.genGroup(this.item.items);
    },
    title() {
      const matches = this.item.title.match(/\b(\w)/g);

      return matches.join("");
    },
  },

  methods: {
    genGroup(items) {
      return items
        .reduce((acc, cur) => {
          if (!cur.to) return acc;

          acc.push(cur.items ? this.genGroup(cur.items) : cur.to.slice(1, -1));

          return acc;
        }, [])
        .join("|");
    },
  },
};
</script>
