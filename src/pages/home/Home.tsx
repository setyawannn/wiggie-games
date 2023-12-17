import { Link } from "react-router-dom";
import WiggleImage from "../../components/reusable/WiggleImage";
import RootLayout from "../../layouts/RootLayout";

const Home = () => {
  return (
    <RootLayout>
      <div className="h-[80vh]">
        <div className="relative top-20 flex items-center">
          <div className="w-3/5">
            <h1 className="text-5xl font-extrabold leading-normal">
              Jelajahi Dunia Belajar Yang Seru
            </h1>
            <p className="mt-4 text-lg">
              Ayo Bermain Bersama Guru dan Teman - Teman dan Sehingga
              Pembelajaran Lebih Menyenangkan!
            </p>
            <Link to={"/"} className="btn btn-md btn-primary mt-12">
              Mainkan Sekarang!
            </Link>
          </div>
          <div className="w-2/5">
            <WiggleImage imageUrl={"/assets/images/cat-big.png"} />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Home;
