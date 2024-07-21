import img1 from './idea.png'
import recycle from './Recycling-bro.png'
import { Link } from 'react-router-dom';
import img from "./market.png"

import "./section.css"
function section() {
    return (
      <><>
            <div className="flex flex-row justify-center gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={recycle}
                            alt="recycle"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text">How to ReCycle ??</h2>
                        <div className="card-actions">
                            <Link to="/recycle"><button className="btn btn-primary text-white">Search</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img1}
                            alt="chef"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text">Community</h2>
                        <div className="card-actions">
                            <Link to="/posts"><button className="btn btn-primary text-white">Explore</button></Link>
                            <Link to="/add-post"><button className="btn btn-primary text-white">Add-Post</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="plant"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
  <h2 className="card-title text">MarketPlace</h2>
  <div className="card-actions">
  <Link to="/items"><button className="btn btn-primary text-white">Buy</button></Link>
  <Link to="/add-item"><button className="btn btn-primary text-white">Sell</button></Link>
  </div>
</div>

                </div>
            </div>
        </>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Team MP1B-10</p>
                </aside>
    </footer></>
    );
  }
  
  export default section;