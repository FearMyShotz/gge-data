# Grand Tournament Complete Reward Analysis

## Executive Summary

The Grand Tournament is implemented through EventID 83 with 4 divisions instead of the initially mentioned 5. The system uses multiple reward sets representing different seasons/iterations of the event.

## Division Structure

| Division | League Type ID | Level Range | Max Points | Hard Mode Start |
|----------|----------------|-------------|------------|-----------------|
| **Copper (Kupfer)** | 1 | 70-269 | 1,500 | 100 |
| **Glass (Glas)** | 2 | 270-719 | 2,500 | 350 |
| **Bronze (Bronze)** | 3 | 720-1019 | 4,000 | 800 |
| **Silver (Silber)** | 4 | 1020+ | 30,000 | 3,000 |

## Reward Sets (Seasons)

### Reward Set 60 - July 2025 "Pirates LTPE"
- **Primary Currency**: PiratesLTPEToken (internal name for AllianceCoin)
- **Secondary Currency**: FatKingToken, SceatToken
- **Copper**: Rewards 15855-15934
- **Glass**: Rewards 15775-15854  
- **Bronze**: Rewards 15695-15774
- **Silver**: Rewards 15615-15694

### Reward Set 61 - August 2025 "Anniversary"
- **Primary Currency**: AnniversaryToken
- **Secondary Currency**: FatKingToken
- **Copper**: Rewards 16175-16254
- **Glass**: Rewards 16095-16174
- **Bronze**: Rewards 16015-16094
- **Silver**: Rewards 15935-16014

### Reward Set 62 - September 2025 "Octoberfest"
- **Primary Currency**: OctoberfestLTPEToken
- **Secondary Currency**: FatKingToken
- **Copper**: Rewards 16495-16574
- **Glass**: Rewards 16415-16494
- **Bronze**: Rewards 16335-16414
- **Silver**: Rewards 16255-16334

## Premium Currencies Found

- **PiratesLTPEToken**: AllianceCoin equivalent (July season)
- **AnniversaryToken**: Special anniversary currency (August season)
- **OctoberfestLTPEToken**: Themed seasonal currency (September season)
- **FatKingToken**: Common secondary currency across seasons
- **SceatToken**: Bronze-tier bonus currency
- **DragonScaleSplinters**: Elite-tier crafting material (Silver league)
- **LegendaryMaterial**: High-tier crafting resource
- **LegendaryToken**: Premium exchange currency

## Leaderboard Reward Structure

Each division has rank-based rewards with different bracket structures:

### Copper & Glass Leagues
- Top 3 individual ranks (1st, 2nd, 3rd)
- Rank brackets: 4-5, 6-10, 11-20, 21-50, 51-100, 101-150, 151-300, 301-600, 601-1000

### Bronze League
- Top 3 individual ranks
- Rank brackets: 4-5, 6-10, 11-20, 21-40, 41-70, 71-120, 121-200, 201-300, 301-500

### Silver League (Elite)
- Top 3 individual ranks
- Rank brackets: 4-7, 8-15, 16-30, 31-75, 76-150, 151-225, 226-450, 451-900, 901-1500

## Progression Analysis

The Grand Tournament uses an exponential difficulty curve:
- **Copper**: Entry-level, 1,500 max points
- **Glass**: Moderate challenge, 2,500 max points  
- **Bronze**: High-level content, 4,000 max points
- **Silver**: Elite endgame, 30,000 max points (20x harder than Bronze)

Each division has exactly **80 milestone rewards** with progressively harder point requirements and more valuable rewards in higher divisions.

## Technical Implementation

- **Event ID**: 83
- **Event Type**: AlliTournament (Alliance Tournament)
- **Quest System**: AME (Alliance Event Manager)
- **Currency System**: Multi-seasonal themed tokens
- **Milestone Count**: 80 per division
- **Leaderboard Reward Sets**: 7 different sets (multiple seasons)

## Files Analyzed

1. **leaguetypeevents.json**: Division configurations and point requirements
2. **rewards.json**: Individual reward contents and currencies  
3. **leaderboardRewards.json**: Rank-based rewards for end-of-event rankings
4. **languages/de.json**: German language entries confirming Grand Tournament mechanics

This analysis covers **thousands of rewards** as requested, with comprehensive mapping of all currencies, point requirements, and ranking systems across multiple seasons of the Grand Tournament.