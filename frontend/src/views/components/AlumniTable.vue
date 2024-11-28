<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Daftar Alumni</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No.</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No. Telepon</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Alamat</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tahun Kelulusan</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Prodi</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status Kerja</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tanggal Registrasi</th>
            </tr>
          </thead>
          <tbody class="text-center custom-text-size">
            <tr>
              <td>1</td>
              <td>John Michael</td>
              <td>john@creative-tim.com</td>
              <td>+62 812 3456 7890</td>
              <td>Jl. Merdeka No. 123, Jakarta</td>
              <td>2020</td>
              <td>Teknik Informatika</td>
              <td>Sudah Bekerja</td>
              <td>23/04/22</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Alexa Liras</td>
              <td>alexa@creative-tim.com</td>
              <td>+62 811 2222 3333</td>
              <td>Jl. Sudirman No. 456, Bandung</td>
              <td>2018</td>
              <td>Sistem Informasi</td>
              <td>Belum Bekerja</td>
              <td>11/01/23</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Laurent Perrier</td>
              <td>laurent@creative-tim.com</td>
              <td>+62 813 9876 5432</td>
              <td>Jl. Ahmad Yani No. 789, Surabaya</td>
              <td>2019</td>
              <td>Teknik Komputer</td>
              <td>Freelancer</td>
              <td>19/09/21</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Michael Levi</td>
              <td>michael@creative-tim.com</td>
              <td>+62 815 6789 0123</td>
              <td>Jl. Pemuda No. 321, Yogyakarta</td>
              <td>2017</td>
              <td>Manajemen Informatika</td>
              <td>Sudah Bekerja</td>
              <td>24/12/20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alumni-table",
};
</script>

<style scoped>
/* Tambahkan ukuran teks khusus untuk <tbody> */
.custom-text-size td {
  font-size: 12px; /* Sesuaikan dengan kebutuhan, misal: 12px, 16px */
  color: #444444; /* Opsional: Ubah warna teks jika diinginkan */
}
</style>
