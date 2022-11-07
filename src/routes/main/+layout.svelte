<script lang="ts">
    import '$root/styles/util.css'
    import '$root/styles/main.css'
    import '$root/styles/bootstrap.min.css'
    import '$root/fonts/font-awesome-4.7.0/css/font-awesome.min.css'     
</script>

<style>
  .bg-nav { background:#f3f3f3 !important}
  .overflow-x {
    overflow-x: auto;
  }
</style>
 
<div class="limiter">
  <div class="container-login100">
      <div class="wrap-border p-0 d-flex flex-nowrap">
        <!-- nav-bar -->
        <div class="bg-secondary p-3 m-0 bg-nav">
          <div>
            <p class="fs-18 m-0">Papaya.com.pe</p>            
            <p>Marcelo</p>
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/main/categorias/list">Categorias</a></li>
            <li><a href="/main/usuarios/list">Usuarios</a></li>
            <li><a href="/main/tag/list">Tags</a></li>
            <li><a href="/main/publicaciones/list">Publicaciones</a></li>
          </ul>
        </div>
        <!-- nav-bar -->

        <!-- body -->
        <div class="p-3 text-left w-100 over overflow-x">
          <slot></slot>
        </div>
        <!-- body -->
      </div>
  </div>
</div>
  