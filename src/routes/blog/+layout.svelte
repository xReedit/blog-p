<script lang="ts">
    import { fly } from 'svelte/transition'    
    // import { page } from '$app/stores';
    

    import '$root/styles/util.css'
    import '$root/styles/main.css'    
    import '$root/styles/bootstrap.min.css'    
    import '$root/fonts/font-awesome-4.7.0/css/font-awesome.min.css'    
    import '$root/styles/blog.css'    

    import ToolBar from "$root/components/Toolbar.blog.svelte"
    import PanelLeft from "$root/components/Panel-left-blog.svelte"

    // import imgChef from '$root/images/img-chef.gif'
    

    
    // let pahtUrl = $page.url.pathname;    

    // let _classPanelLeft = 'panel-left content-border m-0'
    // let _classSlotLeft = 'top-content slot-content'
    

    // if ( pahtUrl === '/blog' ) {
    //     _classPanelLeft = 'panel-left content-border m-0 panel-left-close'
    //     _classSlotLeft = 'top-content slot-content ml-0'
    // }

    
    

</script>


<div in:fly="{{ x: 200, duration: 200 }}">    
    <!-- toolbar -->
    <ToolBar />

    <div class="d-flex">
        
        <!-- panel left -->
        <PanelLeft />
            
        <div class='top-content slot-content'>
            <slot></slot>
        </div>
    </div>
</div>