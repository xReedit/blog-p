<script lang="ts">
    import { PUBLIC_KEY_POST_STORAGE_LOCAL } from '$env/static/public'
    import { page } from '$app/stores';
    import { fly, fade } from 'svelte/transition'
    import { onDestroy, onMount } from 'svelte';
    import { getData } from '$root/services/httpClient.services'
    import { goto } from '$app/navigation';

    import PostItem from '$root/components/Post-preview.svelte'
    import LoaderPage from '$root/components/Loader-page.svelte'
    

	let linkPage = $page.params.slug
    let data: any = [];
    let listTags: any = [];
    let categoria
    let listPostRelacionados: any = [];
    let isLoadPage = false
    let isLoadingData = true
    
    const unsubs = [];

    unsubs[unsubs.length] = page.subscribe((n) => {	
        if ( isLoadPage ) {            
            loadDataPost();
        }
	});
    
    onMount(async () => {        
        loadDataPost();  
        isLoadPage = true;
    }) 

    async function loadDataPost() {
        linkPage = $page.params.slug
        if (linkPage) {
            isLoadingData = true;            
            
            let postStorage = null
            try {
                postStorage = JSON.parse(localStorage.getItem(PUBLIC_KEY_POST_STORAGE_LOCAL))            
            } catch(err) {
                console.error(err);
            }

            // postStorage sino trae todos los datos
            const _url = postStorage ? `byLink/${linkPage}` : `byLinkAll/${linkPage}`
            console.log(_url);
            
            data = await getData('blog',_url) 
            if (!data || data.length === 0)  {
                goto('./error')
                return;
            }       

            postStorage = postStorage ? postStorage : data[0]
            data = {...postStorage, content: data[0].content}

            listTags = data.tags.split(',')
            categoria = data.categoria.descripcion
            isLoadingData = false;

            //posts relacionados
            listPostRelacionados = await getData('blog','byVistas') 
            
            
        } 
    }
    
    //destroy subscribes    
    onDestroy(() => unsubs.forEach((_) => _()));
</script>

<style>
    * {
    font-family: 'Nunito', sans-serif
  }

</style>
<!-- svelte-ignore empty-block -->
{#if isLoadingData}
    <div>
        <LoaderPage />
    </div>
{:else}
    <div class="content-post mt-2" in:fly="{{ x: 200, duration: 200 }}">
        <div class="post-details">
            <div class="post-title">
                <p class="title">{data.titulo}</p>
            </div>    
            <hr>
            <div class="post-tags">                        
                {#each listTags as tag}
                    <p class="tag mb-0 ml-0 mr-1">{tag}</p>
                {/each}                        
            </div>
            <p class="categoria m-0 mt-2">
                {categoria}
            </p>
            <hr>

            <!-- content -->
            <div class="content">            
                <img src={data.link_foto_principal} alt={data.titulo}>

                <div class="post">
                    {@html data.content}
                </div>
            </div>
        </div>

        <!-- lista de posts relacionados por tags -->
        <div>
            <p class="fs-20">También te puede interesar</p>

            <div class="post-content">
                {#each listPostRelacionados as item}
                    <PostItem post={item} fromPost={true}/>             
                {/each}
            </div>
        </div>
    </div>
{/if}
