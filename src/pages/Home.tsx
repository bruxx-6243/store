import { useContext, useState } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { useProduct } from "../hooks/useProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModaleContext";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { products, loading, error, addProduct } = useProduct();
  const [page, setPage] = useState<number>(0);

  const productsPerPage = 8;
  const pagesVisited = page * productsPerPage;

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => <Product key={product.id} product={product} />);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }: { selected: number; total: number }) =>
    setPage(selected);

  const {
    modal,
    open: openModal,
    close: closeModal,
  } = useContext(ModalContext);

  const handleCreate = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <div className="container  mx-auto px-4 max-w-4xl grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mb-6">
        {displayProducts}
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="flex items-center justify-center gap-4"
        previousLinkClassName="border px-4 py-2 hover:bg-yellow-400"
        nextLinkClassName="border px-4 py-2 hover:bg-yellow-400"
        disabledClassName="border-red px-4 py-2"
        activeClassName="border border-yellow-400 bg-yellow-400 py-2"
        pageLinkClassName="border px-4 py-2 hover:bg-yellow-400"
      />

      {modal && (
        <Modal onClose={() => closeModal()} title="Create New Product">
          <CreateProduct onCreate={handleCreate} />
        </Modal>
      )}

      <div className="fixed bottom-10 right-5">
        <button
          onClick={() => openModal()}
          className="shrink-0 bg-red-800 text-white text-xl px-[13px] py-2 rounded-full"
        >
          <i className="ri-add-line"></i>
        </button>
      </div>
    </>
  );
};

export default Home;
