//itenary
fetch("assets/doc/itenary.json")
  .then((response) => response.json())
  .then((itenaryData) => {
    const container = document.getElementById("itenary");
    const btnShow = container.previousElementSibling;

    //
    itenaryData.forEach((item) => {
      const table = document.createElement("table");
      table.className = "dbox__table";

      table.innerHTML = `
    <thead>
                  <tr>
                    <th colspan="2">Hari ${item.hari} : ${item.judul}
                    </th>
                  </tr>
                </thead>
                <tbody>
                ${item.kegiatan
                  .map(
                    (k, index) => `
                  <tr>
                    <td class="col__no">
                      ${index + 1}.
                    </td>
                    <td class="col__fill">
                     ${k}
                    </td>
                  </tr>
                  `
                  )
                  .join("")}           
                </tbody>
    `;

      const wrapper = document.createElement("div");
      wrapper.className = "dbox__table__wrapper";
      wrapper.appendChild(table);
      container.appendChild(wrapper);

      //

      btnShow.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
    });
  })
  .catch((error) => console.error("gagal load", error));

//syarat pendaftaran
fetch("assets/doc/syarat.json")
  .then((response) => response.json())
  .then((syaratData) => {
    const container = document.getElementById("syarat");
    const btnShow = container.previousElementSibling;

    //
    syaratData.forEach((item) => {
      const table = document.createElement("table");
      table.className = "dbox__table";

      table.innerHTML = `
    <thead>
                  <tr>
                    <th colspan="2">${item.judul}
                    </th>
                  </tr>
                </thead>
                <tbody>
                ${item.isi
                  .map(
                    (k, index) => `
                  <tr>
                    <td class="col__no">
                      ${index + 1}.
                    </td>
                    <td class="col__fill">
                     ${k}
                    </td>
                  </tr>
                  `
                  )
                  .join("")}           
                </tbody>
    `;

      const wrapper = document.createElement("div");
      wrapper.className = "dbox__table__wrapper";
      wrapper.appendChild(table);
      container.appendChild(wrapper);

      //

      btnShow.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
    });
  })
  .catch((error) => console.error("gagal load", error));

//fasilitas
fetch("assets/doc/fasilitas.json")
  .then((response) => response.json())
  .then((fasilitasData) => {
    const container = document.getElementById("fasilitas");
    const btnShow = container.previousElementSibling;

    //
    fasilitasData.forEach((item) => {
      const table = document.createElement("table");
      table.className = "dbox__table";

      table.innerHTML = `
    <thead>
                  <tr>
                    <th colspan="2">${item.judul}
                    </th>
                  </tr>
                </thead>
                <tbody>
                ${item.isi
                  .map(
                    (k) => `
                  <tr>
                    <td class="col__no">
                      <i class="ri-checkbox-circle-line"></i>
                    </td>
                    <td class="col__fill">
                     ${k}
                    </td>
                  </tr>
                  `
                  )
                  .join("")}           
                </tbody>
    `;

      const wrapper = document.createElement("div");
      wrapper.className = "dbox__table__wrapper";
      wrapper.appendChild(table);
      container.appendChild(wrapper);

      //

      btnShow.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
    });
  })
  .catch((error) => console.error("gagal load", error));

//syarat dan ketentuan
fetch("assets/doc/ketentuan.json")
  .then((response) => response.json())
  .then((ketentuanData) => {
    const container = document.getElementById("ketentuan");
    const btnShow = container.previousElementSibling;

    //
    ketentuanData.forEach((item) => {
      const table = document.createElement("table");
      table.className = "dbox__table";

      table.innerHTML = `
    <thead>
                  <tr>
                    <th colspan="2">${item.judul}
                    </th>
                  </tr>
                </thead>
                <tbody>
                ${item.isi
                  .map(
                    (k, index) => `
                  <tr>
                    <td class="col__no">
                      ${index + 1}.
                    </td>
                    <td class="col__fill">
                     ${k}
                    </td>
                  </tr>
                  `
                  )
                  .join("")}           
                </tbody>
    `;

      const wrapper = document.createElement("div");
      wrapper.className = "dbox__table__wrapper";
      wrapper.appendChild(table);
      container.appendChild(wrapper);

      //

      btnShow.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
    });
  })
  .catch((error) => console.error("gagal load", error));
