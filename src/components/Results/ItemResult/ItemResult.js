import React from "react";
import styles from "./style.module.css";

function ItemResult({ result }) {
  return (
    <tbody className={styles.section}>
      <tr>
        <td className={`py-4 ${styles.itemId}`}>#{result.id} </td>
        <td className="py-4">{result.price} $</td>
        <td className="py-4">{result.qty}</td>
        <td className="py-4">{result.quoteQty}</td>
        <td className="py-4">
          {new Date(result.time)
            .toISOString()
            .substr(0, 19)
            .replace("T", "  ")
            .replaceAll("/", "-")
            .replace(",", " ")}
        </td>
      </tr>
    </tbody>
  );
}

export default ItemResult;
