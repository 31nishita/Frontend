import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'Elegance Blog' }) {
  return (
    <>
      <Head><title>{title}</title></Head>
      <nav className="navbar navbar-expand-lg" style={{background:'#faf6f2'}}>
        <div className="container">
          <Link href="/" className="navbar-brand" style={{fontFamily:'Playfair Display, serif', fontWeight:700, fontSize:22, color:'#1f1f1f'}}>Elegance</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link href="/" className='nav-link'>Home</Link></li>
              <li className="nav-item"><Link href="/#about" className='nav-link'>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-5">{children}</main>

      <footer className="py-4" style={{background:'#fff6f0'}}>
        <div className="container text-center">
          <p style={{margin:0}}>© {new Date().getFullYear()} Elegance — Crafted with care</p>
        </div>
      </footer>
    </>
  )
}
