import M from "materialize-css";
import { nextTick } from "vue";

export function initMaterialDatepicker() {
  nextTick(() => {
    const datepickerElements = document.querySelectorAll(".datepicker");
    const datepickerOptions = {
      format: "yyyy-mm-dd",
      container: document.body,
    };
    M.Datepicker.init(datepickerElements, datepickerOptions);
  });
}

export function initMaterialFormSelect() {
  nextTick(() => {
    const selectElements = document.querySelectorAll("select");
    const selectOptions = {
      dropdownOptions: {
        constrainWidth: false,
        container: document.body,
      },
    };
    M.FormSelect.init(selectElements, selectOptions);
  });
}

export function initMaterialSidenav() {
  nextTick(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, { draggable: true });

    // change position for navbar overlay
    const overlay = document.querySelector(".sidenav-overlay");
    const sidenav = document.querySelector(".sidenav");

    if (overlay && sidenav) {
      sidenav.parentNode?.insertBefore(overlay, sidenav);
    }
  });
}
