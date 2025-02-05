import { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import { getCrypto } from "../../api/external";

import style from "./Crypto.module.css";


function Crypto() {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async function getCryptoApiCall() {
            const response = await getCrypto();
            setData(response);
        })();
        setData([]);
    }, [])
    if (data.length <= 0) {
        return <Loader text="Crypto page"></Loader>
    }

    const nagitiveStyle={
        color:'#ea3943'
    }
    const positiveStyle={
        color:'#16c784'
    }
    return (
        <table className={style.table}>
            <thead>
                <tr className={style.header}>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>24h</th>
                </tr>
            </thead>
            <tbody>
                {data.map((coin) => (
                    <tr id={coin.id} className={style.tableRow}>
                        <td>{coin.market_cap_rank}</td>
                        <td>
                            <div className={style.logo}>
                                <img src={coin.image} width={40} height={40} /> {coin.name}
                            </div>
                        </td>
                        <td >
                            <div className={style.symbol}>{coin.symbol}</div>
                        </td>
                        <td>{coin.current_price}</td>
                        <td
                        style={coin.price_change_percentage_24h<0?nagitiveStyle:positiveStyle}
                        >{coin.price_change_percentage_24h}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default Crypto;