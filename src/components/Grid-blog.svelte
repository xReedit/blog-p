<script lang="ts">
    import { onMount } from 'svelte';
    import { getData } from '$root/services/httpClient.services'    
    import PostItem from '$root/components/Post-preview.svelte'

    let list = []
    const eventController = 'blog'

    onMount(async () => {
        getAll()
    })

    const getAll = async () => {
        list = await getData(eventController, 'posts-preview')                
    }

    
</script>

<div class="content-blog">
    <div class="post-content">
        {#each list as item, i}
            <PostItem post={item}/>             
        {/each}
    </div>
    <br>
</div>