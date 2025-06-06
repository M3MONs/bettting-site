import React from "react";
import { formatMatchDate } from "@/utils/formatMatchDate";
import { useBets } from "@/context/betsContext";
import BetButton from "@/components/atoms/Bet/BetButton";

const SportEvent = ({ match }) => {
  const { selectedBets, toggleBet } = useBets();
  const selectedBet = selectedBets[match.id]?.betType;

  return (
    <div className="bg-card rounded-md py-3 px-4 mb-3 text-xs lg:text-base xl:text-lg" style={{ fontFamily: "Helvetica" }}>
      <p className="text-xs text-gray-700 font-medium">{match.queue}</p>
      <div className="flex justify-between items-center">
        <p className="py-5 flex gap-4 items-center">
          <span className="font-bold">{match.home_team}</span>
          <span className="flex flex-col items-center text-xs text-gray-500">{formatMatchDate(match.start_time)}</span>
          <span className="font-bold">{match.away_team}</span>
        </p>
        <div className="flex gap-2">
          <BetButton
            title={match.home_team}
            odds={match.home_win_odds}
            isSelected={selectedBet === "home"}
            onClick={() => toggleBet(match.id, "home", match)}
          />

          <BetButton title="Draw" odds={match.draw_odds} isSelected={selectedBet === "draw"} onClick={() => toggleBet(match.id, "draw", match)} />

          <BetButton
            title={match.away_team}
            odds={match.away_win_odds}
            isSelected={selectedBet === "away"}
            onClick={() => toggleBet(match.id, "away", match)}
          />
        </div>
      </div>
    </div>
  );
};

export default SportEvent;
