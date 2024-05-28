import React from 'react';
import './x.css';

const handleView = (rank) => {
  console.log(`View strategy with rank: ${rank}`);
};

const handleBuy = (rank) => {
  console.log(`Buy strategy with rank: ${rank}`);
};

const strategies = [
  { rank: 1, name: "Selling with re entr", calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: "-" },
  { rank: 2, name: "strategy_name", calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: 500 },
  { rank: 3, name: "Based on premium and", calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: "-" },
  { rank: 4, name: "strategy_name", calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: "-" },
  { rank: 5, name: "strategy_name", calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: "-" },
  { rank: 6, name: "Based on premium wit", calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, price: "-" },
  { rank: 7, name: "strategy_name", calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.6, price: "-" },
  { rank: 8, name: "Wait and trade_Save", calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercentage: 0.63, price: "-" },
  { rank: 9, name: "iron condor", calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, price: "-" },
  { rank: 10, name: "strategy_name", calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, price: "-" },
];

function MatchPredictions(props) {
  const tableHeader = ['Rank', 'Name', 'Calmar Ratio', 'Overall Profit', 'Avg. Daily Profit', 'Win % (Day)', 'Price (Rs)', 'Action'];

  return (
    <div className="section-heading text-center pb-3">
      <h2>LEADERBOARDS</h2>
      <br/>
      <table className="table table-condensed">
        <thead>
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy) => (
            <tr key={strategy.rank}>
              <td>{strategy.rank}</td>
              <td align="left">{strategy.name}</td>
              <td>
  <img src="https://www.citypng.com/public/uploads/preview/hd-3d-green-increase-development-growth-arrow-up-right-png-701751695044474axt0dzcmss.png?v=2024051718" 
       alt="increase arrow" 
       width="20" 
       height="20" />
  {strategy.calmarRatio}
</td> <td>{strategy.overallProfit}</td>
              <td>{strategy.avgDailyProfit}</td>
              <td>{strategy.winPercentage}</td>
              <td>{strategy.price}</td>
              <td>
                {strategy.price === '-' ? (
                  <button className="xyz" onClick={() => handleView(strategy.rank)}>View</button>
                ) : (
                  <button className="xyz" onClick={() => handleBuy(strategy.rank)}>Buy</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchPredictions;
