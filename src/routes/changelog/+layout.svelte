<style>
    .content-changelog {
        position: sticky; /* change this line */
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        min-height: 100vh; /* add this line */
        background: #13111C;
        color: #ffffffdb;
        padding: 30px;
        border-radius: 5px;
        margin: -8px;
        
    }

    .content-note {    
        max-width: 700px;
        margin: 0 auto;

        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    
</style>


<script lang="ts">
    import { fly } from 'svelte/transition'     
    import '$root/styles/util.css'
    import '$root/styles/main.css'    
    import '$root/styles/bootstrap.min.css'    
    import '$root/fonts/font-awesome-4.7.0/css/font-awesome.min.css'    
    import '$root/styles/blog.css'       
    // import { page } from '$app/stores';
</script>


<div in:fly|global="{{ x: 200, duration: 200 }}" class="content-changelog">        
    <div class="content-note">        
        <slot></slot>        
    </div>
</div>