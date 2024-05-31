let but = document.getElementById("ble");
let devise;
async function onClick() {
  devise = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['generic_access']
    })
  .then(device => { /* … */ })
  .catch(error => { console.error(error) })
  const server = await devise.gatt.connect();
  const servise = server.getPrimaryServise("generic_access")
}
but.addEventListener("click", onClick)
