export const nameRegex = /^[a-zA-Z\s\-']{1,40}$/;

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const isValidEmail = (email: string) => {
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return true;
};

export const isValidDOB = (date: string) => {
  const userDOB = new Date(date);
  const todaysDate = new Date();
  const age = todaysDate.getFullYear() - userDOB.getFullYear();
  const monthDifference = todaysDate.getMonth() - userDOB.getMonth();

  if (age > 120) {
    return "Please enter a valid date of birth";
  }
  if (
    age > 18 ||
    (age === 18 &&
      monthDifference >= 0 &&
      todaysDate.getDate() >= userDOB.getDate())
  ) {
    return true;
  }
  return "You must be at least 18 years old to sign up";
};
