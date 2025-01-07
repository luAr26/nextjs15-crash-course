import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { mockApiUrl } from "../../../secret";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsersPage() {
  const authObject = await auth();
  const user = await currentUser();

  console.log(authObject, user);

  await new Promise((resolve) => setTimeout(resolve, 2000)); // delay for 2 seconds

  const response = await fetch(mockApiUrl);
  const users = await response.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const res = await fetch(mockApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const newUser = await res.json();
    revalidatePath("/mock-users");
  }

  return (
    <main className='max-w-md mx-auto px-4'>
      <h1>Mock Users</h1>
      <div className='py-4'>
        <form action={addUser}>
          <input
            type='text'
            name='name'
            required
            className='block mb-2 text-gray-800'
          />
          <button
            type='submit'
            className='border border-green-400 bg-green-400 rounded px-2 py-1 text-white'
          >
            Add user
          </button>
        </form>
      </div>
      {users.map((user: MockUser) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </main>
  );
}
