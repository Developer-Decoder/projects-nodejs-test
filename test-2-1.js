//CommonJS , every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

//LOCAL
const secret = "SUPER SECRET";

// SHARE
const Johne = "Johne";
const Peter = "Peter";
const Sara = "Sara";
const Ali = "Ali";
const Mohammad = "Mohammad";

// console.log(module);
module.exports = {
  Johne,
  Peter,
  Sara,
  Ali,
  Mohammad,
  secret,
};
