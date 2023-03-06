<script>
    let open = false;
    
    function toggleModal() {
      open = !open;
    }
    
    function closeModal() {
      open = false;
    }
  </script>
  
  {#if open}
    <div class="modal">
      <div class="row">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
      </div>
      <button on:click={closeModal}>Cerrar</button>
    </div>
  {/if}
  
  <style>
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 50%;
    }
  
    .item {
      width: 50%;
      text-align: center;
      padding: 1rem;
      background-color: #fff;
      border: 1px solid #000;
      box-sizing: border-box;
    }
  </style>