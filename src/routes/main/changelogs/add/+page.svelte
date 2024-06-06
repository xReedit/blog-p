
<script lang="ts">

    import { onMount } from 'svelte';
    import { getData, postData, putData } from '$root/services/httpClient.services'
    import { goto } from '$app/navigation';
    import { page } from '$app/stores'

    let nom_categoria = ''
    let isNewRegister = true
    let id: string
    let rowItem: any = {
        titulo: '',
        descripcion: '',
        route: '',
        body: ''
    }
    let body = 'aaaa'

    const eventController = 'changelog'

    onMount(async () => {
        id = $page.url.searchParams.get('id')
        if (id) {
            // load data categoria
            const data = await getData(eventController,`byId/${id}`)
            console.log('data', data);
            if ( !data[0] ) return
            
            isNewRegister = false;
            nom_categoria = data[0].descripcion            
            rowItem = data[0]

            body = rowItem.body
        }
    })

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const payload = Object.fromEntries(formData)

        
        const rpt = isNewRegister ?
                    await postData(eventController, 'create', payload)
                    : await putData(eventController, `update/${id}`, payload)

        if (rpt.status === 200) {            
            goto('./list')
        } else {
            console.error(rpt)
        }

        // form.addEventListener('submit', handleSubmit)
        // return {
        //     destroy() {
        //         form.removeEventListener('submit', handleSubmit)
        //     }
        // }
    }
</script>

<div>
    <form         
        method="post" 
        on:submit|preventDefault={handleSubmit}>
        <input 
            class="input-flat"
            name="titulo"
            placeholder="Titulo"
            value={rowItem.titulo}>
        <input 
            class="input-flat"
            name="descripcion"
            placeholder="Descripcion"
            value={rowItem.descripcion}>
        <input 
            class="input-flat"
            name="route"
            placeholder="Route"
            value={rowItem.route}>
        <br><br>
        <textarea 
            class="input-flat"
            name="body"
            placeholder="Body"
            rows="20"
            cols="90"
            bind:value={body}
            ></textarea>
        <br><br>
        <button type="submit" class="btn btn-sm btn-dark">
            <i class="fa fa-save"></i> 
            Listo Guardar</button>

        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="btn btn-sm btn-info" href="./list">
            <i class="fa fa-arrow-left"></i>
            Atras
        </a>
    </form>
</div>