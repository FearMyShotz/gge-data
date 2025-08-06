# Großes Turnier (Grand Tournament) - Event-Analyse

## Überblick
Das Große Turnier ist ein neues Allianz-Event, das im Commit 3664a35 hinzugefügt wurde. Es führt eine quest-basierte Gameplay-Mechanik mit Divisions-System sowie Auf- und Abstiegsmöglichkeiten ein.

## Event-Grundlagen

### Teilnahmevoraussetzungen
- Allianz muss mindestens 5 Mitglieder mit Level 20+ haben
- Spieler selbst muss mindestens Level 20 sein
- Alle Mitglieder müssen bereits vor Event-Start in der Allianz sein
- Nur Teilnahme für eine Allianz möglich

### Grundmechanik
- **Ziel**: Sammeln von Grand Tournament Punkten durch Abschließen von Quests
- **Quest-System**: Bis zu 24 Quests gleichzeitig verfügbar
- **Quest-Tickets**: Beginn mit 10 Tickets, 1 zusätzlich kaufbar für Rubine
- **Zeitlimit**: Quests müssen innerhalb eines Zeitrahmens abgeschlossen werden

## Divisions-System

Das Event verwendet ein 5-stufiges Divisions-System:

1. **Kupfer** (Copper) - Einstiegs-Division
2. **Glas** (Glass) 
3. **Bronze**
4. **Silber** (Silver)
5. **Gold** - Höchste Division

### Regelmodie
Das System kennt 3 verschiedene Regelmodie:

#### 1. Setzphase (Seeding Phase)
- Nur beim allerersten Grand Tournament
- Alle Allianzen starten in Bronze-Division
- Eine große Unterteilung für alle Allianzen
- Divisionszuteilung basierend auf Leistung

#### 2. Ranking-Modus (Standard)
- Standard-Regelmodus
- Neue Allianzen starten in Kupfer-Division
- Aufstieg/Abstieg basierend auf Platzierung:
  - **Kupfer**: Top X steigen zu Glas auf
  - **Glas**: Top X zu Bronze auf, Bottom X zu Kupfer ab
  - **Bronze**: Top X zu Silber auf, Bottom X zu Glas ab
  - **Silber**: Top X zu Gold auf, Bottom X zu Bronze ab
  - **Gold**: Bottom X zu Silber ab

#### 3. Anpassungsmodus (Adjustment)
- Aktiv zur Neuverteilung zwischen Divisionen
- Alle Allianzen in einer großen Unterteilung
- Divisionszuteilung basierend auf Leistung

## Belohnungssystem

### Level-Belohnungen
- Verdient beim Erreichen neuer Grand Tournament Level
- Höhere Divisionen = mehr Level = bessere Belohnungen
- Sofortige Beanspruchung im Belohnungshub

### Rang-Belohnungen
- Für Top-Spieler in ihrer Unterteilung
- Mindestbeitrag erforderlich
- Verlust bei Allianz-Verlassen während Event

## Neue Währung: Allianz-Münze (AllianceCoin)

**Beschreibung (Deutsch)**: "Ein Symbol vereinter Stärke. Spendet sie an die Allianzmittel, um Grand Tournament-Quests abzuschließen. Sie können im Shop gekauft oder als Belohnung in einigen Allianz-Events gewonnen werden. Ihr Wert wird steigen, wenn neue Allianz-Herausforderungen aufkommen."

## Quest-Kategorien

Siehe [hier](https://github.com/FearMyShotz/gge-data/blob/ame/AME_Quests.md) für eine detaillierte Liste mit allen Quests.

## Technische Details

- **Event-Typ**: Alliance Event Manager (AME)
- **Quest-System**: 66 verschiedene Quest-Typen identifiziert
- **Cooldown-System**: Quest-Slots haben Abklingzeiten
- **Reroll-Mechanik**: Allianz-Mitglieder können Quests neu würfeln
