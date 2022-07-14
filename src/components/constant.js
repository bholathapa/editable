const randomName = () => {
  const names = [
    "Alfred",
    "Barry",
    "Charlie",
    "David",
    "Eugene",
    "Fred",
    "George",
    "Harry",
    "Ivan",
    "John",
    "Kevin",
    "Larry",
  ];
  const randomValue = Math.floor(Math.random() * names.length);
  return names[randomValue];
};

export const headers = ["#", "First", "Last", "Handle", "Email", "Phone", "Address", "City", "State", "Zip", "Country"];

export const data = [
  {
    id: 1,
    first: "Mark",
    last: "Otto",
    handle: "@mdo",
    email: "mark@gmail.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  {
    id: 2,
    first: "John",
    last: "Doe",
    handle: "@mdo",
    email: "jondoe@gmail.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  {
    id: "3",
    first: "Jane",
    last: "Doe",
    handle: "@mdo",
    email: "janedoe@gmail.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  // create upto 50 id
  ...Array(50)
    .fill(0)
    .map((_, idx) => ({
      id: idx + 4,
      first: randomName(),
      last: "Doe",
      handle: "@mdo",
      email: "job@gmail.com",
      phone: "123-456-7890",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    })),
];
