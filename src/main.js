let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title === "") {
      alert("Inputan masih kosong");
      return;
   }
   
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = "flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm";

   task.innerHTML = `
         <p class="text-gray-700 text-base">${title}</p>
         <div class="space-x-2">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 cursor-pointer">
         </div>
   `;

   output.appendChild(task);
   input.value = "";
   e.preventDefault();

   // Add functionality to remove or mark the task as completed
   let btnHapus = task.querySelector('#btn-hapus');
   let btnSelesai = task.querySelector('#btn-selesai');

   btnHapus.onclick = function() {
      task.remove();
   };

   btnSelesai.onclick = function() {
      task.querySelector('p').classList.add('line-through', 'text-gray-500');
      btnSelesai.disabled = true;
      btnSelesai.classList.add('bg-gray-400', 'cursor-not-allowed');
   };
};
