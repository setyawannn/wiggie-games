import { useState } from "react";
import RootLayout from "../../layouts/RootLayout";
import { motion } from "framer-motion";

const Games = () => {
  const [isTrueAnswer, setIsTrueAnswer] = useState(false);

  const showModal = () => {
    const modalElement = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;

    if (modalElement && modalElement.showModal) {
      modalElement.showModal();
    }
  };
  return (
    <RootLayout>
      <div className="flex justify-center mt-10 z-10">
        <div className="mockup-code px-4 max-w-sm h-fit absolute">
          <p>
            Sebuah segitiga ABC dengan siku-siku di A, memiliki panjang sisi
            miring (a) sama dengan 5 cm dan sisi mendatar (c) sama dengan 3.
            <button onClick={showModal} className="link link-primary ml-2">
              Lihat Gambar
            </button>
          </p>
        </div>
        <div className="absolute w-full max-w-4xl flex justify-end gap-4">
          <img src="/assets/images/heart-unfilled.png" alt="" className="w-8" />
          <img src="/assets/images/heart-filled.png" alt="" className="w-8" />
          <img src="/assets/images/heart-filled.png" alt="" className="w-8" />
        </div>
      </div>

      <div className="relative h-[50vh] top-20 -z-10">
        <div className="">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isTrueAnswer ? 680 : 100 }}
            transition={{ duration: 2 }}
            className="absolute top-32"
          >
            <p className="font-bold">
              {isTrueAnswer ? "Nyam Nyam" : "Aku mau ikan!!"}{" "}
            </p>
            <img
              src="/assets/images/gif-new.gif"
              alt=""
              className={`w-32 ${isTrueAnswer ? "" : "transform -scale-x-100"}`}
            />
          </motion.div>
          <div className="absolute top-48 right-2">
            <img src="/assets/images/fish-fries.png" alt="" className="w-24 " />
          </div>
          <div className="divider divider-neutral -mt-6 relative top-64"></div>
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl text-center font-bold">Pilih Jawaban</h2>
        <div className="grid grid-cols-4 gap-4 mt-8">
          <button className="btn btn-primary btn-lg">23</button>
          <button className="btn btn-neutral btn-lg">40</button>
          <button className="btn btn-secondary btn-lg">21</button>
          <button
            onClick={() => setIsTrueAnswer(!isTrueAnswer)}
            className="btn btn-accent btn-lg"
          >
            18
          </button>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="modal-box">
          <img src="/assets/images/example-task.jpg" alt="contoh soal" />
          <div className="modal-action">
            <form method="dialog" className="">
              <button className="btn btn-primary content">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </RootLayout>
  );
};

export default Games;
