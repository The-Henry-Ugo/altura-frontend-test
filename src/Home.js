import { useState } from "react";
import { cards } from "./Data";
import styles from "./styles/Home.module.css";
import { IoArrowForward, IoCloseOutline, IoCopyOutline } from "react-icons/io5";
import SearchHeader from "./components/SearchHeader";

const Home = () => {
  const [modalContent, setModalContent] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);
  const changeContent = (card) => {
    setModalContent([card]);
    setModalToggle(!modalToggle);
  };
  return (
    <div className={styles.nft_grid_container}>
      <SearchHeader />
      <div className={styles.nft_cards}>
        {cards.map((card) => (
          <div className={styles.nft_card} key={card.id}>
            <div className={styles.nft_img}>
              <img src={card.nft_image} alt={card.nft_name} />
            </div>
            <div className={styles.nft_card_details}>
              <p className={styles.nft_name}>{card.nft_name}</p>
              <div className={styles.nft_price}>
                <img src={card.token_image} alt="ETH" />
                <p>{card.price} ETH</p>
              </div>
            </div>
            <button
              className={styles.view_details_btn}
              onClick={() => changeContent(card)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {modalToggle && (
        <div
          className={styles.nft_full_details_container}
          onClick={changeContent}
        >
          {modalContent.map((modal) => {
            return (
              <div
                className={styles.nft_full_details_content}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.close_btn} onClick={changeContent}>
                  <IoCloseOutline />
                </button>

                <div className={styles.nft_details_img_container}>
                  <div className={styles.nft_details_img}>
                    <img src={modal.nft_image} alt="" />
                    <div className={styles.nft_details_img_overlay}></div>
                  </div>
                  <div className={styles.owner_address}>
                    <div>
                      <img src="/images/eth_logo_owner.png" alt="" />
                      <p>0xDAFEA4...92c98Bc5</p>
                      <IoCopyOutline />
                    </div>
                  </div>
                </div>

                <div className={styles.nft_details_container}>
                  <div className={styles.nft_details_row}>
                    <div className={styles.nft_details_description_column}>
                      <div className={styles.description_content}>
                        <h5>Description</h5>
                        <p>{modal.description}</p>
                      </div>
                      <div className={styles.properties_content}>
                        <div className={styles.property}>
                          <p className={styles.property_header}>Background</p>
                          <p className={styles.property_body}>
                            {modal.background}
                          </p>
                        </div>
                        <div className={styles.property}>
                          <p className={styles.property_header}>Mask Color</p>
                          <p className={styles.property_body}>
                            {modal.mask_color}
                          </p>
                        </div>
                        <div className={styles.property}>
                          <p className={styles.property_header}>Ears</p>
                          <p className={styles.property_body}>{modal.ears}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.nft_details_price_column}>
                      <img src="/images/eth.png" alt="" />
                      <p>{modal.price}</p>
                    </div>
                  </div>

                  <a href={modal.link} className={styles.purchase_btn}>
                    <p>Purchase NFT</p>
                    <IoArrowForward className={styles.arrow} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
