let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
  console.log("Only offer up vegan dishes! ")
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
  console.log("Make sure to offer up some vegan options.")
} else {
  console.log("Offer up anything on the menu.")
}