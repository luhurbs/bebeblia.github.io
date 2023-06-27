function tulisSuratCinta() {
    var penerima = document.getElementById("penerima").value;
    var suratContainer = document.getElementById("surat-container");
    var surat = document.getElementById("surat");
    
    surat.textContent = `--------------------------
  |                        |
  |   SURAT UNTUK BEBEB    |
  |                        |
  --------------------------
  
  Halo ${penerima},
  
  Aku ingin mengatakan betapa berartinya bebeb bagiku.
  Setiap saat bersama bebeb lia adalah momen yang tak terlupakan.
  Aku sayang sama bebeb lia.
  Tidak ada kata yang dapat mengungkapkan betapa aku mencintaimu.
  Hanya ingin kau tahu bahwa aku insyaallah selalu ada untuk bebeb.
  Bebeb adalah sumber kebahagiaanku, inspirasiku, dan cahaya dalam hidupku walaupun kadang ngeselin.
  Tapi aku tetep sayang ama bebeb Lia.
  
  Dengan cinta
  Luhur Paling Ganteng
  
  
  
  
  
  `;
  
    suratContainer.classList.remove("hidden");
  }
  