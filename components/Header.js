import Link from 'next/link'

// create common Header component and use it in multiple pages.
const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <button style={linkStyle}>Home</button>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header