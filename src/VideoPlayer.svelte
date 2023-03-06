<script>
    import { videoStatus, videoURL , videoInfo} from "./store";
    export let src = '';
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="player" controls width="300">
    <source src={src}>
</video>