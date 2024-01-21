const freelancers = [];
const maxFreelancers = 15;
  
const randomNames = [
    "Michael B.",
    "Lenny K.",
    "Beyonce K.",
    "Brittany S.",
    "Christina A.",
    "Jay Z.",
    "Mariah C.",
    "Michael J.",
    "Tupac S.",
    "Celine D.",
    "Jennifer L.",
    "Snoop D.",
    "Kurt C.",
    "Vanilla I.",
    "David B.",
    "Whitney H.",
    "Busta R.",
    "John L."
];
  
const randomPrices = [100, 150, 200, 225, 300, 375, 400, 425, 575, 625];
  
const randomOccupations = [
    "Programmer",
    "Teacher",
    "Engineer",
    "Doctor",
    "Lawyer",
    "Chef",
    "Painter",
    "Alectrician",
    "Marketing",
    "Designer",
];
  
  
const calculateAveragePrice = () => {
    const total = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,0);
    return freelancers.length === 0 ? 0 : total / freelancers.length;
};
  

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);
  

function render() {
    const freelancersId = document.querySelector("#freelancers");
    freelancersId.innerHTML =
      `<tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Price</th>
       </tr>`;
  
    freelancers.forEach((freelancer) => {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = freelancer.name;
  
      const tdOccupation = document.createElement("td");
      tdOccupation.textContent = freelancer.occupation;
  
      const tdPrice = document.createElement("td");
      tdPrice.classList.add("price");
      tdPrice.textContent = `$${freelancer.price}`;
  
      tr.appendChild(tdName);
      tr.appendChild(tdOccupation);
      tr.appendChild(tdPrice);
  
      freelancersId.appendChild(tr);
  
      const average = document.querySelector("#average");
      average.innerHTML = `The average starting price is: $${calculateAveragePrice().toFixed(2)
    }`;
    });
  }
  
  

function addFreelancer() {
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    const price = randomPrices[Math.floor(Math.random() * randomPrices.length)];
    const occupation =
      randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
  
    freelancers.push({ name, price, occupation });
  
render();
  
if (freelancers.length >= maxFreelancers) {
      clearInterval(addFreelancerIntervalId)
    };
}
  