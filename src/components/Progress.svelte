<script>
    import { onMount, onDestroy } from 'svelte';
    
    let progress = 0;
    let interval;
    
    function startTimer() {
      interval = setInterval(() => {
        progress++;
        if (progress >= 150) {
          clearInterval(interval);
        }
      }, 200);
    }
    
    onMount(() => {
      startTimer();
    });
    
    onDestroy(() => {
      clearInterval(interval);
    });
    
    $: percentage = `${Math.min(Math.floor(progress / 150 * 100), 100)}%`;
    
    $: barStyle = `w-${percentage} h-full text-center text-xs text-white bg-pink-300 rounded-full`;
    
    $: label = progress < 90 ? 'Task in progress' : 'Almost done!';
    
    $: labelStyle = progress < 90 ? 'text-pink-300' : 'text-green-500';
    
  </script>
  
  <div class="block p-4 m-auto bg-white rounded-lg shadow w-72">
    <div>
      <span class="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-300">{label}</span>
    </div>
    <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
      <div class={barStyle}>
        {percentage}
      </div>
    </div>
    <p class={`text-xs text-right mt-1 ${labelStyle}`}>{percentage} complete</p>
  </div>