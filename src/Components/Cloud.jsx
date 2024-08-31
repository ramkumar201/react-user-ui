import AuthLayout from "./layouts/AuthLayout";
import "../css/cloud.css";
import "../css/Home.css";

const Cloud = () => {
  const handleGoSection = (type) => {
    // toast.warning("asd");
  };
  return (
    <>
      <AuthLayout>
        <section className="profile-section">
          <div className="home-container">
            <div className="profile-content">
              <div className="p-2 md:p-4 w-full">
                <div className="w-full px-6 pb-8 mt-8">
                  <h2 className="pl-6 text-2xl font-bold content-title">
                    Cloud
                  </h2>
                  <div className="cloud-container">
                    <div className="cloud-column">
                      <img
                        className="cloud-img cursor-pointer"
                        src="./images/picture.png"
                        alt="imagealt"
                        onClick={() => handleGoSection("img")}
                      />
                      <span className="cursor-pointer">Image</span>
                    </div>
                    <div className="cloud-column">
                      <img
                        className="cloud-img cursor-pointer"
                        src="./images/video.png"
                        alt="videoalt"
                        onClick={() => handleGoSection("video")}
                      />
                      <span className="cursor-pointer">Video</span>
                    </div>
                    <div className="cloud-column">
                      <img
                        className="cloud-img cursor-pointer"
                        src="./images/headphone.png"
                        alt="musicalt"
                        onClick={() => handleGoSection("music")}
                      />
                      <span className="cursor-pointer">Music</span>
                    </div>
                    <div className="cloud-column">
                      <img
                        className="cloud-img cursor-pointer"
                        src="./images/documentlist.png"
                        alt="documentalt"
                        onClick={() => handleGoSection("document")}
                      />
                      <span className="cursor-pointer">Document</span>
                    </div>
                    <div className="cloud-column">{/*  */}</div>
                  </div>

                  {/* Table - Start */}
                  <div className="grid max-w-2xl mx-auto">
                    <div className="items-center mt-8 text-[#202142]">
                      {/* <FileDataTable /> */}
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

export default Cloud;
