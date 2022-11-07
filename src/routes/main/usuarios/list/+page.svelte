<script lang="ts">

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'
    import { getData, putData } from '$root/services/httpClient.services'
    import { goto } from '$app/navigation';    
    import { paramsSwalAlert, showAlertSwalDecision} from '$root/utils/mi.swal'

    let list = []
    const eventController = 'usuario'

    onMount(async () => {
        getAll()
    })

    const getAll = async () => {
        list = await getData(eventController, 'all')        
    }

    function edit(item: any): void {
        goto(`./add?id=${item.idusuario}`)
    }

    async function remove(item: any) {
        let _paramsSwalAlert = paramsSwalAlert
        _paramsSwalAlert.icon = 'warning'
        _paramsSwalAlert.showCancelButton = true
        _paramsSwalAlert.html = `<p class="text-white fs-15">Esta seguro de eliminar ${item.descripcion}?</p>`
        const rpt = await showAlertSwalDecision(_paramsSwalAlert)
        if ( rpt.isConfirmed ) {
            await putData(eventController,`delete/${item.idusuario}`, '')
            list = list.filter(x => x.idusuario !== item.idusuario);
        }        
    }

</script>

<div in:fade>    
    <a class="btn btn-sm btn-primary float-right" href="./add">+ Add</a>
    <table class="w-100 tabla1">
        <thead>        
            <th>#</th>
            <th>Nombre</th>
            <th>usuario</th>
            <th align="right"></th>
        </thead>
        <tbody>
            {#each list as item, i}
                <tr>
                    <td>{i+1}</td>
                    <td>{item.nombre}</td>
                    <td>{item.nick}</td>
                    <td class="p-1" align="right">
                        <button class="btn-sm btn-warning" on:click={edit(item)}><i class="fa fa-pencil"></i></button>
                        <button class="btn-sm btn-danger" on:click={remove(item)}><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
