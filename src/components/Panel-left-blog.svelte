<script lang="ts">
    import imgAppGestion from '$root/images/app-gestion.png'
    import imgAppMozo from '$root/images/app-mozo.png'
    import imgAppDelivery from '$root/images/app-delivery.png'

    // export let classPanelLeft = ''
</script>

<style>  
 * {
    font-family: 'Nunito', sans-serif !important;
  }
  .content-img {
    margin: 0 auto;
    text-align: center;
  }

  .content-img img {
    margin-bottom: 20px;
  }
  .content-img .img-1 {
    max-width: 210px;
  }

  .content-img .img-2 {
    max-width: 110px;
  }

  .content-img .img-3 {
    max-width: 110px;
  }
</style>

<div class='panel-left content-border m-0'>            
    <div class="top-content text-center">
        <div class="bg-plomo-0 p-20" style="margin-top: -15px; line-height: 1.5;">
            <p class="fw-600 m-0" style="line-height: 1.4;">Software espcializado para negocios gastronómicos.</p>
        </div>
        <div class="content-img">
            <img class="img-1" src={imgAppGestion} alt="app-gestion" title="app-gestion">
            <img class="img-2" src={imgAppMozo} alt="app-mozo" title="app-mozo">
            <img class="img-3" src={imgAppDelivery} alt="app-mozo" title="app-mozo">
        </div>
        <div class="p-20 m-0">
            <p style="line-height: 1.4;" class="m-0">Agrega innovación a tu negocio y súmate a la nueva generación de restaurantes, gestiona y controla todo desde único sistema moderno, facil y fluido. </p>
        </div>
        <div class="text-center mb-3">
            <a class="btn btn-primary text-white hov-pointer" href="https://papaya.com.pe" 
              target="_blank" rel="noopener noreferrer">Como funciona? 🚀</a>
        </div>
    </div>
</div>