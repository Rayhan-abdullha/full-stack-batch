const gadgets = [
  {
    id: 1,
    name: "Smartphone X100",
    category: "Smartphone",
    brand: "TechCorp",
    price: 699.99
  },
  {
    id: 2,
    name: "UltraSound Buds Pro smart",
    category: "Earbuds",
    brand: "SoundMax",
    price: 129.99
  },
  {
    id: 3,
    name: "AirTab 10",
    category: "Tablet",
    brand: "Airtronics",
    price: 399.99
  },
  {
    id: 4,
    name: "HyperWatch S2",
    category: "Smartwatch",
    brand: "WristTech",
    price: 249.99
  },
  {
    id: 5,
    name: "Photon Camera XT",
    category: "Camera",
    brand: "Photonix",
    price: 549.99
  },
  {
    id: 6,
    name: "GameBox Z",
    category: "Gaming Console",
    brand: "GameWare",
    price: 499.99
  },
  {
    id: 7,
    name: "PowerBank 20000mAh smart",
    category: "Power Bank",
    brand: "ChargeIt",
    price: 39.99
  },
  {
    id: 8,
    name: "NeoFit Scale",
    category: "Smart Scale",
    brand: "HealthTrack",
    price: 89.99
  },
  {
    id: 9,
    name: "DroneEye 4K",
    category: "Drone",
    brand: "SkyVision",
    price: 799.99
  },
  {
    id: 10,
    name: "Mini Projector Z9",
    category: "Projector",
    brand: "ViewLight",
    price: 219.99
  }
];

function searchByName(gadgets = [], search = '') {
    if (!search || !gadgets.length) {
        console.log('search params is required!')
        return
    }
    for (const product of gadgets) {
        const matched = []
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            console.log(product.name.toLowerCase().includes(search.toLowerCase()))
            matched.push(product)
        }
        return matched
    }mklkl
console.log('smart watc'.toLowerCase().includes('smart'))]\';'h[p ]++++++++++++++++++