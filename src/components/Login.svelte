<script lang="ts">    

    
    import { fade, fly } from 'svelte/transition'
    import { login } from '$root/services/login.services'

    export let imgIni: string = ''
    let nick: string = ''
    let pass: string = ''    
    let showError = false;


    async function handleSubmit(event: SubmitEvent) {
        showError = false;
		const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const rpt = await login(JSON.stringify(Object.fromEntries(formData)))
        
        if (rpt.status === 200) {
            const { token } = await rpt.json();
            localStorage.setItem('token', token);      
            location.href = './main'
            showError = false;        
        } else {        
            showError = true;        
        }        

	}

</script>

<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src = {imgIni} alt="IMG">
            </div>

            <form 
                on:submit|preventDefault={handleSubmit}
                method="post"
                class="login100-form validate-form">
                <span class="login100-form-title">
                    Login Blog
                </span>
                

                <div class="wrap-input100 validate-input" data-validate = "Usuario es Requerido">
                    <input class="input100" type="text" name="nick" placeholder="usuario" id="usuario" value={nick}>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Password es Requerido">
                    <input class="input100" type="password" name="pass" placeholder="Password" id="password" value={pass}>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>


                {#if showError}
                <div in:fade out:fade>
                    <p class="text-danger text-center">Usuario o Clave Incorrectos</p>
                </div>
                {/if}
                
                <div class="container-login100-form-btn">
                    <button type="submit" class="login100-form-btn">
                        Ingresar
                    </button>
                </div>

                

                <div class="text-center p-t-136">                    
                </div>
            </form>
        </div>
    </div>
</div>