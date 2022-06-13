import { FC } from 'react';
import { useUI } from '@components/ui/context'
import s from './SizeGuide.module.css'

//  dynamically generate from array with forEach() or JSON
//  conditionally render either Mens/Womens/Kids sizes

const SizeGuide: FC = () => {
  return (
    <>
      <h3 className={s.heading}>Size Guide</h3>
      <table className={s.table}>
        <tbody>
          <tr className={s.tableRow}>
            <th className={s.tableHeaders}>UK</th>
            <th className={s.tableHeaders}>EU</th>
            <th className={s.tableHeaders}>US</th>
            <th className={s.tableHeaders}>Japan</th>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>3</td>
            <td className={s.tableCell}>35.5</td>
            <td className={s.tableCell}>5</td>
            <td className={s.tableCell}>22.5</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>3.5</td>
            <td className={s.tableCell}>36</td>
            <td className={s.tableCell}>5.5</td>
            <td className={s.tableCell}>23</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>4</td>
            <td className={s.tableCell}>37</td>
            <td className={s.tableCell}>6</td>
            <td className={s.tableCell}>23</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>4.5</td>
            <td className={s.tableCell}>37.5</td>
            <td className={s.tableCell}>6.5</td>
            <td className={s.tableCell}>23.5</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>5</td>
            <td className={s.tableCell}>38</td>
            <td className={s.tableCell}>7</td>
            <td className={s.tableCell}>24</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>5.5</td>
            <td className={s.tableCell}>39</td>
            <td className={s.tableCell}>7.5</td>
            <td className={s.tableCell}>24</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>6</td>
            <td className={s.tableCell}>39.5</td>
            <td className={s.tableCell}>8</td>
            <td className={s.tableCell}>24.5</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>6.5</td>
            <td className={s.tableCell}>40</td>
            <td className={s.tableCell}>7.5</td>
            <td className={s.tableCell}>25</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>7</td>
            <td className={s.tableCell}>41</td>
            <td className={s.tableCell}>9.5</td>
            <td className={s.tableCell}>25.5</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>7.5</td>
            <td className={s.tableCell}>41.5</td>
            <td className={s.tableCell}>10</td>
            <td className={s.tableCell}>26</td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.tableCell}>8</td>
            <td className={s.tableCell}>42</td>
            <td className={s.tableCell}>10.5</td>
            <td className={s.tableCell}>26.5</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SizeGuide
