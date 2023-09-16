import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  return {
    props : { users }
  }
}

export default function Search({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
