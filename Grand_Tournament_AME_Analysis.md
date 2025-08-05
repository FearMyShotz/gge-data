# Grand Tournament (AME) Analysis

## Overview

The Grand Tournament is a new Alliance Event Manager (AME) system introduced in commit 3664a35. It represents a sophisticated alliance-based quest competition with 5 divisions and progressive rewards.

## Event Configuration

- **Event ID**: 36
- **Event Type**: AlliTournament  
- **Min Level**: 6
- **Max Level**: 1020
- **System**: Alliance Event Manager (AME)

## Division Structure

According to the language files, the Grand Tournament features 5 divisions:

1. **Copper** - Starting division for new alliances
2. **Glass** - Second tier
3. **Bronze** - Middle tier
4. **Silver** - High tier
5. **Gold** - Elite tier

### Promotion/Demotion System

#### Ranking Mode (Standard)
- **Gold**: bottom 3 rank down to Silver
- **Silver**: top 3 rank up to Gold; bottom 9 rank down to Bronze
- **Bronze**: top 3 rank up to Silver; bottom 8 rank down to Glass
- **Glass**: top 4 rank up to Bronze; bottom 12 rank down to Copper
- **Copper**: top 6 rank up to Glass

#### Distribution Phase (First Tournament)
Initial placement from Copper based on performance:
- Place 1-48: rank up to Gold
- Place 49-80: rank up to Silver
- Place 81-480: rank up to Bronze
- Place 481-1200: rank up to Glass

## Reward System

### League Configuration

The tournament currently has one unified league configuration (leaguetypeID 1) that covers all player levels 6-1020, with division mechanics likely handled through the AME system rather than traditional league types.

### Reward Sets

**Reward Set 1 (High-End/Elite):**
- Point thresholds: 3,000 → 10,786,000 (40 levels)
- Exponential scaling with massive point requirements for top levels
- Reward IDs: 2827-2869

**Reward Set 2 (Standard/Beginner):**
- Point thresholds: 50 → 16,000 (40 levels)  
- More accessible progression curve
- Same reward IDs: 2827-2869 (but note reward 2856 replaced with 2037)

## Gameplay Mechanics

### Quest System
- Up to 24 quests available simultaneously
- Only 1 quest can be accepted at a time
- Quests have time limits - failure to complete loses the quest
- Any alliance member can reroll unaccepted quests
- Quest completion adds points to alliance score

### Quest Tickets
- Start with up to 10 Quest Tickets
- Each accepted quest consumes 1 ticket
- Additional tickets purchasable with Rubies
- Tickets don't carry over between tournaments
- Failed quests don't refund tickets

### Cooldown System
- Claiming, failing, or rerolling puts quest slot on cooldown
- Cooldowns can be skipped with Rubies

## Currency Analysis

The Grand Tournament rewards include various currencies and items:

### Primary Rewards Identified
- **Units**: Various unit types (715, 714, 739, 26, 774, 740, etc.)
- **PegasusTicket**: Premium event currency
- **LuckyWheelTicket**: Gacha system currency  
- **Hidden Resources**: Food, materials
- **Decorations**: Elite rewards including unique decoration items

### Progression Structure
- Early rewards focus on units and basic resources
- Mid-tier rewards introduce premium currencies
- Top-tier rewards feature exclusive decorations and rare items

## Technical Implementation

### AME System Features
- Real-time alliance participation tracking
- Division-based matchmaking and rewards
- Seasonal adjustment mechanisms
- Subdivision system for fair competition
- Multiple rule modes (Ranking, Distribution, Adjustment)

### Herald Building
- EventID 36 associated with "AlliHerold" building type
- 8x8 building size
- Cannot be moved or destroyed
- Linked to tournament participation

## Key Findings

1. **Unified League System**: Unlike traditional level-based leagues, uses single league with AME division management
2. **Dual Reward Tracks**: Two distinct progression paths with different difficulty scaling
3. **Quest-Driven Gameplay**: Points earned through completing alliance quests rather than individual activities
4. **Dynamic Division System**: Three different rule modes for different tournament phases
5. **Alliance-Centric Design**: Success depends on alliance coordination and participation

## Analysis Status

- ✅ Event structure and configuration identified
- ✅ Division system and promotion mechanics documented
- ✅ Reward progression and currency system mapped
- ✅ Gameplay mechanics and quest system analyzed
- 🔄 **In Progress**: Detailed reward breakdown and currency mapping
- ⏳ **Pending**: Complete quest catalog and individual division documentation

---
*Analysis based on Grand Tournament (AME) data added in commit 3664a35*