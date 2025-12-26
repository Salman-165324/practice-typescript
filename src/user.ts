type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: any) {
  // Find the user in the array by the id
  // Use Object.assign to update the found user in place.
  // Check MDN if you need help with using Object.assign

  let userIndex: number;
  let isFound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i]?.id === id) {
      userIndex = i;
      isFound = true;
      Object.assign(users[i] as User, updates);
      break;
    }
  }

  if (!isFound) {
    throw new Error("User not found");
  }
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
// updateUser(8, { role: "contributor" });

console.log(users);
