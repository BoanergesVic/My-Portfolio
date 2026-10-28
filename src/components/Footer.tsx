export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__mark">VIF</span>
        <span>Copyright {new Date().getFullYear()} Victor Iyanuoluwa Fadeyi</span>
        <a href="#main">Back to top</a>
      </div>
    </footer>
  );
}
