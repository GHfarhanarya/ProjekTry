<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <alumni-table />
      </div>
    </div>
  </div>
</template>

<script>
import AlumniTable from "./components/AlumniTable";

export default {
  name: "alumni",
  components: {
    AlumniTable,
  },
};
</script>
