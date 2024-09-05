import Link from "next/link"

const notFound = () => {
  return (
    <div>
      <h2>not found</h2>
      <p>sorry</p>
      <Link href="/">Return to Home</Link>
    </div>
  )
}

export default notFound
