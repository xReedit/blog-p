<script lang="ts">
    import { PUBLIC_KEY_POST_STORAGE_LOCAL } from '$env/static/public'
    import { fade } from 'svelte/transition'
    import { goto } from '$app/navigation';
    import { putData } from '$root/services/httpClient.services'    
    export let post: any;    
    export let fromPost: boolean = false
    
   

    function showPost() {                
        localStorage.setItem(PUBLIC_KEY_POST_STORAGE_LOCAL, JSON.stringify(post));
        const _link = fromPost ? `./${post.link_id}` : `./blog/${post.link_id}`
        
        addVista(post.idpublicacion);
        goto(_link, { keepfocus: true })
    }

    async function addVista(id) {
        const rpt = await putData('blog', `add-vista/${id}`)        
    }

    function fechaLocal(fecha: string) : string {
        return  new Date(fecha).toLocaleDateString()
    }
</script>

<!-- <style>
    * {
    font-family: 'Nunito', sans-serif
  }
</style> -->

<div class="post-preview" in:fade>
    <div class="post-media-body">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="{post.link_foto_principal}" alt={post.link_foto_principal} on:click={showPost}>            
    </div>
    <div class="post-content-body">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="title m-0" on:click={showPost}>{post.titulo}</p>
        <p class="text-secondary m-0">{post.resumen}</p>
    </div>
    <div class="post-meta">
        <div class="d-flex">
            <!-- <p>{post.categoria.descripcion}</p> -->
            <p><i class="fa fa-calendar-times-o"></i> {fechaLocal(post.fecha)}</p>
        </div>
        <div>
            <p><i class="fa fa-eye"></i> {post.vistas}</p>
        </div>
    </div>
</div>