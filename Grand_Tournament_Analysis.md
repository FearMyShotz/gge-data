# Großes Turnier (Grand Tournament) - Event-Analyse

## Überblick
Das Große Turnier (engl. "Grand Tournament") ist ein neues Allianz-Event, das im Commit 3664a35 hinzugefügt wurde. Es verwendet das "Alliance Event Manager" (AME) System und führt eine quest-basierte Gameplay-Mechanik mit Divisions-System ein.

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

Basierend auf den gefundenen Quest-Titeln gibt es folgende Hauptkategorien:

### Ressourcen-Ausgaben
- Münzen ausgeben (1.000.000)
- Rohstoffe ausgeben (Glas, Kohle, Olivenöl, Eisenerz je 250.000)
- Verschiedene Token ausgeben

### PvE-Kämpfe
- Raubritter-Burgen besiegen (verschiedene Level-Bereiche)
- Barbaren-Türme besiegen
- Wüsten-Türme besiegen
- Kultisten-Türme besiegen

### Einheiten-Beschaffung
- Einheiten mit spezifischen Verteidigungswerten
- Einheiten mit spezifischen Angriffswerten
- Kriegswagen sammeln
- Mauer-Fallen sammeln

### Premium-Währungen
- Rubine sammeln (verschiedene Mengen)
- Zeit-Beschleuniger ausgeben
- Verschiedene Spezial-Token

### Allianz-spezifisch
- Allianz-Münzen ausgeben/kaufen
- Opfergaben für Generäle

## Technische Details

**Event-Typ**: Alliance Event Manager (AME)
**Quest-System**: 66 verschiedene Quest-Typen identifiziert
**Cooldown-System**: Quest-Slots haben Abklingzeiten
**Reroll-Mechanik**: Allianz-Mitglieder können Quests neu würfeln

## Status der Analyse

✅ **Abgeschlossen:**
- Event-Struktur identifiziert
- Grundmechanik verstanden
- Divisions-System dokumentiert
- Quest-Kategorien erfasst
- Deutsche Übersetzungen extrahiert

🔄 **In Bearbeitung:**
- Detaillierte Reward-ID Zuordnung
- Spezifische Quest-Belohnungen
- Level-Schwellenwerte für Divisionen
- Genaue Aufstiegs-/Abstiegsprozentsätze

⏳ **Ausstehend:**
- Reward-Stacking-Verhalten zwischen Ligen
- Vollständige Belohnungstabellen
- Finale Dokumentation