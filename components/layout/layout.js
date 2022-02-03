import Navigation from "../navigation/Navigation"
export default function Layout({ children }) {
  return (
    <>
      <nav className="relative z-10">
        <Navigation />
      </nav>
      <main>{children}</main>
    </>
  )
}
