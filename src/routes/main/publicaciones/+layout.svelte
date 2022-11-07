<script lang="ts">
    import { fly } from 'svelte/transition'    
</script>

<div in:fly="{{ x: 200, duration: 200 }}">
    <div class="d-flex justify-content-between align-items-start m-0">
        <p class="fs-18 text-dark m-0">Publicaciones</p>        
    </div>
    <hr>
    
    <slot></slot>
</div>
