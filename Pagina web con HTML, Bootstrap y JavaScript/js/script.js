(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('aguinaldoForm');
    const resultado = document.getElementById('resultado');
    const rNombre = document.getElementById('rNombre');
    const rAguinaldo = document.getElementById('rAguinaldo');
    const rTotal = document.getElementById('rTotal');
    const detalleAguinaldo = document.getElementById('detalleAguinaldo');
    const mensajes = document.getElementById('mensajes');

    const inputNombre = document.getElementById('nombre');
    const inputSueldo = document.getElementById('sueldo');
    const inputMeses = document.getElementById('meses');

    function formatMoney(value){
      return '$' + Number(value).toLocaleString('es-MX', { maximumFractionDigits: 2 });
    }

    function validate(){
      let ok = true;
      if(!inputNombre.value.trim()){ inputNombre.classList.add('is-invalid'); ok = false; } else inputNombre.classList.remove('is-invalid');
      const sueldo = parseFloat(inputSueldo.value);
      if(isNaN(sueldo) || sueldo < 0){ inputSueldo.classList.add('is-invalid'); ok = false; } else inputSueldo.classList.remove('is-invalid');
      const meses = parseInt(inputMeses.value,10);
      if(isNaN(meses) || meses < 0){ inputMeses.classList.add('is-invalid'); ok = false; } else inputMeses.classList.remove('is-invalid');
      return ok;
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      mensajes.innerHTML = '';
      if(!validate()){ mensajes.innerHTML = '<div class="alert alert-danger">Corrige los campos marcados.</div>'; resultado.classList.add('d-none'); return; }

      const nombre = inputNombre.value.trim();
      const sueldo = parseFloat(inputSueldo.value);
      const meses = parseInt(inputMeses.value,10);

      // cálculo
      const añosCompletos = Math.floor(meses / 12);
      const mesesSobrantes = meses % 12;
      const pagoPorAño = 2000;
      const maximoExtra = 10000;

      let totalPorAños = añosCompletos * pagoPorAño;
      if(totalPorAños > maximoExtra) totalPorAños = maximoExtra;

      const totalPorMeses = mesesSobrantes * 100;
      let totalAguinaldo = totalPorAños + totalPorMeses;
      if(totalAguinaldo > maximoExtra) totalAguinaldo = maximoExtra;

      const totalPagar = Number(sueldo) + Number(totalAguinaldo);

      // mostrar
      rNombre.textContent = nombre;
      rAguinaldo.textContent = formatMoney(totalAguinaldo);
      rTotal.textContent = formatMoney(totalPagar);

      detalleAguinaldo.innerHTML = `
        <ul class="mb-0">
          <li>Años completos: <strong>${añosCompletos}</strong> → pago: <strong>${formatMoney(totalPorAños)}</strong></li>
          <li>Meses sobrantes: <strong>${mesesSobrantes}</strong> → pago: <strong>${formatMoney(totalPorMeses)}</strong></li>
          <li>Tope máximo de aguinaldo considerado: <strong>${formatMoney(maximoExtra)}</strong></li>
        </ul>
      `;

      resultado.classList.remove('d-none');
      mensajes.innerHTML = '<div class="alert alert-success">Cálculo realizado correctamente.</div>';
      setTimeout(()=>resultado.scrollIntoView({behavior:'smooth', block:'center'}),150);
    });

    form.addEventListener('reset', function(){
      [inputNombre, inputSueldo, inputMeses].forEach(i=>i.classList.remove('is-invalid'));
      resultado.classList.add('d-none');
      mensajes.innerHTML = '';
    });
  });
})();