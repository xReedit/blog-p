
<!-- <svelte:head>
    <meta name="title" content="Software Gastronómico">
	<meta name="keywords" content="POS, software gastronómico, punto de venta, software para restaurantes, facturación electrónica, sistema para restaurantes, facturacion electronica">
	<meta name="description" content="software para restaurantes, Mejora tu operación, aumenta tus ventas y facilita tu experiencia con papaya.com.pe: Software Punto de Venta diseñado especialmente para negocios gastronómicos.">				
	<meta property="og:description" content="software para restaurantes, Mejora tu operación, aumenta tus ventas y facilita tu experiencia con papaya.com.pe: Software Punto de Venta diseñado especialmente para negocios gastronómicos.">
	<meta name="twitter:title" content="Software Gastronómico">
	<meta name="referrer" content="no-referrer-when-downgrade">
	<meta name="google" content="notranslate">
</svelte:head> -->
<script lang="ts">
    
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';    

    import '$root/styles/util.css'
    import '$root/styles/main.css'    
    import '$root/styles/bootstrap.min.css'    
    import '$root/fonts/font-awesome-4.7.0/css/font-awesome.min.css'    
    
    import { page } from '$app/stores';


    onMount(async () => {
        if ( $page.url.pathname === 'main' ) {            
            goto(`./main`)            
        } else {            
            goto(`./blog`)
        }
    })    
    
</script>
