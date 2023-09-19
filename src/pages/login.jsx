export default function Login() {
  return (
    <div>
      <h1 className="text-2xl mb-2">Login</h1>
      <form className="block" action="#" method="post">
        <input type="text" placeholder="Username" className="block border mb-1" />
        <input type="password" placeholder="Password" className="block border mb-1" />
        <button type="submit" className="border bg-gray-100 p-2">Login</button>
      </form>
    </div>
  )
}