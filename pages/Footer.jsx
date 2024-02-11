export default function Footer() {
  return (
    <div className="flex justify-center flex-col bg-slate-400 pb-16">
      <h6 className="flex justify-center">Contact me:</h6>
      <div className="flex justify-center">
        <div>Phone: &nbsp; </div>
        <div>076 100 30 39</div>
      </div>
      <div className="flex justify-center">
        <div>E-mail: &nbsp;</div>
        <a>shanti.hedelin@hotmail.com</a>
      </div>
      <div className="links flex justify-center space-x-6 pt-12">
        <a>Linkedin</a>
        <a>Github</a>
        <a>Maybe another link</a>
        <a>Maybe another link</a>
      </div>
    </div>
  );
}
