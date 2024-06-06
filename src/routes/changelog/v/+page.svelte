
<style>  
  .content-note {    
    max-width: 700px;
    margin: 0 auto;
    font-weight: 200;    
  }
</style>

<script lang="ts">
    // import { fly } from 'svelte/transition'      
  import { page } from '$app/stores';        
    // import marked from 'marked';
    
	import { onMount } from 'svelte';
  import { getData } from '$root/services/httpClient.services'
  import * as marked from 'marked'; 
	import LoaderPage from '$root/components/Loader-page.svelte';

    export let content: string;
    let data: any = [];

    let nomPage = $page.url.searchParams.get('page')
    
    onMount(async () => {          
        // const response = await fetch(`../src/storage/changelog/${nomPage}.md`);
        // const response = await fetch(`$root/storage/changelog/${nomPage}.md`);
        // const response = await fetch(`/storage/changelog/${nomPage}/${nomPage}.md`);
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        
        // const mdContent = await response.text();
        // content = marked.parse(mdContent);

        loadPage();
    })

    async function loadPage() {
      data = await getData('changelog', `byId/${nomPage}`) 
      console.log(data);
      content = marked.parse(data[0].body);
    }
    

</script>

<div class="content-note">  
  <a href="./main"><i class="fa fa-arrow-left mr-1"></i> Ver Todos los cambios</a>
  <br><br>
  {@html content}
</div>