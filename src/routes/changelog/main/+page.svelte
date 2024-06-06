<script lang="ts">
    import { getData } from '$root/services/httpClient.services'
    import { onDestroy, onMount } from 'svelte';

    let data: any = [];
    onMount(async () => {        
        loadDataChangeLog();          
    }) 

    async function loadDataChangeLog() {
        data = await getData('changelog','all') 
        console.log(data);
    }
</script>

<style>
    li {
        /* margin-bottom: 10px; */
        border-bottom: .1em solid #373737;
    }
</style>

<div>
    <h1>Registro de cambios</h1>
    <p>Actualizaciones y mejoras realizadas en <a href="https://papaya.com.pe/">papaya.com.pe</a></p>    
    <hr>    
    <ul>
        {#each data as item}
            <li>
                <a href="./v?page={item.route}">{item.titulo}</a>
                <div class="d-flex">
                    <p class="mr-2">{item.fecha}</p>
                    <p class="font-bold">{item.descripcion}</p>
                </div>                
            </li>
        {/each}
    </ul>
</div>