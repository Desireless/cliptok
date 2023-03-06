<script>
  export let videoUrl = null;

  function downloadVideo() {
    if(videoUrl === null) return;
    
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", videoUrl, true);
      xhr.responseType = "blob";
      xhr.onload = function () {
        const urlCreator = window.URL || window.webkitURL;
        const blobUrl = urlCreator.createObjectURL(this.response);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "video.mp4";
        link.click();
      };
      xhr.send();
    } catch (e) {
      console.log("Error downloading video")
      console.log(e);
    }
  }
</script>

<button
  on:click={downloadVideo}
  type="button"
  class="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-cloud-download mr-2"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#ffffff"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"
    />
    <line x1="12" y1="13" x2="12" y2="22" />
    <polyline points="9 19 12 22 15 19" />
  </svg>
  Descargar
</button>
