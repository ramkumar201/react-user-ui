import AuthLayout from "./layouts/AuthLayout";
import FileDataTable from "./FileDataTable";
import StorageTypeChart from "./Chart/StorageTypeChart";
import StorageChart from "./Chart/StorageChart";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <AuthLayout>
        <section className="profile-section">
          <div className="home-container">
            <div className="profile-content">
              <div className="p-2 md:p-4 w-full">
                <div className="w-full px-6 pb-8 mt-8">
                  <h2 className="pl-6 text-2xl font-bold sm:text-xl mt-3">
                    {/* Home */}
                  </h2>
                  {/* Chart - Start */}
                  <div className="chart-container">
                    <div className="chart-column">
                      <StorageTypeChart />
                    </div>
                    <div className="chart-column">
                      <StorageChart />
                    </div>
                    <div className="chart-column">{/*  */}</div>
                  </div>
                  {/* Table - Start */}
                  <div className="grid max-w-2xl mx-auto">
                    <div className="items-center mt-8 text-[#202142]">
                      <FileDataTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AuthLayout>
    </>
  );
};

export default Home;
