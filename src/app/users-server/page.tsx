type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersSeverPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <>
      <h1>Users Server</h1>
      {users.map((user: User) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </>
  );
}
