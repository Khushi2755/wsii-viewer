const MainView = () => {
    return (
      <div className="main-view">
        <div className="zoomed-view">
          <h3>WSI Zoomed IN View</h3>
          <img src={`${process.env.PUBLIC_URL}/slide-image.png`} alt="WSI Zoomed IN View" className="zoomed-image" />
        </div>
      </div>
    );
  };
  
  export default MainView;
  