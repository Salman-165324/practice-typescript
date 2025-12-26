const source = {
    name: "Alice",
    address: { city: "Dhaka" }
  };


  const target = {  address: { city: "Sylhet" }}; 


  Object.assign(target, source); 

  console.log(target);


  source.address.city = "Chittagong"
  source.name = "Mike"
  source.address.town = 'Malibagh'

  console.log(target);
