<template>
  <h1>
    <h2>
      <button class="btn btn-indigo outline" @click="resetTable">reset</button>
      <vue-good-table
        :isLoading="rows > 0 ? true : false"
        ref="someTable"
        :columns="columns"
        :rows="jobs"
        :line-numbers="true"
        :search-options="{
          enabled: true,

          skipDiacritics: true,

          placeholder: 'Search this table',
        }"
        :sort-options="{
          enabled: true,
          initialSortBy: { field: 'name', type: 'asc' },
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
          perPage: 5,
          setCurrentPage: 1,
        }"
        theme="black-rhino"
      />
    </h2>
  </h1>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "",
          },
        },
        {
          label: "phone",
          field: "phone",
          type: "number",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: "",
          },
        },
        {
          label: "Email",
          field: "email",
          type: "email",
          // dateInputFormat: "yyyy-MM-dd",
          // dateOutputFormat: "MMM do yy",
        },
        {
          label: "street",
          field: "address.street",
          type: "address",
        },
        {
          label: "Suit",
          field: "address.suite",
          type: "address",
          filterOptions: {
            enabled: true,
            placeholder: "All",
            filterDropdownItems: ["Apt. 556", "Suite 879", "Suite 847"],
          },
        },
      ],
      jobs: [],
    };
  },
  methods: {
    resetTable() {
      Object.assign(this.$data, this.$options.data());
      this.tableKey += 1;
      this.jobs();
      this.$refs["someTable"].reset();
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => (this.jobs = res.data))
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err));
  },
};
</script>