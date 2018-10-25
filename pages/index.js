// This is the Link API
import Link from 'next/link'
// Import Header from components
import Header from '../components/Header'

export default () => (
    <div>
      <Header />
      <p>Hello Next.js</p>
    </div>
  )

// Using next/link to link two pages, index.js and about.js in this example unnote below this line to see previous example.
// const Index = () => (
//     <div>
//         {/* this is client-side navigation, takes place in the browser w/out making a request to the server. Verify this by opening the browser's network request inspector. */}
//         {/* styling must be applied to the underlying component, the anchor in this case, instead of the Link component which, is a higher order component and only accepts specific props, like the href. */}
//         <Link  href="/about">
//         <a style={{fontSize: 20}}>About Page</a></Link>
//         <p>Hello Next.js</p>

//         {/* using a button instead of a link to get to another page */}
//         <Link href="/blog">
//           <button>Go to Blog Page</button>
//         </Link>

//         {/* Just like a button you can place any custom React components or evn a 'div' within a link. The only requirement for components placed instide Link is they should accept an 'onClick' prop */}
//     </div>
//   )
  
//   export default Index
