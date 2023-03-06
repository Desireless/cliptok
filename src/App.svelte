<script>
    import DownloadButton from './components/DownloadButton.svelte';
import NavBar from './components/NavBar.svelte';
    import Progress from './components/Progress.svelte';
    import Timer from './components/Timer.svelte';
import DropVideo from './DropVideo.svelte';
    import ShowInfo from './ShowInfo.svelte';
    import { videoStatus, videoURL , videoInfo, videoTransformed} from "./store";
    import VideoPlayer from './VideoPlayer.svelte';
  import original from './assets/original.webp';
  import exported from './assets/exported.webp';


let isOpen = false;

function openModal() {
  isOpen = true;
}

function closeModal() {
  isOpen = false;
}
</script>


<NavBar />
<div class="max-w-xl mx-auto py-20 px-4 sm:px-6 lg:px-8 h-screen">
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-4xl font-extrabold">¡Haz que tu clip destaque en TikTok!</h1>
    <p class="mt-3 text-xl text-gray-800">Transforma tus clips de <strong>Valorant</strong> en vertical y añade partes destacadas en la zona superior con ClipTok.</p>

    <button class="bg-[#22223b]  hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" on:click={openModal}>
      Ejemplo
    </button>
    
    {#if isOpen}
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true" on:click={closeModal}>
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
    
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-100 rounded-lg p-4 text-center ">
                  <p class="text-lg font-medium text-gray-900">ORIGINAL</p>
                  <div class="flex flex-col justify-center items-center">

                    <img src={original} alt="clip original"/>
                  </div>
                </div>
    
                <div class="bg-gray-100 rounded-lg p-4 text-center">
                  <p class="text-lg font-medium text-gray-900">RESULTADO</p>
                  <div class="flex flex-col justify-center items-center">

                    <img src={exported} alt="clip exportado" class="max-h-60"/>
                  </div>
                </div>

                
              </div>
              <div class="mt-2">

                <p class="mb-3 text-xl"> ¿No tienes clips?, Aquí tienes unos pocos</p>
                
                <a href="https://drive.google.com/drive/folders/1GbeiULoY0r2S0ko-l0etP8pVGjml-aVs?usp=share_link" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ir a Google Drive
                </a>
              </div>
            </div>
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#22223b] text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" on:click={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}



    <main class="w-full flex justify-center">

      {#if $videoStatus === "idle"}
      <DropVideo />
  
      {:else if $videoStatus === "sending"}
        <p>Cargando... </p>
        <p>Este proceso podria tardar alrededor de 1 minuto.</p>
  
  
      {:else if $videoStatus === "error"}
        <p>Algo salió mal</p>
      {/if}
  
      {#if $videoTransformed !== null}
      <section class="flex flex-col justify-center items-center gap-5">
        <VideoPlayer src={$videoTransformed}/>
    
        <DownloadButton videoUrl={$videoTransformed}/>

      </section>
      {/if}
  
    </main>


  </div>

  <footer class="flex justify-center items-center font-semibold">
    <p>
      Hecho con  <a href="https://cloudinary.com/" target="_blank" rel="noreferrer"> Cloudinary</a> ⚡ para participar en la Hackaton de Midudev ❤

    </p>
  </footer>

</div>

