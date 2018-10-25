// This is the Link API
import Link from 'next/link'

// Using next/link to link two pages, index.js and about.js in this example
const Index = () => (
    <div>
        {/* this is client-side navigation, takes place in the browser w/out making a request to the server. Verify this by opening the browser's network request inspector. */}
        <Link  href="/about"><a>About Page</a></Link>
        <p>Hello Next.js</p>
    </div>
  )
  
  export default Index
