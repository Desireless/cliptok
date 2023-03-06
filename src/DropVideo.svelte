<script>
    import Dropzone from "dropzone";
    import "dropzone/dist/dropzone.css";
    import { videoStatus, videoURL , videoInfo, videoTypeSelected, videoTransformed} from "./store";
    import { generateURL } from "./utils/generateURL";
    import { configs } from "./utils/configs";

    import { onMount } from "svelte";

    onMount(() => {
        // @ts-ignore
        const dropzone = new Dropzone("#dropzone", {
            uploadMultiple: false,
            maxFiles: 1,
            maxFilesize: 100,
            acceptedFiles: "video/*",
        });

        dropzone.on("success", (file, response) => {
            console.log("TODO BIEN, TODO CORRECTO");

            const { secure_url, public_id } = response;

            const videoData = {
                secure_url: response.secure_url,
                url: response.url,
                filename: response.original_filename,
                framerate: response.frame_rate,
                format: response.format,
                duration: response.duration,
                width: response.width,
                height: response.height,
                public_id: response.public_id,
            };

            videoURL.set(secure_url);
            videoInfo.set(videoData);
            videoStatus.set("uploaded");

            const transformed_url = generateURL(
                secure_url,
                public_id,
                $videoTypeSelected,
            );
            videoTransformed.set(transformed_url);


            console.log(response);
        });

        dropzone.on("error", (file, errorMessage) => {
            console.log("ERROR LOG");
            console.log(errorMessage);
        });

        dropzone.on("sending", function (file, xhr, formData) {
            videoStatus.set("sending");
            formData.append("upload_preset", "hkjmpapq");
            formData.append("timestamp", Date.now() / 1000);
            formData.append("api_key", 378811283629762);
        });
    });
</script>

<form
    id="dropzone"
    class="shadow-2xl border-dashed border-2 border-gray-400 rounded-lg aspect-video
w-full flex items-center justify-center flex-col"
    action="https://api.cloudinary.com/v1_1/dsrlss/video/upload"
>
    {#if $videoStatus === "idle"}
        <button
            class="pointer-events-none bg-red-600 hover:bg-red-700 rounded-lg text-bold text-white text-xl px-6 py-4"
        >
            Subir clip
        </button>
        <strong class="text-ls mt-6 text-gray-600">o arrastra aquí</strong>
    {/if}

    {#if $videoStatus === "sending"}
        <strong class="text-ls mt-6 text-yellow-600">Subiendo...</strong>
    {/if}

    {#if $videoStatus === "uploaded"}
        <strong class="text-ls mt-6 text-green-600">¡Listo!</strong>
    {/if}
</form>
