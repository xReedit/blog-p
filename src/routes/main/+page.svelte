
<script lang="ts">

    import { onMount } from 'svelte';
    import { verifyLogin } from '$root/services/login.services'
    
    onMount(async () => {        
        const rpt = await verifyLogin()

        if (rpt.status === 401) {
            location.href = './login'
        } 
    })

</script>

<h5>Editor del Blog</h5>

