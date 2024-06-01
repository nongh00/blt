let but = document.getElementById("ble");
let connect, serv,charact;
async function onClick() {
  // devise = await navigator.bluetooth.requestDevice({
  //     acceptAllDevices: true,
  //     optionalServices: ['generic_access']
  //   })
  // .then(device => { /* … */ })
  // .catch(error => { console.error(error) })
  // const server = await devise.gatt.connect();
  // const servise = server.getPrimaryServise("generic_access")
  let devise = navigator.bluetooth.requestDevice({ 
    acceptAllDevices: true,
    optionalServices: ['device_information'],
    // filters: [{
    //   manufacturerData: [{
    //     companyIdentifier: 0x00e0,
    //     dataPrefix: new Uint8Array([0x01, 0x02])
    //   }]
    // }],
    // optionalServices: ['device_information'] 
  })
  .then(device => { 
    console.log(`Name: ${device.name}`);
    console.log(`ID: ${device.id}`);
    console.log(`GATT: ${device.gatt}`);
    connect = device.gatt.connect();
    return connect;
    // return device.gatt.connect()
  })
  .then(server => {
    serv = server.getPrimaryService('device_information');
    return serv;
    // return server.getPrimaryService('device_information')
  })
  .then(service => {
    charact = service.getCharacteristic('serial_number_string');
    console.log(charact);
    return charact;
    // return service.getCharacteristic('manufacturer_name_string')
  })
  .catch(error => {console.error(error)})
}
but.addEventListener("click", onClick); 

  


