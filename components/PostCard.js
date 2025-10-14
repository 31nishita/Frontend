import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <div className="card mb-4 shadow-sm post-card" style={{border:'none'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://lh3.googleusercontent.com/gg-dl/AJfQ9KRRYvVECmnAZ5xokFWVsW82CQt1Q98_Y4-VVFJyWxHq-b6Ad1w9BXTEqzgkFYJznzGBdbPHBus88BsAnTEUQkhayNRrYI7y2MV_YtXHDgnrdbdheBZXg1-djSRFfQ9dxjbJNFjUH3PE9RsLg3hsoSZDAnC_CBd95D5CJXYxFI1hhv4X=s1024-rj" className="img-fluid rounded-start" style={{height:160, objectFit:'cover'}} alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={{fontFamily:'Playfair Display, serif'}}>{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{post.date}</small>
              <Link href={'/posts/' + post.id} className='btn btn-outline-dark btn-sm'>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
