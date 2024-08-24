import AuthLayout from "./layouts/AuthLayout";
import FileDataTable from "./FileDataTable";

const Home = () => {
  return (
    <>
      <AuthLayout>
        <section className="profile-section">
          <div className="home-container">
            <div className="profile-content">
              <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                  <h2 className="pl-6 text-2xl font-bold sm:text-xl mt-3">
                    Home
                  </h2>
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
