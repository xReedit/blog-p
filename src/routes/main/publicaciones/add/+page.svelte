
<script lang="ts">

    import { onMount } from 'svelte';
    import { getData, postData, putData } from '$root/services/httpClient.services'
    import { goto } from '$app/navigation';
    import { page } from '$app/stores'
    import MultiSelect from 'svelte-multiselect'
    
    let isNewRegister = true
    let id: string
    let listCategoria = []
    let listTags = []
    let tagSelected = [];
    let dataForm = {}
    let idCategoriaSeleted
    const eventController = 'publicacion'

    onMount(async () => {

        listCategoria = await getData('categoria','all')
        listTags = await getData('tag','all')        


        id = $page.url.searchParams.get('id')
        if (id) {
            // load data categoria
            const data = await getData(eventController,`byId/${id}`)            
            if ( !data[0] ) return
            
            isNewRegister = false;            
            tagSelected = data[0].tags.split(',')
            idCategoriaSeleted = data[0].categoria.idcategoria 
            dataForm = data[0]
        }

    })
    
    // $:selected = listCategoria.find((o) => o.idcategoria === categoriaSelected.idcategoria);

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        let payload = Object.fromEntries(formData)        
        payload = {...payload,
                    idcategoria: idCategoriaSeleted,
                    tags: tagSelected.join(',')
                }    
        const rpt = isNewRegister ?
                    await postData(eventController, 'create', payload)
                    : await putData(eventController, `update/${id}`, payload)

        if (rpt.status === 200) {            
            goto('./list')
        } else {
            console.error(rpt)
        }
    }    

    
</script>

<div>
    <form         
        method="post" 
        on:submit|preventDefault={handleSubmit}>

        <div style="display: grid;">

            <label for="tag">Tags</label>
            <MultiSelect 
                id="tag"                
                bind:selected={tagSelected}                
                options={listTags.map(x => x.descripcion)}                    
                maxSelect={5}                
                >                
            </MultiSelect>
            

            <label for="list-categoria">Categoria</label>
            <select 
                bind:value={idCategoriaSeleted}                
                id="list-categoria">
                {#each listCategoria as item}
                    <option value={item.idcategoria}>
                        {item.descripcion}
                    </option>
                {/each}

            </select><br>

            <input 
                class="input-flat"
                name="titulo"
                placeholder="Titulo"
                value={dataForm['titulo'] || ''}>

            <textarea 
                class="input-flat"
                name="resumen"
                placeholder="Resumen"
                value={dataForm['resumen'] || ''}
                cols="10" rows="5"></textarea>

            <br>
            <label for="id-foto">Link foto principal</label>
            <input 
                id="id-foto"
                class="input-flat"
                name="link_foto_principal"
                placeholder="Link Foto Principal"
                value={dataForm['link_foto_principal'] || ''}>
            
            <label for="id-link-publicacion">Link Publicacion</label>
            <input 
                id="id-link-publicacion"
                class="input-flat"
                name="link_id"
                placeholder="Link de la publicacion"
                value={dataForm['link_id'] || ''}>
            
            <br>
            <label for="contenido">Contenido</label>
            <textarea 
                id="contenido"
                class="input-flat"
                name="content"
                value={dataForm['content'] || ''}
                placeholder="Contenido" cols="50" rows="20"></textarea>
        </div>
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