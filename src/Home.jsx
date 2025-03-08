import Banner from "./components/Banner";
import Partners from "./components/Partners";
import RunningCampaign from "./components/RunningCampaign";
import UpcomingCampaigns from "./components/UpcomingCampaigns";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RunningCampaign></RunningCampaign>
      <UpcomingCampaigns></UpcomingCampaigns>
      <Partners></Partners>
    </div>
  );
};

export default Home;
