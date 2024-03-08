const tempAwait =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true);
        },3000)
    })
}


export const Navbar = async() => {
    console.log('render navbar');

    await tempAwait();
    
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <a className="mr-2" href="about">About</a>
      <a className="mr-2" href="pricing">Pricing</a>
      <a className="mr-2" href="contact">Contact</a>
    </nav>
  )
}

