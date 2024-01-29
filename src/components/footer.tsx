const Footer = () => {
  return (
    <footer className="mx-auto w-fit animate-bounce rounded-full bg-slate-300 px-8 pb-2 pt-1 text-center text-slate-800 transition-all hover:animate-none hover:bg-slate-100 hover:shadow-[0_0_4px_4px_rgba(0,0,0,0.2)]">
      <small>
        <small>
          Desenvolvido com ☕ por{" "}
          <a href="http://github.com/EltonJCS" target="_blank">
            <b className="hover:text-purple-600">EltonJCS</b>
          </a>
        </small>
      </small>
    </footer>
  );
};

export default Footer;
