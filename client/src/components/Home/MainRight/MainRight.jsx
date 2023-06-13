import './MainRight.css';

const MainRight = () => {
  return (
    <div>
      <div className="mainright">
        <div className="left-section">
          <div className="year">
            <p>2020</p>
          </div>
          <h1>
            Daily <br /> Draw & Games
          </h1>
          <div className="get-container">
            <p>₹10</p>
            <div className="get-it-now">
              <h2>+ Get it now</h2>
            </div>
          </div>
        </div>
        <div className="draw-product">
          <img src="../../src/assets/images/earpod.png" alt="" />
        </div>
      </div>
      <div className="mainright">
        <div className="left-section">
          <div className="year">
            <p>2020</p>
          </div>
          <h1>
            Weekly <br /> Draw & Games
          </h1>
          <div className="get-container">
            <p>₹10</p>
            <button className="get-it-now">
              <h2>+ Get it now</h2>
            </button>
          </div>
        </div>
        <div className="draw-product2">
          <img src="../../src/assets/images/iphone2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainRight