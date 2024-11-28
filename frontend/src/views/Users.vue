<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <user-table />
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from "./components/UserTable";
// import ProjectsTable from "./components/ProjectsTable";

export default {
  name: "user",
  components: {
    UserTable,
    // ProjectsTable,
  },
};
</script>
