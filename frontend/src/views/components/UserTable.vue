<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Daftar User</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Peran</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Status</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Tanggal Daftar</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="align-middle text-center">1</td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <soft-avatar :img="img1" size="sm" border-radius="lg" class="me-3" alt="user1" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">John Michael</h6>
                  </div>
                </div>
              </td>
              <td>john@creative-tim.com</td>
              <td>Manager</td>
              <td class="align-middle text-center">
                <soft-badge color="success" variant="gradient" size="sm">Online</soft-badge>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
              <td class="align-middle text-center">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">Edit</a>
              </td>
            </tr>
            <!-- Tambahkan baris lain dengan data serupa -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SoftAvatar from "@/components/SoftAvatar.vue";
import SoftBadge from "@/components/SoftBadge.vue";
import img1 from "../../assets/img/team-2.jpg";

export default {
  name: "user-table",
  data() {
    return {
      img1,
    };
  },
  components: {
    SoftAvatar,
    SoftBadge,
  },
};
</script>
