<script>
    import { onDestroy, onMount } from "svelte";

    export let milliseconds = 0;

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let interval;

    function startTimer() {
        interval = setInterval(() => {
            milliseconds += 1000;
            seconds = Math.floor(milliseconds / 1000) % 60;
            minutes = Math.floor(milliseconds / 60000) % 60;
            hours = Math.floor(milliseconds / 3600000);

            if (milliseconds >= 1000 * milliseconds) {
                clearInterval(interval);
            }
        }, 1000);
    }

    $: timeString = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    onMount(() => {
        startTimer();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div>
    <h1>{timeString}</h1>
</div>
