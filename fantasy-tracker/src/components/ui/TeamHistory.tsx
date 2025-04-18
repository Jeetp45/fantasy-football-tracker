import { useState } from 'react';
import { teams } from '@/data/teams';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select.tsx';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SeasonHistoryTable from '@/components/ui/SeasonHistoryTable';
import CurrentHistory from './CurrentHistory';
import TeamWinChart from './TeamWinChart';
import PointsComparisonChart from './PointComparisonChart';

const TeamHistory = () => {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | 'all' | null>(
    null
  );

  const selectedTeam = teams.find((team) => team.id === selectedTeamId);

  const seasons = selectedTeam
    ? selectedTeam.seasonHistory.map((season) => season.year)
    : [];

  const selectedSeasonData = selectedTeam?.seasonHistory.find(
    (season) => season.year === selectedSeason
  );

  return (
    <div className='py-6'>
      <div className='container mx-auto'>
        <Card className='max-w-3xl mx-auto p-6 text-center bg-blue-400'>
          <CardHeader>
            <h1 className='text-2xl text-white font-semibold font-serif'>
              Team Season History
            </h1>
          </CardHeader>
          <div className='mt-4'>
            <Select
              onValueChange={(value) => {
                setSelectedTeamId(value);
                setSelectedSeason('all');
              }}
            >
              <SelectTrigger className='w-full bg-red-300 text-white border border-gray-400'>
                <span className='text-white font-serif'>
                  {selectedTeam?.name || 'Select a Team'}
                </span>
              </SelectTrigger>
              <SelectContent className='bg-red-300 text-white'>
                <SelectItem value='2024' className='hover:bg-gray-600'>
                  2024 Season Overview
                </SelectItem>
                {teams.map((team) => (
                  <SelectItem
                    key={team.id}
                    value={team.id}
                    className='hover:bg-gray-600'
                  >
                    {team.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedTeam && (
            <div className='mt-4'>
              <Select
                onValueChange={(value) =>
                  setSelectedSeason(value === 'all' ? 'all' : Number(value))
                }
              >
                <SelectTrigger className='w-full bg-red-300 text-white border border-gray-400'>
                  <span className='text-white font-serif'>
                    {selectedSeason === 'all'
                      ? 'All Seasons'
                      : selectedSeason ?? 'Select a Season'}
                  </span>
                </SelectTrigger>
                <SelectContent className='bg-red-300 text-white'>
                  <SelectItem value='all' className='hover:bg-gray-600'>
                    All Seasons
                  </SelectItem>
                  {seasons.map((year) => (
                    <SelectItem
                      key={year}
                      value={year.toString()}
                      className='hover:bg-gray-600'
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </Card>

        <div className='mt-6'>
          <Card className='max-w-6xl mx-auto p-6 bg-emerald-400'>
            <CardHeader>
              <h2 className='flex justify-center text-xl font-semibold text-white font-serif mb-2'>
                {selectedTeam
                  ? selectedSeason === 'all'
                    ? `${selectedTeam.team} - All Seasons`
                    : selectedSeason
                    ? `${selectedTeam.team} - ${selectedSeason} Season`
                    : 'Select a Season'
                  : '2024 Season Overview'}
              </h2>
            </CardHeader>
            <CardContent>
              {selectedTeam && selectedSeason === 'all' ? (
                <div>
                  <SeasonHistoryTable
                    team={selectedTeam}
                    seasons={selectedTeam.seasonHistory}
                  />
                  <div className='mt-6'>
                    <h3 className='text-center text-xl font-semibold text-white font-serif mb-2'>
                      Wins Over Time
                    </h3>
                    <TeamWinChart seasons={selectedTeam.seasonHistory} />
                  </div>
                  <div className='mt-6'>
                    <h3 className='text-center text-xl font-semibold text-white font-serif mb-2'>
                      Points For vs. Points Against
                    </h3>
                    <PointsComparisonChart
                      seasons={selectedTeam.seasonHistory}
                    />
                  </div>
                </div>
              ) : selectedTeam && selectedSeasonData ? (
                <SeasonHistoryTable
                  team={selectedTeam}
                  seasons={[selectedSeasonData]}
                />
              ) : (
                <CurrentHistory />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamHistory;
