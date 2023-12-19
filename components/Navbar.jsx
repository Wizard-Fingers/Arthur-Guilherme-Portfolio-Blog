function Navbar({ links }) {
  // styles
  //   const styles = {};

  return (
    <>
      {links.map((linkItem, index) => (
        <a key={index} href={linkItem.link}>
          <h3 className="ml-6 text-3xl font-bold mt-4 ">{linkItem.text}</h3>
        </a>
      ))}
      <div className="hidden lg:flex w-[10rem] h-3 mt-2" />
      <div className="  lg:w-[5rem] w-[8rem] h-2 bg-Blue mt-2" />
    </>
  );
}

export default Navbar;
