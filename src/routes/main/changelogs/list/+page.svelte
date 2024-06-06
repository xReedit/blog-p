<script lang="ts">

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'
    import { getData, putData } from '$root/services/httpClient.services'
    import { goto } from '$app/navigation';    
    import { paramsSwalAlert, showAlertSwalDecision} from '$root/utils/mi.swal'

    let list = []
    const eventController = 'changelog'

    onMount(async () => {
        getAll()
    })

    const getAll = async () => {
        list = await getData(eventController, 'all')        
    }

    function edit(item: any): void {
        goto(`./add?id=${item.route}`)
    }

    async function remove(item: any) {
        let _paramsSwalAlert = paramsSwalAlert
        _paramsSwalAlert.icon = 'warning'
        _paramsSwalAlert.showCancelButton = true
        _paramsSwalAlert.html = `<p class="text-white fs-15">Esta seguro de eliminar ${item.descripcion}?</p>`
        const rpt = await showAlertSwalDecision(_paramsSwalAlert)
        if ( rpt.isConfirmed ) {
            await putData(eventController,`delete/${item.idcategoria}`, '')
            list = list.filter(x => x.idcategoria !== item.idcategoria);
        }        
    }

</script>

<div in:fade>    
    <a class="btn btn-sm btn-primary float-right" href="./add">+ Add</a>
    <table class="w-100 tabla1">
        <thead>        
            <th>#</th>
            <th>Titulo</th>
            <th align="right"></th>
        </thead>
        <tbody>
            {#each list as item, i}
                <tr>
                    <td>{i+1}</td>
                    <td>                        
                        <p class="m-0">{item.fecha}</p>
                        <p class="m-0 font-weight-bold">{item.titulo}</p>
                        <p class="m-0">{item.descripcion}</p>
                    </td>
                    <td class="p-1" align="right">
                        <button class="btn-sm btn-warning" on:click={edit(item)}><i class="fa fa-pencil"></i></button>
                        <button class="btn-sm btn-danger" on:click={remove(item)}><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
